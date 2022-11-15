import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';
import EditTrackModal from '../TrackEditForm/index';

import React from 'react';




export default function TrackInfo() {
    const { trackId } = useParams()
    const dispatch = useDispatch()
    const track = useSelector(state => state.tracks)

    useEffect(() => {
        dispatch(getOneTrack(trackId))
    }, [dispatch, trackId])

    return (
        <div>
            <EditTrackModal />

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
                Track Lyrics:
                <span>
                {track.lyrics}
                </span>

            </div>


        </div>
    )
}
