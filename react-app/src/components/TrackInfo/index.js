import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';
import EditTrackModal from '../TrackEditForm/index';
import DeleteTrackModal from '../TrackDelete/index';
import { actionResetTrack } from '../../store/tracks';
import ReactPlayer from 'react-player'
import './TrackInfo.css';
import React from 'react';
import { createAnnotation } from '../../store/annotations';
import AnnotationForm from '../AnnotationForm/AnnotationForm';



export default function TrackInfo() {
  const { trackId } = useParams()
  // console.log(trackId)
  const dispatch = useDispatch()
  const track = useSelector(state => state.tracks.oneTrack)
  const user = useSelector(state => state.session.user)
  // console.log("awdeeeeeeeeeeeeeeeeeeeeeewwwwwadw", track)
  const history = useHistory()

  // const annotations = useSelector(state => state.tracks.oneTrack.Annotations)

  const [errors, setErrors] = useState([])


  //annotation stuff

  const [index, setIndex] = useState([])
  const [startIndex, setStartIndex] = useState()
  const [endIndex, setEndIndex] = useState()

  const [annotating, setAnnotating] = useState(false)

  // console.log('annotating', annotating)

  useEffect(() => {
    if (startIndex !== endIndex && startIndex !== Infinity) {
      setAnnotating(true)
    }
    else setAnnotating(false)
  }, [startIndex, endIndex])

  useEffect(() => {
    setStartIndex(Math.min(...index))
    setEndIndex(Math.max(...index))
  }, [index])


  const annotateThis = async (e) => {
    // console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)).join(''))
    e.preventDefault()
    // console.log(trackId)
    // console.log(annotations)

    const selected = window.getSelection && window.getSelection()


    if (selected && selected.rangeCount > 0) {
      const highlight = selected.getRangeAt(0)
      setIndex([highlight.startOffset, highlight.endOffset])
      // console.log("SETSTSETSDFDSF", index)
      // console.log("SETSTSETSDFDSF", startIndex)
      // console.log("SETSTSETSDFDSF", endIndex)
      // console.log(highlight)
    }

    // const annotationInfo = {
    //   annotation_body: 'something',
    //   startIndex: startIndex,
    //   endIndex: endIndex,
    // }

    // let createdAnnotation = await dispatch(createAnnotation(trackId, annotationInfo)).catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors)
    // })
    // if (createdAnnotation) {

    //   // console.log('SELECTED',selected)
    //   // console.log('RANGECOUNT',selected.rangeCount)
    //   // console.log(trackId)
    //   // console.log(createdAnnotation)
    //   history.push(`/tracks/${trackId}`)
    // }
    // else return errors


  }


  // end annotation stuff


  useEffect(() => {
    dispatch(getOneTrack(trackId))

    return () => dispatch(actionResetTrack())
  }, [dispatch, user, trackId])



  return (
    <div>
      <div className="track-info-container">

      </div>
      <div className='track_art'>
        <img src={track.track_art}></img>
      </div>

      <div className='track_title_artist'>
        <div className='track_title'>
          {track.track_title}
        </div>
        <div className='track_artist'>
          {track.artist}
        </div>
        <div>
          on {track.album} (album)
        </div>
      </div>
      <div className='track_producer'>
        <div>
          Produced by:
        </div>
        <div className='track_producer_name'>
          {track.produced_by}
        </div>
      </div>
      <div className='track_release'>
        Release Date:
        <div className='track_release_date'>
          {track.release_date?.split(' ').slice(0, -2).slice(1).join(' ')}
        </div>
      </div>
      <div className='buttons'>
        <div className='button1'>
          {user?.id === track.user_id && <EditTrackModal />}
        </div>
        <div className='button2'>
          {user?.id === track.user_id && <DeleteTrackModal />}
        </div>
      </div>

      <div className='body_page'>
        <div className='lyric-wrapper'>

          <div className='lyrics_body'>
            {/* Track Lyrics: */}

            <div className='lyric-track' onMouseUp={annotateThis}>
              {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}>{chunk}</div>)} */}
              {/* {track.lyrics} */}
              {/* {track.lyrics?.split("\n")} */}
              {/* {React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk))} */}
              {/* {console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)))} */}

              {/* {React.Children.toArray(Object.values(annotations))} */}
              {/* {Object.values(annotations)?.map(anno => anno.annotation_body)} */}
              {track.lyrics?.split('\n').slice(1, 6)}
            </div>
          </div>
          <div className='lyric-annotate'>
            {annotating && <AnnotationForm indexes={[startIndex, endIndex]} setAnnotating={['annotating', 'asds']} />}
          </div>
          {/* {annotating && <AnnotationForm /> } */}

        </div>

      </div>
      <div className='track-video'>
        <div className='about-wrapper'>

          {/* <div>Video</div> */}
          <div className='music-vid-text'> About </div>

          <div className='about-artist'>
            <div className='about-album-cover'>
              <img className="about-cover" src={track.track_art}></img>
            </div>
            <div className='album-details'>

              <div className='about-track-title'>
                {track.track_title}
              </div>

              <div className='about-track-des'>
                on {track.album} (album)
              </div>

            </div>
          </div>
          <div className='credits-wrapper'>
            <div className='credits-text'>
              Credits
            </div>
            <div className='credits-people'>
              <div className='about-credit-name'>
                <div className='about-credit'>
                  Produced by
                </div>
                <div>
                  {track.produced_by}
                </div>
              </div>
              <div className='about-credit-name'>
              <div className='about-credit'>
                  Uploaded by
                </div>
                <div>
                  {track?.uploader?.username}
                </div>
              </div>
            </div>
          </div>
          <ReactPlayer className="mv" width="750px" height="430px" url={track.track_url} />
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


    </div>
  )
}
