import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'

// const EditAnnotation = (annotation) => {
//   const dispatch = useDispatch()
//   // annotation = useSelector(state => state.annotation)


//   const [annotation, setAnnotation] = useState()
//   const [validationErrors, setValidationErrors] = useState([])
//   const [displayErrors, setDisplayErrors] = useState(false);

//   const updateAnnotation = (e) => setAnnotation(e.target.value);

//   useEffect(() => {
//     const errors = []
//     if (!annotation) errors.push('Need more info pls')

//     setValidationErrors(errors)
//   }, [annotation])

//   const handleSubmit = async (e) =>

// }