import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { upvoteThunk,downvoteThunk,unvoteThunk } from '../../store/votes';

const Annotations = () => {
    const dispatch = useDispatch();
    const { trackId } = useParams();
    // const [isLoaded, setIsLoaded] = useState(false);
    // const sessionUser = useSelector((state) => state.session.user);
    const annotations = useSelector((state) => state.tracks.oneTrack.Annotations);
    // console.log('ANNOTATIONS', annotations)

    const upvote = async(e) => {
        e.preventDefault();
        await dispatch(upvoteThunk(1)).catch(async (res) => {
            let data = await res.json();
            console.log('this is data',data)
            if(data.errors)
            return dispatch(unvoteThunk(1)).catch(async (res2) => {
                let data2 = await res2.json();
                console.log('this is data2',data2)
                if(data2.errors) return;
            });
        })
    }


    const downvote = async(e) => {
        e.preventDefault();
       await dispatch(downvoteThunk(1)).catch(async (res) => {
            let data = await res.json();
            if(data.errors) await dispatch(unvoteThunk(1)).catch(async (res2) => {
                let data2 = await res2.json();
                if(data2.errors) return;
            });
        })
    }

    if(!annotations) {
        return null
    } else {
        const annotationsArr = Object.values(annotations);
        console.log('ANNOTATIONSARR', annotationsArr)
        return (
            <div>
                {annotationsArr.map((annotation) => (
                    <div key={annotation.id}>
                            {annotation.annotation_body}
                            <div>
                                <button onClick={upvote}>up</button>
                                {annotation.vote_count}
                                <button onClick={downvote}>down</button>
                            </div>
                    </div>
                ))}
            </div>
        )}
}

export default Annotations
