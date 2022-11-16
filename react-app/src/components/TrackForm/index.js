import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTrack } from '../../store/tracks';
import { useHistory } from 'react-router-dom';
import "./TrackForm.css"

export default function CreateTrack() {
  const dispatch = useDispatch()
  const history = useHistory()


  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultDate = date.toLocaleDateString('en-CA');

  const [trackTitle, setTrackTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('')
  const [releaseDate, setReleaseDate] = useState(defaultDate)
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
    <div className='full-screen-add-song'>
      <form id="trackForm" onSubmit={handleSubmit}>
        <div className='add-song-wrapper'>
          <div className='add-song-child'>
            <div className='add-song-message'>Add Song</div>
            <div className='add-song-primary-text-req'>
              <div className='add-song-primary-text'>Primary info</div>
              <div className='add-song-primary-req'>* required</div>
            </div>
            <div className='add-song-primary'>
              <div className='add-by-title-album'>


                <div className='add-song-input-box'>
                  <label>BY *</label>
                  <input
                    className='add-song-input'
                    type="text"
                    value={artist}
                    placeholder="The primary artist, author, creator, etc."
                    onChange={(e) => setArtist(e.target.value)} />
                </div>

                <div className='add-song-input-box'>
                  <label>TITLE *</label>
                  <input
                    type="text"
                    className='add-song-input'
                    value={trackTitle}
                    placeholder="Track Title"
                    required
                    onChange={(e) => setTrackTitle(e.target.value)} />
                </div>


                <div className='add-song-input-box'>
                  <label>ALBUM *</label>
                  <input
                    className='add-song-input'
                    type="text"
                    value={album}
                    placeholder="Album"
                    onChange={(e) => setAlbum(e.target.value)} />
                </div>
              </div>
              <div className='add-song-lyric-info'>
                <div className='add-song-input-box' id='add-song-lyric'>
                  <label>LYRICS *</label>
                  <textarea
                    type="text"
                    className='add-song-input-box'
                    id="lyric-input"
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                  >
                  </textarea>
                </div>

                <div className='add-song-info'>
                  <div className='add-song-first-time'>
                    First time transcribing?
                  </div>

                  <div className='add-song-first-time-des'>
                    Here are a few helpful tips for getting started:
                  </div>

                  <ol>

                    <li>
                      Type out all lyrics, even when a section of the song is repeated. Everything in the song should be transcribed, including adlibs, producer tags, etc. If you don’t understand a lyric, use “[?]” instead.
                    </li>

                    <li>
                      Make sure to break transcriptions up into individual lines and use section headers above different song parts.
                    </li>

                    <li>
                      Only add a song to Genius if it has been officially released. Fan-made mashups, songs that leak pre-release, and songs that violate our community policy are not allowed on Genius.
                    </li>

                  </ol>

                </div>
              </div>
            </div>

            <div className='add-song-primary-text'>Additional Metadata</div>
            <div className='add-song-additional'>
              <div className='add-song-others'>


                <div className='add-song-others-left'>
                  <div className='add-song-input-box'>
                    <label>PRODUCER</label>
                    <input
                      type="text"
                      value={producedBy}
                      className='add-song-input'
                      placeholder="Producer"
                      onChange={(e) => setProducedBy(e.target.value)} />
                  </div>



                  <div className='add-song-input-box'>
                    <label>ALBUM COVER</label>
                    <input
                      type="text"
                      className='add-song-input'
                      value={trackArt}
                      placeholder="Track Art"
                      onChange={(e) => setTrackArt(e.target.value)} />
                  </div>
                </div>

                <div className='add-song-others-right'>
                  <div className='add-song-input-box'>
                    <label>RELEASED DATE</label>
                    <input
                      type="date"
                      className='add-song-input'
                      value={releaseDate}
                      placeholder="Release Date"
                      onChange={(e) => setReleaseDate(e.target.value)} />
                  </div>

                  <div className='add-song-input-box'>
                    <label>YOUTUBE URL  (embeded link only)</label>
                    <input
                      type="text"
                      value={trackUrl}
                      className='add-song-input'
                      placeholder="Track Url"
                      onChange={(e) => setTrackUrl(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="submit">Create Track</button>
          </div>
        </div>
      </form>
    </div>
  )

}
