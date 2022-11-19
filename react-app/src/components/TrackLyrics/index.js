import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import './TrackLyric.css'


export default function DisplayLyrics({ track, setAnnotating, setDocu }) {

    const ref = useRef();
    const [Ref, setRef] = useState(null)

    const [isSelected, setIsSelected] = useState(false)
    const annotations = useSelector((state) => state.tracks.oneTrack.Annotations);


    // const handleClick = () => {

    //     let value = ref.current
    //     // setRef(ref.current)
    //     // console.log(Ref)

    //     // // console.log(ref.current);
    //     // currentRef.className = 'selected'
    //     value.className = 'selected'
    //     console.log(value)
    //     // Ref.className = 'selected'


    //     e.currentTarget.className = 'selected'
    // };

    // const handleClick = (e) => {

    //     // e.currentTarget.classList.add('selected')
    //     // e.currentTarget.className = 'not-selected'
    //     // ref.current.classList.toggle('selected');
    //     // ref.current.classList.toggle('not-selected');
    //     // e.currentTarget.classList.toggle('selected');
    //     // e.currentTarget.classList.toggle('not-selected');
    // };

    // const handleClick = (e) => {
    //     setIsSelected((s) => !s)
    // };
    // useEffect(() => {
    //     console.log(setDocu)
    //     doccer()

    // }, [docu])


    const handleClick = (e) => {
        // let value = ref.current
        // console.log(value)

        // e.currentTarget.className === '' ? e.currentTarget.className = 'selected' : e.currentTarget.className = ''
        // console.log(e.currentTarget ,'e current target')
        if (e.currentTarget.className === '') {
            e.currentTarget.className = 'selected'
        } else if (e.currentTarget.className === 'selected') {
            e.currentTarget.className = ''
        } else if (e.currentTarget.className === 'annotated') {
        }

        // setDocu(Array.from(document.getElementsByClassName('selected')))
        // console.log(typeof(e.currentTarget.id),'hihihihi')

        // for (let i = 0 ; i < annotations.length; i++){
        //     if(annotations[i].span_ids.includes(e.currentTarget.id)){
        //         console.log(annotations[i].id,'hahahahaha')
        //         return annotations[i].id
        //         }
        //     return null
        // }
    };


    // const doccer = () => {
    //     for (let doc of docu) {
    //         if (doc.id == 6) {
    //             console.log('there is a 6')
    //         }
    //     }
    // }


    // console.log('annotating', annotating)
    // if (track.lyrics?.split("").includes("[")) {
    //     <div className={"bold-me"}> </div>
    // }

    return (
        <>
            {/* Something */}
            {/* {sortedSort} */}
            {/* {track?.lyrics} */}
            {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}><span className={`${isSelected ? 'selected' : ''}`} id='lyric-text' onClick={isSelected ? removeSelect : addSelect}>{chunk}</span></div>)} */}
            {/* {track.lyrics?.split('\n').map(chunk =>
                <div key={chunk}>
                    <span className={`${isSelected ? 'selected' : ''}`} onClick={isSelected ? removeSelect : addSelect}>{chunk}</span>
            </div>)} */}
            {/* {track.lyrics} */}
            {/* {track.lyrics?.split("\n")} */}
            {/* {React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk))} */}
            {/* {console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)))} */}

            {/* {React.Children.toArray(Object.values(annotations))} */}
            {/* {Object.values(annotations)?.map(anno => anno.annotation_body)} */}
            {/* {track.lyrics?.split('\n').slice(1, 6)} */}

            {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}><span className={`lyric-${1}`} ref={ref} onClick={handleClick}>{chunk}</span></div>)} */}
            {/* {track.lyrics?.split('\n').map((chunk, idx) => <div ><span key={idx} className={isSelected ? 'selected': 'not-selected'} ref={ref} onClick={handleClick}>{chunk}</span></div>)} */}
            {/* {track.lyrics?.split('\n').map(chunk => <div key={chunk}><span className={'not-selected'} ref={ref} onClick={handleClick}>{chunk}</span></div>)} */}

            {/* {track.lyrics?.includes("[") ? <div className={"bold-me"}> </div> : null} */}

            {track.lyrics?.split('\n').map((chunk, idx) => <div ><span key={idx} className={''} id={idx} ref={ref} onClick={handleClick}>{chunk}</span></div>)}
        </>
    )
}
