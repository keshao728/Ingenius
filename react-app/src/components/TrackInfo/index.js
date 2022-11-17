import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';
import EditTrackModal from '../TrackEditForm/index';
import DeleteTrackModal from '../TrackDelete/index';
import { actionResetTrack } from '../../store/tracks';
import ReactPlayer from 'react-player'

import React from 'react';
import { createAnnotation } from '../../store/annotations';



export default function TrackInfo() {
    const { trackId } = useParams()
    console.log(trackId)
    const dispatch = useDispatch()
    const track = useSelector(state => state.tracks.oneTrack)
    const user = useSelector(state => state.session.user)
    const history = useHistory()

    const [errors, setErrors] = useState([])


    //annotation stuff

    const [index, setIndex] = useState([])
    const [startIndex, setStartIndex] = useState()
    const [endIndex, setEndIndex] = useState()

    useEffect(() => {
        setStartIndex(Math.min(...index))
        setEndIndex(Math.max(...index))
    }, [index])



    const annotateThis = async (e) => {
        e.preventDefault()
        // console.log(trackId)

        const selected = window.getSelection && window.getSelection()


        if (selected && selected.rangeCount > 0) {
            const highlight = selected.getRangeAt(0)
            setIndex([highlight.startOffset, highlight.endOffset])
            // console.log(highlight)
        }

        const annotationInfo = {
            annotation_body: 'something',
            startIndex: startIndex,
            endIndex: endIndex,
          }

          let createdAnnotation = await dispatch(createAnnotation(trackId, annotationInfo)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        if (createdAnnotation) {

            // console.log('SELECTED',selected)
            // console.log('RANGECOUNT',selected.rangeCount)
            // console.log(trackId)
            // console.log(createdAnnotation)
            history.push(`/tracks/${trackId}`)
        }
        else return errors
    }




    // end annotation stuff

    useEffect(() => {
        dispatch(getOneTrack(trackId))

        return () => dispatch(actionResetTrack())
    }, [dispatch, user, trackId])

    return (
        <div>
            {user?.id === track.user_id && <EditTrackModal />}
            {user?.id === track.user_id && <DeleteTrackModal />}

            <div>
                <img src={track.track_art}></img>
            </div>

            <div>
                Track Title: {track.track_title}
            </div>

            <div>
                Track Artist: {track.artist}
            </div>

            <div>
                Track Album: {track.album}
            </div>

            <div>
                Track Release Date:
                <div>
                    {track.release_date?.split(' ').slice(0, -2).slice(1).join(' ')}
                </div>
            </div>

            <div>
                Track Producer: {track.produced_by}
            </div>

            <div>
                Track Lyrics:

                <div onMouseUp={annotateThis}>
                    {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}>{chunk}</div>)} */}
                    {track.lyrics}
                </div>

            </div>

            <div>
                <ReactPlayer url={track.track_url} />
                {/* <iframe
                    width="560"
                    height="315"
                    src={track.track_url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe> */}

                {/* Track Url: {track.track_url} */}
            </div>


        </div>
    )
}
