import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editTrack, getOneTrack, actionResetTrack } from '../../store/tracks'
import { useParams } from 'react-router-dom'
import './EditTrackForm.css'



export default function EditTrack({ setModalOpen }) {
  const dispatch = useDispatch()
  const history = useHistory()
  // const { id } = useParams()
  const track = useSelector(state => state.tracks)
  const user = useSelector(state => state.session.user)

  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultDate = date.toLocaleDateString('en-CA');

  const [id, setId] = useState(track.id)
  const [trackTitle, setTrackTitle] = useState(track.track_title)
  const [artist, setArtist] = useState(track.artist)
  const [album, setAlbum] = useState(track.album)
  const [releaseDate, setReleaseDate] = useState(track.releaseDate ? track.releaseDate : defaultDate)
  const [producedBy, setProducedBy] = useState(track.producedBy)
  const [lyrics, setLyrics] = useState(track.lyrics)
  const [trackArt, setTrackArt] = useState(track.trackArt)
  const [trackUrl, setTrackUrl] = useState(track.trackUrl)
  const [errors, setErrors] = useState([])


  // // const [id, setId] = useState("")
  // const [trackTitle, setTrackTitle] = useState("")
  // const [artist, setArtist] = useState("")
  // const [album, setAlbum] = useState("")
  // const [releaseDate, setReleaseDate] = useState("")
  // const [producedBy, setProducedBy] = useState("")
  // // const [lyrics, setLyrics] = useState("")
  // const [trackArt, setTrackArt] = useState("")
  // const [trackUrl, setTrackUrl] = useState("")
  // const [errors, setErrors] = useState([])

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




  // useEffect(() => {
    //   // setId(track.id)
    //   setTrackTitle(track.trackTitle)
    //   setArtist(track.artist)
    //   setAlbum(track.album)
    //   setReleaseDate(track.releaseDate)
    //   setProducedBy(track.producedBy)
    //   // setLyrics(track.lyrics)
    //   setTrackArt(track.trackArt)
    //   setTrackUrl(track.trackUrl)
    // }, [track])
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
              album,
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
        <div className="edit-track-form-wrapper">
          <div className="edit-track-form-child">

            <div className='edit-track-message'>
              Edit Track
            </div>

            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={trackTitle}
                required onChange={(e) => setTrackTitle(e.target.value)}
              />
              <label className='edit-track-input-label'>Track Title</label>
            </div>

            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={artist}
                required
                onChange={(e) => setArtist(e.target.value)}
              />
              <label className='edit-track-input-label'>Artist Name</label>
            </div>


            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={album}
                required
                onChange={(e) => setAlbum(e.target.value)}
              />
              <label className='edit-track-input-label'>Album Name</label>
            </div>


            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
              <label className='edit-track-input-label'>Realease Date</label>
            </div>
            {/*
                <select className=''
                    value={releaseDate}
                    placeholder={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}>
                    <option disabled={true} value="">--Choose a Date--</option>

                    <option key={album.id} value={album.id}>{album.title}</option>
                </select> */}

            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={producedBy}
                onChange={(e) => setProducedBy(e.target.value)}
              />
              <label className='edit-track-input-label'>Produced By</label>
            </div>

            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={trackArt}
                onChange={(e) => setTrackArt(e.target.value)}
              />
              <label className='edit-track-input-label'>Cover Image</label>

            </div>

            <div className='edit-track-input-box'>
              <input
                className="edit-track-input"
                type="text"
                value={trackUrl}
                onChange={(e) => setTrackUrl(e.target.value)}
              />
              <label className='edit-track-input-label'>Youtube Url</label>
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
          </div>

          <div>
            <button className='submit-cancel-edit-track-button' type="submit">Update Track</button>
            <button className='submit-cancel-edit-track-button' onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>


      </form>
    </div>
  )
}
