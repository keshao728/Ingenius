import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createAnnotation } from '../../store/annotations';
import { useParams } from 'react-router-dom';
import LoginForm from "../auth/LoginForm";
import "./AnnotationForm.css";


const AnnotationForm = ({startIndex, endIndex, setAnnotating}) => {
  const dispatch = useDispatch();
  const [annotation, setAnnotation] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [displayErrors, setDisplayErrors] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  // const [startingIndex, setStaringtIndex] = useState(startIndex)
  // const [endingIndex, setEndingIndex] = useState(endIndex)

  const sessionUser = useSelector((state) => state.session.user);
  // const trackId = useParams()
  const track = useSelector(state => state.tracks.oneTrack)
  // let startIndex = indexes[0]
  // let endIndex = indexes[1]
  console.log('adfasdfads', startIndex)
  console.log('adfasdfads', endIndex)


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeSubmit = (e) => {
    e.preventDefault();
    setShowMenu(false);
    // setAnnotating(false)
  };

  useEffect(() => {
    const errors = []
    if (!annotation) errors.push('Need more info pls')

    setValidationErrors(errors)
  }, [annotation])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayErrors(true)

    if (!validationErrors.length) {
      const payload = {
        annotation_body: annotation,
        startIndex: startIndex,
        endIndex: endIndex
      }
      setAnnotation("");

      let newAnnotation = await dispatch(createAnnotation(track.id, payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors)
      })

      if (newAnnotation) {
        setDisplayErrors(false)
        // setAnnotating(false)
        // setShowMenu(false)
      }
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='annotation-wrapper'>
        <button className="annotation-button" onClick={openMenu}> MEOW </button>
        {showMenu &&
          <form className="annotation-form-parent" onSubmit={handleSubmit}>
            {/* <div className='annotate-text'>Annotate</div> */}
            <div className="annotation-form">
              <label>
                <textarea
                  placeholder="Don't just put the lyric in your own words - drop some knowledge!"
                  type="text"
                  error
                  className="annotation-input"
                  value={annotation}
                  // onClick={openSubmit}
                  required
                  onChange={(e) => setAnnotation(e.target.value)}
                />

                <input hidden type='number' value={startIndex}></input>
                <input hidden type='number' value={endIndex}></input>

                {/* {showErrors && showSubmit && (
              <ul className="annotation-form-errors">
              {validationErrors.length > 0 &&
                validationErrors.map(error => (
                  <li className="annotation-form-error-text" key={error}>{error}</li>
                  ))}
                  </ul>
                  )
                } */}
              </label>
              <div className="annotation-submit-buttons">
                <button className="button-create-annotation" type="submit" onSubmit={handleSubmit}> Save </button>
                <button type="button" className="cancel-create-annotation" onClick={closeSubmit}>Cancel</button>
              </div>
            </div>
          </form>
        }
      </div>
    )
  } else {
    sessionLinks = (
      <div>
        <div>
          Sign In to Annotate!
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    )

  }

  return (
    <div className='test'>
      {sessionLinks}
    </div>
  )
}
export default AnnotationForm
