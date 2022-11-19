import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import { getOneTrack } from '../../store/tracks';
import EditTrackModal from '../TrackEditForm/index';
import DeleteTrackModal from '../TrackDelete/index';
import { actionResetTrack } from '../../store/tracks';
import ReactPlayer from 'react-player'
import './TrackInfo.css';
import React from 'react';
// import Vote from '../Annotation/vote';
import { createAnnotation, actionResetAnnotation } from '../../store/annotations';
import AnnotationForm from '../AnnotationForm/AnnotationForm';
import DisplayLyrics from '../TrackLyrics';
import Annotations from '../Annotation/annotations';




export default function TrackInfo() {
  const { trackId } = useParams()
  // console.log(trackId)
  const dispatch = useDispatch()
  const track = useSelector(state => state.tracks.oneTrack)
  const user = useSelector(state => state.session.user)
  // console.log("awdeeeeeeeeeeeeeeeeeeeeeewwwwwadw", track)
  const history = useHistory()
  const [showFact, setShowFact] = useState(true);

  useEffect(() => {
    dispatch(getOneTrack(trackId))


    return () => dispatch(actionResetTrack())
  }, [dispatch, user, trackId])


  const openFact = () => {
    if (showFact) return;
    setShowFact(!showFact);
  };


  const closeFact = (e) => {
    e.preventDefault();
    setShowFact(false);
  };

  // const annotations = useSelector(state => state.tracks.oneTrack.Annotations)

  const [errors, setErrors] = useState([])


  //annotation stuff

  // const [index, setIndex] = useState([])
  // const [startIndex, setStartIndex] = useState()
  // const [endIndex, setEndIndex] = useState()

  // const [annotating, setAnnotating] = useState(false)


  const [docu, setDocu] = useState('')


  const [annotated, setAnnotated] = useState(false)


  let spanIds = Array.from(document.getElementsByClassName('selected')).map(span => span.id).join(',')
  // console.log('mmmmmmmmaaaaaadddddd', docu)
  // let spanIds = docu?.forEach(m => m.id)
  // console.log('SPAAAAAAAAAAAAAAAAANIDS', spanIds)

  // useEffect(() =>{
  //   console.log(document.getElementsByClassName('selected'));
  //   document.getElementsByClassName('selected') ? setAnnotated(true) : setAnnotated(false)
  //   console.log(classes)
  // }, [annotated, classes])

  useEffect(() => {
    docu.length ? setAnnotated(true) : setAnnotated(false)
    // console.log('OOOOOOOOOOOOOOOOOOOOOOO',docu)
  }, [docu])

  // const sortedAnnotations = Object.values(track?.Annotations).sort(
  //   (a, b) => a.startIndex - b.startIndex
  // );

  // console.log('asdfasdfasdfasdfasdfas', sortedAnnotations)


  // console.log('annotating', annotating)



  // useEffect(() => {
  //   if (startIndex !== endIndex && startIndex !== Infinity) {
  //     setAnnotating(true)
  //   }
  //   else setAnnotating(false)
  // }, [startIndex, endIndex])

  // useEffect(() => {
  //   setStartIndex(Math.min(...index))
  //   setEndIndex(Math.max(...index))
  // }, [index])

  // useEffect(() => {
  //   setSpanIds(Array.from(document.getElementsByClassName('selected')).map(span => span.id).join(','))

  // }, [spanIds])


  // const annotateThis = (e) => {
  //   // console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)).join(''))
  //   e.preventDefault()
  //   // console.log(trackId)
  //   // console.log(annotations)

  //   const selected = window.getSelection && window.getSelection()


  //   if (selected && selected.rangeCount > 0) {
  //     const highlight = selected.getRangeAt(0)
  //     setIndex([highlight.startOffset, highlight.endOffset])
  //     // console.log("SETSTSETSDFDSF", index)
  //     // console.log("SETSTSETSDFDSF", startIndex)
  //     // console.log("SETSTSETSDFDSF", endIndex)
  //     // console.log(highlight)
  //   }

  //   // const annotationInfo = {
  //   //   annotation_body: 'something',
  //   //   startIndex: startIndex,
  //   //   endIndex: endIndex,
  //   // }

  //   // let createdAnnotation = await dispatch(createAnnotation(trackId, annotationInfo)).catch(async (res) => {
  //   //   const data = await res.json();
  //   //   if (data && data.errors) setErrors(data.errors)
  //   // })
  //   // if (createdAnnotation) {

  //   //   // console.log('SELECTED',selected)
  //   //   // console.log('RANGECOUNT',selected.rangeCount)
  //   //   // console.log(trackId)
  //   //   // console.log(createdAnnotation)
  //   //   history.push(`/tracks/${trackId}`)
  //   // }
  //   // else return errors


  // }



  const annotations = useSelector((state) => state.tracks.oneTrack.Annotations);
  // console.log('0000000000000000000000000000000000000000000000000000000000000', annotations)
  const [showAnnotation, setShowAnnotation] = useState(false)


  const [annotationId, setAnnotationId] = useState('')

  useEffect(() => {
    // function getAnno(e) {
    //   console.log(e.currentTarget)
    //   let currentAnno = e.currentTarget.id
    //   console.log('currentAnno', currentAnno)
    //   console.log('UUUUUUUUUUUUUUUUUUUU', annotations)
    //   for (let annos of annotations) {
    //     console.log('vvvvvvvvvvvvvvvvvvvvvv',annos)
    //     return annos?.span_ids?.split(",")?.find(e => e === currentAnno) ? console.log('Annoid',annos.id) : null
    //     // console.log('meow', meow)

    //     // return meow ? annos.id : null
    //     // if (annos.span_ids.find(e => e === e.currentTarget.id)) {
    //     //   console.log('444444444444',annos)
    //     // }
    //   }
    // }



    // }

    function getAnno(e) {
      console.log(e.currentTarget)
      let currentAnno = e.currentTarget.id
      console.log('currentAnno', currentAnno)
      console.log('UUUUUUUUUUUUUUUUUUUU', annotations)

      // let siu = annotations.map(anno => anno.span_ids.split(',').map(e => e.includes(currentAnno)))
      // let siu = annotations.map(anno => anno.span_ids.split(',')?.find(e => e === currentAnno) ? anno?.id : null)
      let id = annotations?.filter(anno => anno.span_ids.split(',').find(e => e === currentAnno))[0].id
      console.log('SSSSSSSSSIIIIIIIIIIIIIIIUUUUUUUUUUUUUUUUUUUUUUUUUU', id)
      setAnnotationId(id)
    }

    if (annotations) {
      for (let annotation of annotations) {
        // console.log(annotation.span_ids.split(','))
        annotation.span_ids.split(',').map(anno =>
          document.getElementById(anno).classList.add('annotated')
        )
        annotation.span_ids.split(',').map(anno =>
          document.getElementById(anno).addEventListener('click', (e) => { setShowAnnotation(true); getAnno(e) })
        )


        // console.log(splitted)
      }
      // console.log('-----------------------------------------------------------------------------')
    }

  }, [annotations, dispatch, showAnnotation])


  // end annotation stuff






  return (
    <div>
      <div className="track-info-container">

      </div>
      <div className='track_art'>
        <img className='album-cover' src={track.track_art}></img>
      </div>

      <div className='track_title_artist'>
        <div className='track_title'>
          {track.track_title}
        </div>
        <div className='track_artist'>
          {track.artist}
        </div>
        <div>
          on {track.album} (album)
        </div>
      </div>
      <div className='track_producer'>
        <div>
          Produced by:
        </div>
        <div className='track_producer_name'>
          {track.produced_by ? track.produced_by : 'Unknown'}
        </div>
      </div>
      <div className='track_release'>
        Release Date:
        <div className='track_release_date'>
          {track.release_date?.split(' ').slice(0, -2).slice(1).join(' ')}
        </div>
      </div>
      <div className='buttons'>
        <div className='button1'>
          {user?.id === track.user_id && <EditTrackModal />}
        </div>
        <div className='button2'>
          {user?.id === track.user_id && <DeleteTrackModal />}
        </div>
      </div>

      <div className='body_page'>
        <div className='lyric-wrapper'>

          <div className='lyrics_body'>
            {/* Track Lyrics: */}

            {/* <div className='lyric-track' onMouseUp={annotateThis}> */}
            <div className='lyric-track'>

              {/* <DisplayLyrics track={track} setAnnotating={setAnnotating} setIndex={setIndex}/> */}
              <DisplayLyrics track={track} setDocu={setDocu} />
              {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}>{chunk}</div>)} */}
              {/* {track.lyrics} */}
              {/* {track.lyrics?.split("\n")} */}
              {/* {React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk))} */}
              {/* {console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)))} */}

              {/* {React.Children.toArray(Object.values(annotations))} */}
              {/* {Object.values(annotations)?.map(anno => anno.annotation_body)} */}
              {/* {track.lyrics?.split('\n').slice(1, 6)} */}
            </div>
          </div>
          <div>

            <div className='lyric-annotate'>
              {/* {annotating && <AnnotationForm indexes={[startIndex, endIndex]} />} */}
              {/* {annotating && <AnnotationForm startIndex={startIndex} endIndex={endIndex} setAnnotating={setAnnotating} />} */}
              {/* {annotating && <AnnotationForm setAnnotating={setAnnotating} />} */}
              {annotated &&
                <AnnotationForm
                  setDocu={setDocu}
                  docu={docu}
                  setAnnotated={setAnnotated}
                  spanIds={spanIds} />}
            </div>
            <div>
              {<Annotations
                setShowAnnotation={setShowAnnotation}
                showAnnotation={showAnnotation}
                annotationId={annotationId} />}
            </div>
              {/* {annotated ?
                <AnnotationForm
                  setDocu={setDocu}
                  docu={docu}
                  setAnnotated={setAnnotated}
                  spanIds={spanIds} />
                : <Annotations
                  setShowAnnotation={setShowAnnotation}
                  showAnnotation={showAnnotation}
                  annotationId={annotationId} />}
            </div> */}
            </div>
            {/* {annotating && <AnnotationForm /> } */}

          </div>

        </div>
        <div className='track-video'>
          <div className='about-wrapper'>
            <div className='music-vid-text'> About </div>
            <div className='show-fact'>
              {showFact ?
                <div className="fact-div" onClick={closeFact} >
                  <div>
                    Did you know?
                  </div>
                  <div className='open-close-fact-button'>
                    -
                  </div>
                </div>
                : <div className="fact-div" onClick={openFact}>
                  <div>
                    Did you know?
                  </div>
                  <div className='open-close-fact-button'>
                    +
                  </div>

                </div>}
            </div>
            {showFact && (
              <div className='fact-wrapper'>
                <div className='fact-genius'>
                  Ingenius Answer
                </div>
                <div className='fact-text'>
                  MEOWMEOWMEOWMEOW
                </div>
              </div>
            )}
            <div className='about-artist-wrapper'>

              <div className='about-artist'>
                <div className='about-album-cover'>
                  <img className="about-cover" src={track.track_art}></img>
                </div>
                <div className='album-details'>

                  <div className='about-track-title'>
                    {track.track_title}
                  </div>

                  <div className='about-track-des'>
                    on {track.album} (album)
                  </div>

                </div>
              </div>
            </div>
            <div className='credits-wrapper'>
              <div className='credits-text'>
                Credits
              </div>
              <div className='credits-people'>
                <div className='about-credit-name'>
                  <div className='about-credit'>
                    Produced by
                  </div>
                  <div>
                    {track.produced_by}
                  </div>
                </div>
                <div className='about-credit-name'>
                  <div className='about-credit'>
                    Uploaded by
                  </div>
                  <div>
                    {track?.uploader?.username}
                  </div>
                </div>
              </div>
            </div>
            <ReactPlayer className="mv" width="750px" height="450px" url={track.track_url} />
            {/* <iframe
                        width="560"
                        height="315"
                        src={track.track_url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe> */}

            {/* Track Url: {track.track_url} */}
          </div>
        </div>


      </div>
      )
}
