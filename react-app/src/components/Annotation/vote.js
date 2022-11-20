import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { createAnnotation } from '../../store/annotations';
// import { useParams } from 'react-router-dom';
import './vote.css'

import { upvoteThunk, downvoteThunk, unvoteThunk, votecount } from '../../store/votes';

const Vote = ({ num }) => {
  // const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const votecounter = useSelector((state) => state.upvote.votes.votetotalvalue)
  // console.log('>>>>this is votecount<<<<',votecounter)

  const upvote = async (e) => {
    e.preventDefault();
    // e.target.style.color = 'black';
    await dispatch(upvoteThunk(num)).then(dispatch(votecount(num)))
  }


  const downvote = async (e) => {
    e.preventDefault();
    // e.target.style.color = 'black';
    await dispatch(downvoteThunk(num)).then(dispatch(votecount(num)))
  }



  useEffect(() => {
    async function fetchData() {
      await dispatch(votecount(num))
    }
    return fetchData()
  }, [
    num
    , votecounter
    , dispatch])

  // if(!isLoaded)
  //     return null
  // else
  return (
    <div className='anno-vote-wrap'>
      <div className='anno-vote'>
        <div className='vote' id='btn' type='button' onClick={upvote}>
          <i class="fa-regular fa-thumbs-up" id="up"></i>
        </div>
        <div className='votetotal'>{votecounter}</div>
        <div className='vote' id='btn' type='button' onClick={downvote}>
          <i class="fa-regular fa-thumbs-down" id="down"></i>
        </div>
      </div>
    </div>
  )
}

export default Vote;
