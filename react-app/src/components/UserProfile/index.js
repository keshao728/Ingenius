import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserAnnotations } from '../../store/annotations'
import React from 'react';


const UserAnnotations = () => {
  const getAnnotations = useSelector(state => state.annotations.allAnnotations)

  console.log('GETANNOTATIONS', getAnnotations)
  const dispatch = useDispatch()
  const { userId } = useParams()

  const [isLoaded, setIsLoaded ] = useState(false)

  const annotations = Object.values(getAnnotations)

  useEffect(() => {
    dispatch(getUserAnnotations(userId))
    .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  if (!annotations) {
    return null
  } else {
    return isLoaded (
      <div>
        {Object.values(annotations).map(annotation => {
          <div>{annotation.id}</div>
        })}

      </div>
    )
  }
}

export default UserAnnotations;