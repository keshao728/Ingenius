import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { createAnnotation } from '../../store/annotations';


const AnnotationForm = () => {
  const dispatch = useDispatch();

  const [annotation, setAnnotation] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [displayErrors, setDisplayErrors] = useState(false)

  const updateAnnotation = (e) => setAnnotation(e.target.value)

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
        'annotation_body': annotation
      }

      let newAnnotation = await dispatch(createAnnotation(payload))

      if (newAnnotation) {
        setDisplayErrors(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
      type='text'
      value={annotation}
      onChange={updateAnnotation}/>
      <button type='submit'>CreateAnnotation</button>
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