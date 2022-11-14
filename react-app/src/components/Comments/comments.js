
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getAllComments } from "../../store/comments";

const AllComments = () => {
  const dispatch = useDispatch();
  const { trackId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const comments = useSelector((state) => state.comments);
  console.log("COMMENTS", comments);
  const commentsArr = Object.values(comments);


  useEffect(() => {
    dispatch(getAllComments(trackId))
  }, [dispatch, trackId])

  return (
    <div>
      {commentsArr.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.comment_body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default AllComments;
