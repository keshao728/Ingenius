import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteTrack from './DeleteTrackForm'
import '../TrackEditForm/EditTrackForm.css'

export default function DeleteTrackModal() {
    const [modalOpen, setModalOpen] = useState(false)



    return (
        <div>
            <button className='DeleteButton' onClick={() => setModalOpen(true)}>Delete Track</button>
            {modalOpen && (<Modal onClose={()=> setModalOpen(false)}>
                <DeleteTrack setModalOpen={setModalOpen}/>
            </Modal>)}
        </div>
    )
}
