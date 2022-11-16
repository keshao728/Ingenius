import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { deleteAnnotation, getUserAnnotations } from '../../store/session'
import { getUserInfo, editAnnotation, deleteAnnotation } from '../../store/session';
import React from 'react';
import './UserIndex.css'


const UserAnnotations = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const annotations = useSelector(state => state.session.annotations)
  // const currentUser = useSelector(state => state.session)
  console.log('USERINOFORMATION', annotations)
  const annotationArr = Object.values(annotations)
  console.log('ANNOTATIONAAARR', annotationArr)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(getUserInfo(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  // handleDelete = (e) => {
  //   const id = 
  // }

  if (!annotationArr) return null
  else return isLoaded &&
    annotationArr.map(annotation => (
      <div id='pp-annotations-outer-container' key={annotation.id}>
        <div id='pp-annotation-created-at'> {annotation.created_at}</div>
        <div id='pp-annotation-inner-container'>
          <div id='pp-annotation-song'>
            <div id='pp-annotation-song-title'> {annotation.track.track_title}</div>
            <div id='pp-annotation-song-artist'>{annotation.track.artist}</div>
          </div>
          <div id='pp-annotation-lyric'>
            lyrics
          </div>
          <div id='pp-annotation-inner-content'>
            <div>{annotation.user.username}</div>
            <div>{annotation.annotation_body}</div>
            <div id='pp-annotation-delete-edit'>
              <div><button onClick={() => dispatch(deleteAnnotation(annotation.id))}>DELETE</button></div>
              <div><button onClick={() => dispatch(editAnnotation(annotation.id))}>EDIT</button></div>
            </div>
            <div id='pp-annotation-upvote'>Upvote {annotation.vote_count}</div>
          </div>
        </div>
      </div>

    ))

}


export default UserAnnotations;