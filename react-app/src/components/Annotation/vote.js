import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createAnnotation } from '../../store/annotations';
import { useParams } from 'react-router-dom';
import { upvoteThunk,downvoteThunk,unvoteThunk, votecount} from '../../store/votes';

const Vote = ({num}) => {
    const dispatch = useDispatch();
    const votecounter = useSelector((state) => state.upvote.votes.votetotalvalue)
    console.log('>>>>this is votecount<<<<',votecounter)

    const upvote = async (e) => {
        e.preventDefault();
        await dispatch(upvoteThunk(num))
          .catch(async (res) => {
            let data = await res.json();
            return
          });
      }

    const downvote = async (e) => {
    e.preventDefault();
    await dispatch(downvoteThunk(num))
        .catch(async (res) => {
        let data = await res.json();
        return
        })
      }

    useEffect(async() => {
        await dispatch(votecount(num))
      }, [num])


    return(
        <div>
            <div className='vote' type='button' onClick={upvote}>
                <i class="fa-regular fa-thumbs-up"></i>
            </div>
            <div className='votetotal'>{votecounter}</div>
            <div className='vote' type='button' onClick={downvote}>
                <i class="fa-regular fa-thumbs-down"></i>
            </div>
        </div>
    )

}

export default Vote;
