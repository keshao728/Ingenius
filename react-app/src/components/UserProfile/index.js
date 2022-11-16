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
          <div id='pp-song-info'>
            <img id='pp-album-photo' src={annotation.track.track_art} test />
            <div id='pp-title-artist'>
              <div id='pp-annotation-song-title'> {annotation.track.track_title}</div>
              <div id='pp-annotation-song-artist'>{annotation.track.artist}</div>
            </div>
          </div>
          <div id='pp-annotation-lyric-container'>
            <div id='pp-annotation-lyric'>
              lyrics
            </div>
            <div>

            </div>
          </div>
          <div id='pp-annotation-inner-content'>
            <div id='pp-annotation-username-icon-container'>
            <img id='pp-annotation-username-icon' src={'https://64.media.tumblr.com/eca7c1a0c4df7688d52cf781e53142d1/3e3c47d5fa9f904a-71/s540x810/1ee4b3b16a25a49c4f61326f895cbf341088041e.jpg'}/>
            <div id='pp-annotation-username'>{annotation.user.username}</div>
            </div>
            <div id='pp-annotation-annotation-body'>{annotation.annotation_body}</div>
            <div id='pp-annotation-delete-edit'>
              <button id='pp-annotation-edit'onClick={() => dispatch(editAnnotation(annotation.id))}>Edit</button>
              <button id='pp-annotation-delete' onClick={() => dispatch(deleteAnnotation(annotation.id))}>Delete</button>
            </div>
            <div id='pp-annotation-upvote'>Upvote {annotation.vote_count}</div>
          </div>
        </div>
      </div>

    ))

}


export default UserAnnotations;