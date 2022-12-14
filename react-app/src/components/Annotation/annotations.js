import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
// import { upvoteThunk, downvoteThunk, unvoteThunk, votecount } from '../../store/votes';
import { getOneTrack } from '../../store/tracks';
import './vote.css'
import './annotations.css'
import AnnotationForm from '../AnnotationForm/AnnotationForm';
// import EditAnnotation from '../AnnotationEditForm/EditAnnotationForm';
import Vote from './vote'
// import { useEffect } from 'react';


export default function Annotations({ setShowAnnotation, showAnnotation, annotationId }) {
  // console.log(showAnnotation)
  // console.log('ANNOTATION ID', annotationId)
  const realId = annotationId
  // console.log('REAL ID', realId)
  const dispatch = useDispatch();
  const { trackId } = useParams();
  // const [showAnnotation, setShowAnnotation] = useState(showAnnotation);
  // const annoMenu = useRef(null)
  // const [isLoaded, setIsLoaded] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);

  // const momo =() => {
  //   console.log('momo')
  // }

  const annotations = useSelector((state) => state.tracks.oneTrack.Annotations);
  // console.log(annotations , "mic  check 1")
  // const [showAnnotation, setShowAnnotation] = useState(false)

  // useEffect(() => {
  //   if (annotations) {
  //     for (let annotation of annotations) {
  //       // console.log(annotation.span_ids.split(','))
  //       annotation.span_ids.split(',').map(anno =>
  //         document.getElementById(anno).classList.add('annotated')
  //       )
  //       annotation.span_ids.split(',').map(anno =>
  //         document.getElementById(anno).addEventListener('click', () => setShowAnnotation(!showAnnotation))
  //       )


  //       // console.log(splitted)
  //     }
  //   }


  // }, [annotations, dispatch, showAnnotation])
  // console.log('ANNOTATIONS', annotations)

  // useEffect (()=> {
  //   if (showAnnotation === true) document.addEventListener('click', () => setShowAnnotation(!showAnnotation))

  //   return () => document.removeEventListener('click', setShowAnnotation(false))
  // },[showAnnotation])


  // const upvote = async (e) => {
  //   e.preventDefault();
  //   await dispatch(upvoteThunk(2))
  //     .catch(async (res) => {
  //       let data = await res.json();
  //       return
  //     });
  // }

  // const downvote = async (e) => {
  //   e.preventDefault();
  //   await dispatch(downvoteThunk(2))
  //     .catch(async (res) => {
  //       let data = await res.json();
  //       return
  //     })
  // }

  // const votetotal = async(e) => {
  //   e.preventDefault();
  //  await dispatch(votecount(2))
  //   .catch(async (res) => {
  //     // if(res.ok){
  //     // let data = await res.json();
  //     // console.log('this is data for vote total',data)
  //     // console.log(res)
  //     return res
  //   // }
  //     })
  // }

  // useEffect(()=>  {
  //   if (showAnnotation){
  //     annotations?.map(anno => anno?.span_ids?.split(',').map(span => document?.getElementById(span?.id)?.classList.add('currently-annotating')))
  //   }
  //   else (document.getElementsByTagName('span').classList.remove('currently-annotating'))
  // },[annotations, showAnnotation])

  // useEffect(async() => {
  //   await dispatch(getOneTrack(trackId))
  // },[dispatch,getOneTrack])



  // const annotationsArr = Object.values(annotations);
  // let spansToHighlight = (annotationsArr?.filter(anno => anno?.id === realId)[0]?.span_ids?.split(','))

  // const removeHighlighter = () => {

  //   spansToHighlight.map(spanId => document?.getElementById(spanId)?.classList.remove('now-annotating'))
  // }

  const closeSubmit = (e) => {
    e.preventDefault();
    setShowAnnotation(false)
    dispatch(getOneTrack(trackId));
    // removeHighlighter()
  };

  // let annotationLinks;
  if (!annotations) {
    return (
      <AnnotationForm setShowAnnotation={setShowAnnotation} />
    )
  } else {

    const annotationsArr = Object.values(annotations);


    // let spansToHighlight = (annotationsArr?.filter(anno => anno?.id === realId)[0]?.span_ids?.split(','))

    // const highlighter = () => {

    //   spansToHighlight.map(spanId => document?.getElementById(spanId)?.classList.add('now-annotating'))
    // }




    // const annotation = annotationsArr[0]
    // console.log('ANNOTATIONSARR', annotationsArr)
    // console.log('BEBARAERLAJASD', annotationId)
    // const annotation = annotationsArr.map(anno => anno.span_ids)
    // for(let i=1; i<annotation.length; i++) {
    //   if (annotation[i].includes(`${i}`))
    //     break
    //     // console.log(annotationsArr[i].id, annotationsArr[i].annotation_body)
    // }
    // // console.log(annotation)
    // return (
    //   showAnnotation && <div>
    //     {

    //     'yo'


    //     }


    // </div>
    return (
      <>

        {showAnnotation &&
          annotationsArr.map(anno => anno.id === realId ?
            <div>
            {/* {highlighter()} */}
              <button type="button" className="cancel-show-anno" onClick={closeSubmit}>x</button>
              <div className='anno-wrap'>
                <div className="anno-child" key={anno.id} >
                  <div className='anno-title'>
                    Ingenius Annotation
                  </div>
                  <div className='anno-body'>
                    {anno.annotation_body}
                  </div>
                  <div className='anno-vote'>
                    <Vote num={anno.id} />
                  </div>
                </div>
              </div>
            </div>




            :
            null
            // <h1>wrong id</h1>
          )}

      </>

      // showAnnotation && <div>
      //   <div>
      //     <div key={annotation.id} >
      //       {annotation.annotation_body}
      //       <div>
      //         {/* <div className='vote' type='button' onClick={upvote}>
      //                               <i class="fa-regular fa-thumbs-up"></i>
      //                           </div>
      //                           <div className='votetotal'><Vote num={annotation.id}/></div>
      //                           <div className='vote' type='button' onClick={downvote}>
      //                               <i class="fa-regular fa-thumbs-down"></i>
      //                           </div> */}
      //         <Vote num={annotation.id} />
      //       </div>
      //     </div>

      //   </div>
      // </div>

    )

  }

}
