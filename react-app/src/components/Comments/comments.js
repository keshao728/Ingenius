
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getAllComments, createComment } from "../../store/comments";

const AllComments = () => {
  const dispatch = useDispatch();
  const { trackId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const comments = useSelector((state) => state.comments.comments);
  const commentsArr = Object.values(comments);
  // console.log("COMMENTS", commentsArr);

  const [userComments, setUserComments] = useState([]);


  useEffect(() => {
    dispatch(getAllComments(trackId))
  }, [dispatch, trackId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      userComments
    }
    let createdComment = await dispatch(createComment(trackId, newComment))

    // const comment = e.target.comment.value;
    // const userId = sessionUser.id;
    // const trackId = trackId;
    // const newComment = await dispatch(createComment({comment, userId, trackId}))
    // setUserComments([...userComments, newComment])
  }

  return (
    <div>
      <form className="comment-form-parent" onSubmit={handleSubmit}>
        {/* <h3 className="comment-message">Add a Review Meow!!!</h3> */}
        {/* {showErrors &&
          <ul className="form-errors">
            {validationErrors.length > 0 &&
              validationErrors.map(error => (
                <li key={error}>{error}</li>
              ))}
          </ul>
        } */}
        <div className="comment-form">
          <label>
            <textarea
              placeholder="Add a comment"
              type="text"
              className="review-input"
              value={userComments}
              onChange={(e) => setUserComments(e.target.value)}
            />
          </label>
        </div>
        <button className="button-create-spot" type="submit"> Add Review</button>
        {/* <button type="button" className="button-create-comment" onClick={handleCancel}>Cancel</button> */}
      </form>
      <div>
        {commentsArr.map((comment) => {
          return (
            <div key={comment.id}>
              <div>{comment.comment_body}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllComments;
