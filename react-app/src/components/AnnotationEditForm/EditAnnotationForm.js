import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { editAnnotation, getUserInfo  } from '../../store/session';
// import { useHistory } from 'react-router-dom'

const EditAnnotation = ({setShowEdit, annotate}) => {
  const dispatch = useDispatch()
  // const annotations = useSelector(state => state.session.annotations)
  // console.log('ANNOTATIONS', annotations)
  console.log('helloworld', annotate)
  const [annotation, setAnnotation] = useState(annotate.annotation_body)
  const [validationErrors, setValidationErrors] = useState([])
  // const [showEdit, setShowEdit] = useState(show)
  const [showErrors, setShowErrors] = useState(false);

  const updateAnnotation = (e) => setAnnotation(e.target.value);

  useEffect(() => {
    const errors = []
    if (!annotation) errors.push('Need more info pls')

    setValidationErrors(errors)
  }, [annotation])


  useEffect(() => {
    dispatch(getUserInfo(annotate.user_id))
  }, [dispatch, annotate.user_id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true)

    if (!validationErrors.length) {
      const payload = {
        id: annotate.id,
        user_id: annotate.user_id,
        track_id: annotate.track_id,
        annotation_body: annotation,
        startIndex: annotate.startIndex,
        endIndex: annotate.endIndex,
        
      }

      let newAnnotation = await dispatch(editAnnotation(payload))
      console.log('PAYLOAD', payload)

      if (newAnnotation) {
        setShowEdit(false)
      }
    }
  }
  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEdit(false)
    
    
  };

  return (
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