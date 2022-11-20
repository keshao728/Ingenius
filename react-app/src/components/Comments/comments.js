
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getAllComments, createComment, deleteComment } from "../../store/comments";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

import * as moment from 'moment';
// import { getOneTrack } from '../../store/tracks';
import "./comments.css"

const AllComments = () => {
  const dispatch = useDispatch();
  const { trackId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  // console.log("THIS IS SESSION USER IN ALLCOMMENTS", sessionUser)
  // const track = useSelector(state => state.tracks)

  const comments = useSelector((state) => state.comments.comments);
  const commentsArr = Object.values(comments);
  // console.log("COMMENTS", commentsArr);

  const [userComments, setUserComments] = useState("");
  const [validationErrors, setValidationErrors] = useState([])
  const [showErrors, setShowErrors] = useState(false)
  const [showSubmit, setShowSubmit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)


  const openSubmit = () => {
    if (showSubmit) return;
    setShowSubmit(true);
  };


  const closeSubmit = (e) => {
    e.preventDefault();
    setShowErrors(false)
    setShowSubmit(false);
  };


  function isEmpty(str) {
    if (!str.trim().length)
      return { border: "1px solid red" }
  }


  useEffect(() => {
    const errors = []
    if (!userComments || userComments === "" || isEmpty(userComments)) errors.push('Comment is Required')
    if (userComments.length > 200) errors.push("Please enter less than 200 characters")

    setValidationErrors(errors)
  }, [userComments])


  useEffect(() => {
    dispatch(getAllComments(trackId))
    .then(()=>setIsLoaded(true))

    // dispatch(getOneTrack(trackId))
  }, [dispatch, trackId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true)

    if (!validationErrors.length) {
      setShowErrors(false)
      const newComment = {
        comment_body: userComments
        // user_id:
      };
      setUserComments("");
      let createdComment = await dispatch(createComment(trackId, newComment))
      if (createdComment) {
        setShowErrors(false)
        setShowSubmit(false)
      }
    }
  }
  // const invalidInput = (userComments === " " || userComments.length > 200)
  //   ? { border: "1px solid red" }
  //   : { border: "1px solid black" }

  // const invalidInput = (userComments!==" " || userComments.length < 200)
  // ? { border: "1px solid black"}
  // : { border: "1px solid red"}

  let sessionLinks;
  let sessionLinks2;
  if (sessionUser) {
    sessionLinks = (
      <form className="comment-form-parent" onSubmit={handleSubmit}>
        {/* <h3 className="comment-message">Add a Review Meow!!!</h3> */}

        <div className="comment-form">
          <label>
            <div className="commenter-img-input">

              <img className="commenter-img" src={sessionUser.profile_img}></img>
              <textarea
                placeholder="Add a comment"
                type="text"
                error
                className="comment-input"
                // className={`${hasError ? 'invalid-comment-input' : 'comment-input'}`}
                value={userComments}
                onClick={openSubmit}
                required
                // style={invalidInput}
                onChange={(e) => setUserComments(e.target.value)}
              />
            </div>
            {showErrors && showSubmit && (
              <ul className="comment-form-errors">
                {validationErrors.length > 0 &&
                  validationErrors.map(error => (
                    <li className="comment-form-error-text" key={error}>{error}</li>
                  ))}
              </ul>
            )
            }
          </label>
          {showSubmit &&
            <div className="comment-submit-buttons">
              <button className="button-create-comment" type="submit" onSubmit={handleSubmit}> Submit</button>
              <button type="button" className="cancel-create-comment" onClick={closeSubmit}>Cancel</button>
            </div>
          }
        </div>
      </form>
    )
  } else {
    sessionLinks = (
      <div className="comment-sign-in">
        <div className="login-comment">
          <LoginForm />
        </div>
        <div>
          to Comment!
        </div>
      </div>
    )
    sessionLinks2 = (
      <div className="knowledge-wrapper">
        <div className="knowledge-title">
          Sign Up And Drop Knowledge 🤓
        </div>
        <div className="knowledge-des">
          INGENIUS is the ultimate source of music knowledge, created by scholars like you who share facts and insight about the songs and artists they love.
        </div>
        <div className="signup-knowledge">
          <SignUpForm />
        </div>
      </div>
    )
    // } else {
    //   sessionLinks = (
    //     <form className="comment-form-parent" onSubmit={handleSubmit}>
    //       {/* <h3 className="comment-message">Add a Review Meow!!!</h3> */}
    //       {/* {showErrors &&
    //         <ul className="form-errors">
    //           {validationErrors.length > 0 &&
    //             validationErrors.map(error => (
    //               <li key={error}>{error}</li>
    //             ))}
    //         </ul>
    //       } */}
    //       <div className="comment-form">
    //         <label>
    //           <textarea
    //             placeholder="Add a comment"
    //             type="text"
    //             className="review-input"
    //             value={userComments}
    //             onChange={(e) => setUserComments(e.target.value)}
    //           />
    //         </label>
    //         <label>
    //           <text
    //             placeholder="User Name"
    //             type="text"
    //             className="review-input"
    //             value={userName}
    //             onChange={(e) => setUserName(e.target.value)}
    //           />
    //         </label>
    //       </div>
    //       <button className="button-create-spot" type="submit"> Add Review</button>
    //       {/* <button type="button" className="button-create-comment" onClick={handleCancel}>Cancel</button> */}
    //     </form>
  }

  return isLoaded && (
    <>
      <div className="comments-mother">
        <div className="comments-text">
          Comments
        </div>
        <div>
          {sessionLinks}
        </div>
        <div>
          {commentsArr.map((comment) => {
            return (
              <div className="comment-display">
                <div className="individual-comment-display" key={comment?.id}>
                  <div className="individual-comment-header">
                    < NavLink to={`/users/${comment.user_id}`} >
                      <img className="comment-profile-img" src={comment?.commentter?.profile_img}></img>
                    </NavLink>
                    <div className="comment-user">{comment?.commentter?.username}</div>
                    <div className="comment-time-stamp">{moment(comment.created_at).fromNow()}</div>
                  </div>
                  <div className="comment-body">{comment.comment_body} </div>
                  {/* <div>{comment.created_at.split(' ').slice(0, -2).join(' ')}</div> */}
                </div>
                {sessionUser?.id === comment.user_id && (
                  <button className="delete-comment-button"
                    onClick={async () => await dispatch(deleteComment(comment?.id))}>
                    Delete
                  </button>
                )}
              </div>
            )
          })}
        </div>
        <div>
          {sessionLinks2}
        </div>
      </div>
      <div className="footer">
        <div className="footer-message">
          INGENIUS is the world’s smallest collection of song lyrics and musical knowledge
        </div>
      </div>
    </>
  )
}

export default AllComments;


  // function timeSince(date) {

  //   var seconds = Math.floor((new Date() - date) / 1000);

  //   var interval = seconds / 31536000;

  //   if (interval > 1) {
  //     return Math.floor(interval) + " years";
  //   }
  //   interval = seconds / 2592000;
  //   if (interval > 1) {
  //     return Math.floor(interval) + " months";
  //   }
  //   interval = seconds / 86400;
  //   if (interval > 1) {
  //     return Math.floor(interval) + " days";
  //   }
  //   interval = seconds / 3600;
  //   if (interval > 1) {
  //     return Math.floor(interval) + " hours";
  //   }
  //   interval = seconds / 60;
  //   if (interval > 1) {
  //     return Math.floor(interval) + " minutes";
  //   }
  //   return Math.floor(seconds) + " seconds";
  // }
