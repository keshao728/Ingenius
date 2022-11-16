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
    const track = useSelector(state => state.tracks)
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getOneTrack(trackId))

        return () => dispatch(actionResetTrack())
    }, [dispatch, user, trackId])

    return (
        <div>
            {user?.id === track.user_id && <EditTrackModal />}

            <div>
                Track Art:
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
                Track Release Date: {track.release_date}
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
                Track Url: {track.track_url}
            </div>


        </div>
    )
}
