import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { deleteAnnotation, getUserAnnotations } from '../../store/session'
import { getUserInfo, deleteAnnotation, editAnnotation } from '../../store/session';
import React from 'react';
import './UserIndex.css'
import unreviewed from './Profile-Images/unreviewed.png';
import defaultPro from './Profile-Images/defaultpro.png'

import EditAnnotation from '../AnnotationEditForm/EditAnnotationForm';
import * as moment from 'moment';



const UserAnnotations = ({setUser}) => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  // console.log('USERID', userId)
  const annotations = useSelector(state => state.session.annotations)
  const sessionUser = useSelector(state => state.session.user)
  // console.log('sessionUserID', sessionUser.id)
  // console.log('USERINOFORMATION', annotations)
  const annotationArr = Object.values(annotations)
  // console.log('ANNOTATIONAAARR', annotationArr)

  const [isLoaded, setIsLoaded] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  useEffect(() => {
    dispatch(getUserInfo(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId])

  const userProp = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    setUser(user);
  }

  // document.getElementById("pp-annotation-edit")?.addEventListener("click", () => {
  //   document.getElementById("anno-edit-text-area").focus();
  // });


  if (!annotationArr) return null
  else return isLoaded &&
    annotationArr.map(annotation => (
      <div id='pp-annotations-outer-container' key={annotation.id}>
        <div id='pp-annotation-created-at'> {annotation.created_at?.split(' ').slice(0, -2).slice(1).join(' ')}</div>
        <div id='pp-annotation-inner-container'>
          <div id='pp-song-info'>
            <img id='pp-album-photo' onError={(e)=> e.target.src=defaultPro} src={annotation.track?.track_art} />
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
              <img className="unreviewed" src={unreviewed}></img>
              <div className="unreviewed-hover"> Ingenius is a crowdsourced website — this annotation has not yet been edited, reviewed, or fact checked by the Ingenius Editorial Board. </div>
            </div>
          </div>
          <div id='pp-annotation-inner-content'>
            <div id='pp-annotation-username-icon-moment-container'>
              <div id='pp-annotation-username-icon-container'>
                <img onError={(e)=> e.target.src=defaultPro} id='pp-annotation-username-icon' src={annotation.user?.profile_img ? annotation.user?.profile_img : defaultPro} />
                <div id='pp-annotation-username'>{annotation.user?.username}</div>
              </div>
              <div id='pp-annotation-created-at-moment'>{moment(annotation?.created_at).fromNow()}</div>
            </div>
            <div>{sessionUser?.id === annotation.user?.id ?
              <div >{showEdit === annotation.id ? <EditAnnotation setShowEdit={setShowEdit} annotate={annotation} /> :
                <div>
                  <div id='pp-annotation-body'>{annotation.annotation_body}</div>
                  <div id='pp-annotation-delete-edit'>
                    <button id='pp-annotation-edit' onClick={() => setShowEdit(annotation.id)}>Edit</button>
                    <button id='pp-annotation-delete' onClick={() => {dispatch(deleteAnnotation(annotation.id)).then(()=>userProp())}}>Delete</button>
                  </div>
                </div>
              }</div>:
               <div id='pp-noauth-annotation-body'>{annotation.annotation_body}</div>
            }</div>
            <div id='pp-annotation-upvote-container'>
              <div className='upvote-wrapper'>
                <i class="fa-regular fa-thumbs-up"></i>
                <div id='pp-annotation-upvote'>Upvote </div>
              </div>
              <div className='vote-count'> {annotation.vote_count}</div>
              <div className='downvote-wrapper'>
                <i class="fa-regular fa-thumbs-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))

}


export default UserAnnotations;
