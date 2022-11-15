import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTrack } from '../../store/tracks';
import { useHistory } from 'react-router-dom';

export default function CreateTrack() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [trackTitle, setTrackTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [producedBy, setProducedBy] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [trackArt, setTrackArt] = useState('')
    const [trackUrl, setTrackUrl] = useState('')
    const [errors, setErrors] = useState([])



    // let validate = () => {
    //     let validationErrors = []


    //     setErrors(validationErrors)

    //     return validationErrors
    // }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!errors.length) {
            setErrors([])

            const track = {
                track_title: trackTitle,
                artist,
                album,
                release_date: releaseDate,
                produced_by: producedBy,
                lyrics,
                track_art: trackArt,
                track_url: trackUrl
            }

            let createdTrack = await dispatch(createTrack(track)).catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
            if (createdTrack) history.push(`/tracks/${createdTrack.id}`)
        }
    }

    return (
        <>
            <div>
                <h1>
                    Create a Track
                </h1>
            </div>

            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>
                            Title
                        </label>
                        <input
                            type="text"
                            value={trackTitle}
                            placeholder="Track Title"
                            required
                            onChange={(e) => setTrackTitle(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Artist
                        </label>
                        <input
                            type="text"
                            value={releaseDate}
                            placeholder="Release Date"
                            onChange={(e) => setArtist(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Album
                        </label>
                        <input
                            type="text"
                            value={album}
                            placeholder="Album"
                            onChange={(e) => setAlbum(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Release Date
                        </label>
                        <input
                            type="text"
                            value={releaseDate}
                            placeholder="Release Date"
                            onChange={(e) => setReleaseDate(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Producer
                        </label>
                        <input
                            type="text"
                            value={producedBy}
                            placeholder="Producer"
                            onChange={(e) => setProducedBy(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Lyrics
                        </label>
                        <input
                            type="text"
                            value={lyrics}
                            placeholder="Lyrics"
                            required
                            onChange={(e) => setLyrics(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Track Art
                        </label>
                        <input
                            type="text"
                            value={trackArt}
                            placeholder="Track Art"
                            onChange={(e) => setTrackArt(e.target.value)} />
                    </div>

                    <div>
                        <label>
                            Track Url
                        </label>
                        <input
                            type="text"
                            value={trackUrl}
                            placeholder="Track Url"
                            required
                            onChange={(e) => setTrackUrl(e.target.value)} />
                    </div>

                    <div>
                        <button type="submit">Create Track</button>
                    </div>

                </form>
            </div>
        </>
    )

}
