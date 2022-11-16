import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { deleteAnnotation, getUserAnnotations } from '../../store/annotations'
import { getUserInfo } from '../../store/session';
import React from 'react';
import './UserIndex.css'


const UserAnnotations = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const userInformation = useSelector(state => state.session.tracks)
  console.log('USERINOFORMATION', userInformation)
  const infos = Object.values(userInformation)
  console.log('ANNOTATIONS', infos)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(getUserInfo(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  // handleDelete = (e) => {
  //   const id = 
  // }

  if (!infos) return null
  else return isLoaded &&
    infos.map(annotation => (
      <div id='pp-annotations-outer-container' key={annotation.id}> 
        <div id='pp-annotation-created-at'> {annotation.created_at}</div>
        <div id='pp-annotation-inner-container'>
          <div id='pp-annotation-song'>
            <div id='pp-annotation-song-title'></div>
            <div id='pp-annotation-song-artist'></div>
          </div>
          <div id='pp-annotation-lyric'>
          testing {annotation.id} {annotation.annotation_body}
          </div>
          <div id='pp-annotation-inner-content'>
            <div>{}</div>




            
            <div><button onClick={() => dispatch(deleteAnnotation(annotation.id))}>DELETE</button></div>
          </div>
        </div>
      </div>

    ))

}


export default UserAnnotations;