import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { deleteAnnotation, getUserAnnotations } from '../../store/session'
import { getUserInfo, deleteAnnotation } from '../../store/session';
import React from 'react';
import './UserIndex.css'
import EditAnnotation from '../AnnotationEditForm/EditAnnotationForm';


const UserAnnotations = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const annotations = useSelector(state => state.session.annotations)

  console.log('USERINOFORMATION', annotations)
  const annotationArr = Object.values(annotations)
  console.log('ANNOTATIONAAARR', annotationArr)

  const [isLoaded, setIsLoaded] = useState(false)
  const [showEdit, setShowEdit] = useState(false)


  useEffect(() => {
    dispatch(getUserInfo(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  // useEffect(() => {
  //   if (!showEdit) return
  //   const closeEdit = () => {
  //     setShowEdit(false)
  //   }
  //   document.addEventListener('click', closeEdit);

  //   return () => document.removeEventListener("click", closeEdit)

  // }, [showEdit])

  // handleDelete = (e) => {
  //   const id = 
  // }
  // const handleEditClick = async (e) => {
  //   e.preventDefault()
  //   setShowEdit(true)
  // }


  if (!annotationArr) return null
  else return isLoaded && annotationArr && (
    annotationArr.map(annotation => (
      <div id='pp-annotations-outer-container' key={annotation.id}>
        <div id='pp-annotation-created-at'> {annotation?.created_at}</div>
        <div id='pp-annotation-inner-container'>
          <div id='pp-song-info'>
            <img id='pp-album-photo' src={annotation.track?.track_art} test />
            <div id='pp-title-artist'>
              <div id='pp-annotation-song-title'> {annotation.track?.track_title}</div>
              <div id='pp-annotation-song-artist'>{annotation.track?.artist}</div>
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
              <img id='pp-annotation-username-icon' src={annotation.user?.profile_img} />
              <div id='pp-annotation-username'>{annotation.user?.username}</div>
            </div>

            <div >{showEdit == annotation.id ? <EditAnnotation setShowEdit={setShowEdit} annotate={annotation} /> :
              <div>
                <div id='pp-annotation-annotation-body'>{annotation.annotation_body}</div>
                <button id='pp-annotation-edit' onClick={() => setShowEdit(annotation.id)}>Edit</button>
                <button id='pp-annotation-delete' onClick={() => dispatch(deleteAnnotation(annotation.id))}>Delete</button>
              </div>}
            </div>
            <div id='pp-annotation-upvote'>Upvote {annotation.vote_count}</div>
          </div>
        </div>
      </div>
    ))
  )
}


export default UserAnnotations;