import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';
import EditTrackModal from '../TrackEditForm/index';
import { actionResetTrack } from '../../store/tracks';

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
            {user?.id === track.user_id && <EditTrackModal />}

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
                <span>
                    {track.lyrics}
                </span>

            </div>

            <div>
                <iframe
                    width="560"
                    height="315"
                    src={track.track_url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>

                {/* Track Url: {track.track_url} */}
            </div>


        </div>
    )
}
