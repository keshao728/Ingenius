import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editTrack, getOneTrack, actionResetTrack } from '../../store/tracks'
import { useParams } from 'react-router-dom'




export default function EditTrack({ setModalOpen }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const track = useSelector(state => state.tracks)
    const user = useSelector(state => state.session.user)

    const [id, setId] = useState(track.id)
    const [trackTitle, setTrackTitle] = useState(track.track_title)
    const [artist, setArtist] = useState(track.artist)
    const [releaseDate, setReleaseDate] = useState(track.releaseDate)
    const [producedBy, setProducedBy] = useState(track.producedBy)
    const [lyrics, setLyrics] = useState(track.lyrics)
    const [trackArt, setTrackArt] = useState(track.trackArt)
    const [trackUrl, setTrackUrl] = useState(track.trackUrl)
    const [errors, setErrors] = useState([])

    const [displayErrors, setDisplayErrors] = useState(false);

    // let validate = () => {
    //     let validationErrors = [];

    //     setErrors(validationErrors);

    //     if (validationErrors.length) setDisplayErrors(true)

    //     return validationErrors

    // }


    // useEffect(() => {
    //     if (displayErrors) validate()
    // }, [])


    useEffect(() => {
        dispatch(getOneTrack(id))

        return () => dispatch(getOneTrack(id))
        // return () => dispatch(actionResetTrack())
    }, [dispatch, id])


    const handleSubmit = (e) => {
        e.preventDefault()


        if (!errors.length) {
            setErrors([])
            setDisplayErrors(false)
            // let validationErrors = validate()
            // if (validationErrors.length) return
            setModalOpen(false)

            const trackEdits = {
                id,
                track_title: trackTitle,
                artist,
                release_date: releaseDate,
                produced_by: producedBy,
                lyrics,
                track_art: trackArt,
                track_url: trackUrl
            }

            return dispatch(editTrack(trackEdits, id)).catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)

            })

        }
        history.push(`/tracks/${id}`)
        return errors
    }

    return (
        <div>
            <form className='' onSubmit={handleSubmit}>

                <h1>
                    Edit Track
                </h1>

                <div>
                    <label>
                        <input className="" type="text" value={trackTitle} placeholder={trackTitle || "Enter a title"} required onChange={(e) => setTrackTitle(e.target.value)} />
                    </label>

                </div>

                <div>
                    <label>
                        <input className="" type="text" value={artist} placeholder={artist || "Enter artist name"} required onChange={(e) => setArtist(e.target.value)} />
                    </label>
                </div>


                <div>
                    <label>
                        <input className="" type="date" value={releaseDate} placeholder={releaseDate || "Enter release date"} onChange={(e) => setReleaseDate(e.target.value)} />
                    </label>
                </div>
                {/*
                <select className=''
                    value={releaseDate}
                    placeholder={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}>
                    <option disabled={true} value="">--Choose a Date--</option>

                    <option key={album.id} value={album.id}>{album.title}</option>
                </select> */}

                <div>
                    <label>
                        <input className="inputField" type="text" value={producedBy} placeholder={producedBy || "Enter a producer"} onChange={(e) => setProducedBy(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        <input className="inputField" type="text" value={trackArt} placeholder={trackArt || "Enter Track Image"} onChange={(e) => setTrackArt(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        <input className="inputField" type="text" value={trackUrl} placeholder={trackUrl || "Enter a url"} onChange={(e) => setTrackUrl(e.target.value)} />
                    </label>
                </div>

                {/* <div>
                    <label>
                        <input className="inputField" type="textarea" value={lyrics} placeholder={lyrics || "Enter Lyrics"} required onChange={(e) => setLyrics(e.target.value)} />
                    </label>
                </div> */}

                <div className="signUpErrors">
                    <ul>
                        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>


                <div>
                    <button className='createButton' type="submit">Update Track</button>
                    <button className='createButton' onClick={() => setModalOpen(false)}>Cancel</button>
                </div>


            </form>
        </div>
    )
}
