import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createAnnotation, actionResetAnnotation } from '../../store/annotations';
import { actionResetTrack, getOneTrack } from '../../store/tracks';
import { useParams } from 'react-router-dom';
import LoginForm from "../auth/LoginForm";
import "./AnnotationForm.css";


const AnnotationForm = ({ setDocu, docu, setAnnotated, spanIds, setShowAnnotation }) => {
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
  // console.log('adfasdfads', startIndex)
  // console.log('adfasdfads', endIndex)
  // console.log(setAnnotating)
  // console.log('oooooooooo', spanIds)


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeSubmit = (e) => {
    e.preventDefault();
    setShowMenu(false);
    setAnnotated(false)

    if (docu.length) {
      for (let doc of docu)
        doc.className = ''
    }

    // setAnnotating(false)
  };

  function isEmpty(str) {
    if (!str.trim().length)
      return { border: "1px solid red" }
  }

  useEffect(() => {
    const errors = []
    if (!annotation || annotation === "" || isEmpty(annotation)) errors.push('Comment is Required')
    if (annotation.length > 200) errors.push("Please enter less than 200 characters")


    setValidationErrors(errors)
  }, [annotation])

  // useEffect(() => {
  //   return () => {
  //     dispatch(actionResetAnnotation())
  //   }
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayErrors(true)
    setAnnotated(false)

    if (!validationErrors.length) {
      setDisplayErrors(false)
      const payload = {
        annotation_body: annotation,
        span_ids: spanIds
      }
      setAnnotation("");

      let newAnnotation = await dispatch(createAnnotation(track.id, payload))

      if (newAnnotation) {
        setDisplayErrors(false)
        setAnnotated(false)
        // setAnnotating(false)
        setShowMenu(false)
      }
    }
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='annotation-wrapper'>
        <button className="annotation-button" onClick={openMenu}> Start the Ingenius Annotation </button>
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
                  {displayErrors && (
                    <ul className="annotation-form-errors">
                      {validationErrors.length > 0 &&
                        validationErrors.map(error => (
                          <li className="annotation-form-error-text" key={error}>{error}</li>
                        ))}
                    </ul>
                  )}

                {/* <input hidden type='number' value={startIndex}></input>
                <input hidden type='number' value={endIndex}></input> */}
                <input
                  hidden
                  type='text'
                  value={spanIds}>
                </input>

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
      <div className="anno-sign-in">
        <div className="login-anno">
          <LoginForm />
        </div>
        <div>
          to Annotate!
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
