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




export default function TrackInfo() {
    const { trackId } = useParams()
    const dispatch = useDispatch()
    const track = useSelector(state => state.tracks.oneTrack)
    const user = useSelector(state => state.session.user)

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
                Produced by:
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

            {user?.id === track.user_id && <EditTrackModal />}
            {user?.id === track.user_id && <DeleteTrackModal />}



            <div>
                Track Lyrics:

                <div>
                    {track.lyrics?.split('\n').map(chunk => <div key={chunk}>{chunk}</div>)}
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
