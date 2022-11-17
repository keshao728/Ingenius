import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { deleteTrack } from '../../store/tracks'
import './DeleteTrackForm.css'




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
                <div className='DeleteForm_wrapper'>
                    <div className='DeleteForm_question'>
                        <div className='questions'>
                            Would you like to delete this track:
                        </div>
                        <p className='track_title'>{track.track_title} ?</p>
                    </div>
                    <div className="">

                        <button className='delete_confirm' type='submit'>Confirm</button>
                        <button className='delete_cancel' onClick={() => setModalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
