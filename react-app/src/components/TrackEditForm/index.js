import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditTrack from './EditTrackForm'
import './EditTrackForm.css'


export default function EditTrackModal() {
    const [modalOpen, setModalOpen] = useState(false)


    return (
        <div>
            <button className='editButton' onClick={() => setModalOpen(true)}>Edit Track</button>
            {modalOpen && (<Modal onClose={()=> setModalOpen(false)}>
                <EditTrack setModalOpen={setModalOpen}/>
            </Modal>)}
        </div>
    )
}
