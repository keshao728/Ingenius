import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';

import React from 'react';




export default function TrackInfo() {
    const { trackId } = useParams()
    const dispatch = useDispatch()
    const track = useSelector(state => state.track)

    useEffect(() => {
        dispatch(getOneTrack(trackId))
    }, [dispatch, trackId])

    return (
        <div>

            <div>
                {track.track_title}
            </div>

            <div>
                {track.artist}
            </div>

            <div>
                {track.album}
            </div>

            <div>
                {track.lyrics}
            </div>


        </div>
    )
}
