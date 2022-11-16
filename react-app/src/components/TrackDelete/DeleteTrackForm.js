import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { deleteTrack } from '../../store/tracks'




export default function DeleteTrack({ setModalOpen }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const track = useSelector((state) => state.tracks.oneTrack)
    const user = useSelector((state) => state.session.user)
    // const songId = useSelector((state) => state.songId)
    const { trackId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(deleteTrack(trackId))
        setModalOpen(false)
        history.push('/')
    }

    return (
        <div className="">
            <form className='' onSubmit={handleSubmit}>
                <h1>Delete Track: <p>{track.track_title}</p></h1>

                <div className="">

                    <button className='' type='submit'>Confirm</button>
                    <button className='' onClick={() => setModalOpen(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
