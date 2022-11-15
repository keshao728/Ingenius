import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserAnnotations } from '../../store/annotations';
import React from 'react';


const UserAnnotations = () => {
  const annotations = useSelector(state => state.annotations.getUserAnnotations)

  const dispatch = useDispatch()
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUserAnnotations(userId))
  }, [dispatch])

  if (!annotations) {
    return null
  } else {
    return (
      <div>
        {Object.values(annotations).map(annotation => {
          <div>{annotation.id}</div>
        })}

      </div>
    )
  }
}

export default UserAnnotations;