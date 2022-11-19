import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { createAnnotation } from '../../store/annotations';
// import { useParams } from 'react-router-dom';
import { upvoteThunk,downvoteThunk,unvoteThunk, votecount} from '../../store/votes';

const Vote = ({num}) => {
    // const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();
    const votecounter = useSelector((state) => state.upvote.votes.votetotalvalue)
    // console.log('>>>>this is votecount<<<<',votecounter)

    const upvote = async (e) => {
        e.preventDefault();
        await dispatch(upvoteThunk(num)).then(dispatch(votecount(num)))
      }

    const downvote = async (e) => {
    e.preventDefault();
    await dispatch(downvoteThunk(num)).then(dispatch(votecount(num)))
      }

    useEffect(async() => {
        await dispatch(votecount(num))
      }, [num,votecounter])

    // if(!isLoaded)
    //     return null
    // else
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
