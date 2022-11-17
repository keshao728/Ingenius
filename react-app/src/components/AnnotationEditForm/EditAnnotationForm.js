import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { editAnnotation } from '../../store/session';
// import { useHistory } from 'react-router-dom'

const EditAnnotation = (show) => {
  const dispatch = useDispatch()
  const annotations = useSelector(state => state.annotations)
  // console.log('ANNOTATIONS', annotations)
  const [annotation, setAnnotation] = useState(annotations.annotation_body)
  const [validationErrors, setValidationErrors] = useState([])
  const [showEdit, setShowEdit] = useState(show)
  const [showErrors, setShowErrors] = useState(false);

  const updateAnnotation = (e) => setAnnotation(e.target.value);

  useEffect(() => {
    const errors = []
    if (!annotation) errors.push('Need more info pls')

    setValidationErrors(errors)
  }, [annotation])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true)

    if (!validationErrors.length) {
      const payload = {
        ...annotation,
        annotation_body: annotation.annotation_body
      }

      let newAnnotation = await dispatch(editAnnotation(payload))

      if (newAnnotation) {
        setShowEdit(false)
      }
    }
  }
  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEdit(false)
    
    
  };

  return showEdit && (
    <form onSubmit={handleSubmit}>
      <textarea
        type='text'
        value={annotation}
        onChange={updateAnnotation} />
      <button type='submit'>Save</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
      <div>
        <ul>
          {showErrors && validationErrors.length > 0 && validationErrors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    </form>
  )
}

export default EditAnnotation