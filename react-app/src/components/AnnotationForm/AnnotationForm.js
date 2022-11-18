import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createAnnotation } from '../../store/annotations';
import LoginForm from "../auth/LoginForm";



const AnnotationForm = (startIndex, endIndex) => {
  const dispatch = useDispatch();
  const [annotation, setAnnotation] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [displayErrors, setDisplayErrors] = useState(false)
  const [showMenu, setShowMenu] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);



  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


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
        startIndex,
        endIndex
      }
      setAnnotation("");

      let newAnnotation = await dispatch(createAnnotation(payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors)
      })

      if (newAnnotation) {
        setDisplayErrors(false)
        // setShowMenu(false)
      }
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <button onClick={openMenu}> MEOW </button>
        {showMenu &&
          <form className="comment-form-parent" onSubmit={handleSubmit}>
            <div className="comment-form">
              <label>
                <div className="commenter-img-input">
                  <textarea
                    placeholder="Add a annotation"
                    type="text"
                    error
                    className="comment-input"
                    value={annotation}
                    // onClick={openSubmit}
                    required
                    onChange={(e) => setAnnotation(e.target.value)}
                  />
                </div>
                {/* {showErrors && showSubmit && (
              <ul className="comment-form-errors">
              {validationErrors.length > 0 &&
                validationErrors.map(error => (
                  <li className="comment-form-error-text" key={error}>{error}</li>
                  ))}
                  </ul>
                  )
                } */}
              </label>
              <div className="comment-submit-buttons">
                <button className="button-create-comment" type="submit" onSubmit={handleSubmit}> Submit</button>
                {/* <button type="button" className="cancel-create-comment" onClick={closeSubmit}>Cancel</button> */}
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
    <div>
      {sessionLinks}
    </div>
  )
}
export default AnnotationForm

