import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserAnnotations } from '../../store/annotations'
import React from 'react';


const UserAnnotations = () => {
  const getAnnotations = useSelector(state => state.annotations.allAnnotations)

  console.log('ALLANOTATIONS', getAnnotations)
  const { userId } = useParams()
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)

  const annotations = Object.values(getAnnotations)
  console.log('ANNOTATIONS', annotations)

  useEffect(() => {
    dispatch(getUserAnnotations(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  if (!annotations) {
    return null
  } else {
    return isLoaded &&
      annotations.map(annotation => (
        <div id='pp-annotations-outer-container'> testing {annotation.id} {annotation.annotation_body}
          <div id='pp-annotation-created-at'>
          </div>
          <div id='pp-annotation-inner-container'>
            <div id='pp-annotation-song'>
              

            </div>
            <div id='pp-annotation-lyric'>

            </div>
            <div id='pp-annotation-inner-content'>

            </div>
          </div>
        </div>

      ))

  }
}

export default UserAnnotations;