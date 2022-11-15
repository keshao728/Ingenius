import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { editAnnotation } from '../../store/annotations';
// import { useHistory } from 'react-router-dom'

const EditAnnotation = (annotation) => {
  const dispatch = useDispatch()
  // annotation = useSelector(state => state.annotation)
  const [annotation, setAnnotation] = useState(annotation.annotation_body)
  const [validationErrors, setValidationErrors] = useState([])
  const [displayErrors, setDisplayErrors] = useState(false);

  const updateAnnotation = (e) => setAnnotation(e.target.value);

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
        ...annotation,
        annotation_body: annotation.annotation_body
      }

      let newAnnotation = await dispatch(editAnnotation(payload))

      if (newAnnotation) {
        setDisplayErrors(false)
      }
    }
  }
  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   setShowModal(false)
  // };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type='text'
        value={annotation}
        onChange={updateAnnotation} />
      <button type='submit'>Save</button>
      {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}

      <div>
        <ul>
          {displayErrors && validationErrors.length > 0 && validationErrors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    </form>
  )
}

export default EditAnnotation