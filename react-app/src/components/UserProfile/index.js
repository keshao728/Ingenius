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

  const annotationArr = Object.values(annotations)
  console.log('annotationArr', annotationArr)
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
  console.log('annoIDX', annoIdx) // ['15,16,17,18,19', '22,23,24,25,26,27', '22'] arr
  // console.log('annoTrackId', annoTrackId) // trackId = [1, 1, 2]
  console.log('annoTrack', annoTrack) // [{…}, {…}, {…}]
  const lyrics = annoTrack.map(track => track.lyrics)
  // console.log('LYRICS', lyrics[0]) // ["\n        [Verse 1]\n        Stressed out\n        Fe…for the taking\n ]

  // const for (let )

  // const arr = []

  // const lineByline = lyrics.map(line => line.split(`\n`)).flat()
  // console.log('lineByline', lineByline) // [[],[],[]]

  // const annotatedIndexes = annoIdx.map(oneTrackIdx => oneTrackIdx.split(',')).flat()
  // console.log('annotatedIndexes', annotatedIndexes)

  // for (let index of annotatedIndexes) {
  //   console.log('num', index)
  //   for (let lyricIndex in lineByline) {
  //     if (tree === index)
  //     arr.push(lineByline[lyricIndex])
  //     console.log(tree)
  //   }
    
  // }
  // console.log('PLEASEEGOD',arr)



  const lyricsOnPage = (lyrics) => {
    console.log('LYRIC!!!', typeof(lyrics))
    const arr = []
      const lyrics = [lyrics]
      const lineByline = lyrics?.map(line => line.split(`\n`)).flat()
      const annotatedIndexes = annoIdx?.map(oneTrackIdx => oneTrackIdx.split(',')).flat()
      for (let index of annotatedIndexes) {
        for (let lyricIndex in lineByline) {
          if (lyricIndex === index)
          arr.push(lineByline[lyricIndex])
        }
      }
    // console.log(arr)
    return arr
  }

  // console.log('arr', arr)
  // const flat = lineByline.flat();
  // console.log('flat', flat)
  // for (let l of lineByline) {
  //   for (let i = 0; i<l.length - 1; i++)
  // }
  // console.log ('PIUUUUUUUU ', annotationArr.map(anno => anno.track.lyrics.split('\n').map((section, idx) => anno.span_ids.split(',').filter(spanId => Number(spanId) === idx))))

  // for (let i of num) {
  //   i = +i
  //   console.log('i', i)

  //   arr.push(lineByline[i])
  // }

  // for (let i = 0; i < annotatedIndexes.length - 1; i++) {
  //   for (let j = 0; j < i.length - 1; j++)
  //   annotatedIndexes[[i][j]] = Number(annotatedIndexes[[i][j]])

  // }
  // console.log('simon-annoIDX', annotatedIndexes)

  // annotatedIndexes.forEach(setOfNums => {
  //   for (let nums of setOfNums) {
  //     nums = +nums
  //   }
  // });

  // const apple = annotatedIndexes.map(ele => ele)
  // console.log('HOW BOUT NOW', apple) //[Array(5), Array(6), Array(1), Array(2)]
  // console.log('1' == 1)

  // const oneSong = lineByline[0]
  // for (let i in oneSong) {
  //   const oneLine = oneSong[i]
  //   const oneLineIdx = i
  //   console.log(i, oneSong[i])

  // }

  // annoIdx.forEach(ele => {
  //   const individualSongSpans = ele.split(',')
  //   console.log('individualSongSpans', individualSongSpans)
  //   individualSongSpans.forEach(ele => {
  //     console.log('ele', ele)
  //   });

  // })

  // annoIdx.forEach(ele => {
  //   let arr = []
  //   const individualSongSpans = ele.split(',')
  //   console.log('individualSongSpans', individualSongSpans)
  //   individualSongSpans.forEach(oneSpan => {
  //     console.log('oneSpan', oneSpan)
  //     for (let i of lineByline) {
  //       console.log('lineByline', i, lineByline[i])
  //       console.log(Number(oneSpan) == lineByline[i])

  //     }
  //     // console.log('oneSpan', Number(oneSpan) == 15)
  //   });
  //   console.log('ARRRRR', arr)
  //   return arr
  // });

  // const [arr1, arr2, arr3] = annotatedIndexes
  // console.log('whatwhat', arr1)
  // console.log('arr2', arr2)
  // console.log('arr3', arr3)
  // console.log('lookatme',[arr1, arr2, arr3])

  // lineByline.forEach(line => {
  //   consttest = line.filter(ele => annoIdx.includes(ele))
  //   console.log('test', test)
  // });


  // const test = lineByline.filter(ele => annoIdx.includes(ele))
  // console.log( 'TEST', test)

  // const arr = lineByline
  // annoIdx.forEach(span => {
  //   let arr = []
  //   console.log('SPAN', [span])
  //   // const annoIdx = span.split(',')
  //   console.log('annoIdxAnno', annoIdx)
  //   console.log((lineByline[0].includes(annoIdx)))

  // lineByline.forEach(line => {
  //   const test = line.filter(ele => arrOfStrings.includes(ele))
  //   console.log('CMONBABYYY', test)
  // });

  // console.log(arr)
  // return arr
  // });

  // each line in lyrics has an index
  // span in a





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
    annotationArr.map(annotation => (

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
              {lyricsOnPage(annotation.track.lyrics)}
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
