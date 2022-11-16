import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'


const Annotations = () => {
    const dispatch = useDispatch();
    const { trackId } = useParams();
    // const [isLoaded, setIsLoaded] = useState(false);
    // const sessionUser = useSelector((state) => state.session.user);
    const annotations = useSelector((state) => state.tracks.oneTrack.Annotations);
    console.log('ANNOTATIONS', annotations)

    if(!annotations) {
        return null
    } else {
        const annotationsArr = Object.values(annotations);
        console.log('ANNOTATIONSARR', annotationsArr)
        return (
            <div>
                {annotationsArr.map(annotation => (
                    <div key={annotation.id}>
                        <div>
                            {annotation.annotation_body}
                        </div>
                        {/* {sessionUser &&
                            <button onClick={}>
                                Edit
                            </button>
                        } */}
                    </div>
                ))}
            </div>
        )}
    // return <h1>hello , placeholder</h1>

}

export default Annotations
