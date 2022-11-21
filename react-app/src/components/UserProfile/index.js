import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { deleteAnnotation, getUserAnnotations } from '../../store/session'
import { getUserInfo, deleteAnnotation } from '../../store/session';
import React from 'react';
import './UserIndex.css'
import unreviewed from './Profile-Images/unreviewed.png';
import defaultPro from './Profile-Images/defaultpro.png'

import EditAnnotation from '../AnnotationEditForm/EditAnnotationForm';
import * as moment from 'moment';
// import Vote from '../Annotation/vote';
import { upvoteThunk, downvoteThunk, votecount } from '../../store/votes';



const UserAnnotations = ({ setUser }) => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  // console.log('USERID', userId)
  const annotations = useSelector(state => state.session.annotations)
  const sessionUser = useSelector(state => state.session.user)
  // const tracks = useSelector(state => state.session.tracks)
  const track = useSelector(state => state.tracks.oneTrack)
  // { console.log("DAUJKFAEJFNLAWNDJANWKDJNAKWJDNKJAWNKWAJNKWJANKJANWDKJn", track.lyrics?.split('\n')) }
  const annotationArr = Object.values(annotations)
  // const shibashakeit = annotationArr.map((annotation) => annotation.span_ids)


  // const annotationIds = annotations?.span_ids.includes(",") ? annotations?.span_ids.split(",") : Array.from(annotations?.span_ids)
  // console.log('ANNOTATIONAAARR', annotationArr)
  // const tracksArr = Object.values(tracks)
  // console.log('TRACKARR', tracksArr)
  // const annoArrTracks =


  const sum = (a) => {
    let sums = 0
    for (let i = 0; i < a?.length; i++) {
      sums += a[i].vote
    }
    return sums
  }
  // console.log('this is my sum', sum())
  const [isLoaded, setIsLoaded] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    dispatch(getUserInfo(userId))
      .then(() => setIsLoaded(true))
  }, [dispatch, userId, refresh])

  const userProp = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    setUser(user);
  }

  const annoIdx = annotationArr.map(anno => anno.span_ids)
  const annoTrackId = annotationArr.map(anno => anno.track_id)
  const annoTrack = annotationArr.map(anno => anno.track)
  // console.log('annoIDX', annoIdx) // ['15,16,17,18,19', '22,23,24,25,26,27', '22'] arr
  // console.log('ANNOTRACKID', annoTrackId)
  // console.log('annoTrack', annoTrack)
  const lyrics = annoTrack.map(track => track.lyrics)
  // console.log('LYRICS', lyrics) // ["\n        [Verse 1]\n        Stressed out\n        Fe…for the taking\n ]
  const lineByline = lyrics.map(line => line.split(`\n`))
  // console.log('lineByline', lineByline) // [[],[],[]]




  // });




  // document.getElementById("pp-annotation-edit")?.addEventListener("click", () => {
  //   document.getElementById("anno-edit-text-area").focus();
  // });
  // const votecounter = useSelector((state) => state.upvote.votes.votetotalvalue)
  // // console.log('>>>>this is votecount<<<<',votecounter)

  // const upvote = async (num,e) => {
  //   e.preventDefault();
  // e.target.style.color = 'black';
  // const upvote = (num) => {
  //   dispatch(upvoteThunk(num)).then(dispatch(votecount(num)))
  // }


  // // const downvote = async (num,e) => {
  // //   e.preventDefault();
  // const downvote = (num) => {
  //   // e.target.style.color = 'black';
  //   dispatch(downvoteThunk(num)).then(dispatch(votecount(num)))
  // }



  // useEffect(() => {
  //   async function fetchData() {
  //     await dispatch(votecount(num))
  //   }
  //   return fetchData()
  // }, [num, votecounter, dispatch])


  if (!annotationArr) return null
  else return isLoaded &&
    annotationArr.map((annotation, i) => (
      // console.log('annotation', annotation),
      <div id='pp-annotations-outer-container' key={annotation.id}>
        <div id='pp-annotation-created-at'> {annotation.created_at?.split(' ').slice(0, -2).slice(1).join(' ')}</div>
        <div id='pp-annotation-inner-container'>
          <div id='pp-song-info'>
            <img
              id='pp-album-photo'
              onError={(e) => e.target.src = defaultPro}
              src={annotation.track?.track_art}
              alt='album art'
            />
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
              {annotationArr.map((annotation, i) => {
                console.log('annotation', annotation)

                //this is each individual spanIds
                const spanArr = annotation.span_ids.includes(",") ? annotation.span_ids.split(",").map(Number) : [Number(annotation.span_ids)]
                console.log('spanArr', spanArr)

                // if (spanArr[i] === Number(annotation.span_ids.span_ids[i])) {
                //splits every lyric individually
                let annotationSomething = []

                for (let i = 0; i < spanArr.length; i++) {
                  annotationSomething.push(annotation.track.lyrics.split('\n')[spanArr[i]])

                  console.log('annotationSofgffffffffffffmething', annotationSomething)
                }
                return (
                  // <div>
                  //   {annotationSomething}
                  // </div>
                  <div key={i}>
                    {
                      annotationSomething.map((line, i) => {
                        console.log("THINGS GETTING PUSH", annotationSomething[annotationSomething.length-1])

                        return line
                      })}
                  </div>
                )
                // }
              })}
            </div>
            <div>
              <img
                className="unreviewed"
                src={unreviewed}
                alt="unreviewed"
              >
              </img>
              <div className="unreviewed-hover"> Ingenius is a crowdsourced website — this annotation has not yet been edited, reviewed, or fact checked by the Ingenius Editorial Board. </div>
            </div>
          </div>
          <div id='pp-annotation-inner-content'>
            <div id='pp-annotation-username-icon-moment-container'>
              <div id='pp-annotation-username-icon-container'>
                <img
                  alt="user profile"
                  onError={(e) => e.target.src = defaultPro}
                  id='pp-annotation-username-icon'
                  src={annotation.user?.profile_img ? annotation.user?.profile_img : defaultPro} />
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
                    <button id='pp-annotation-delete' onClick={() => { dispatch(deleteAnnotation(annotation.id)).then(() => userProp()) }}>Delete</button>
                  </div>
                </div>
              }</div> :
              <div id='pp-noauth-annotation-body'>{annotation.annotation_body}</div>
            }</div>
            <div id='pp-annotation-upvote-container'>
              <div className='upvote-wrapper' onClick={async () => { await dispatch(upvoteThunk(annotation.id)).then(() => dispatch(votecount(annotation.id))).then(() => setRefresh(!refresh)) }}>

                {/* <div className='vote' id='btn' type='button' > */}
                <i class="fa-regular fa-thumbs-up"></i>
                <div id='pp-annotation-upvote'>Upvote </div>
              </div>
              <div className='vote-count'> {sum(annotation.votes)}</div>
              <div className='downvote-wrapper' onClick={async () => { await dispatch(downvoteThunk(annotation.id)).then(() => dispatch(votecount(annotation.id))).then(() => setRefresh(!refresh)) }}>
                <i class="fa-regular fa-thumbs-down"></i>
              </div>
              {/* <Vote num={annotation.id} /> */}
            </div>
          </div>
        </div>
      </div>
    ))

}


export default UserAnnotations;
