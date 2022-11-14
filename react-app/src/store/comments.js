const GET_ALL_COMMENTS = 'tracks/getAllComments';

const GET_ONE_COMMENT = 'tracks/getOneComment';

const GET_USER_COMMENTS = 'tracks/getUserComments';

const CREATE_COMMENT = 'tracks/createComment';

const EDIT_COMMENT = 'tracks/editComment';

const DELETE_COMMENT = 'tracks/deleteComment';


//actions


//get all comments

const actionGetComments = (trackId) => {
    return {
        type: "GET_ALL_COMMENTS",
        trackId
    }
}



//create a comment

const actionCreateComment = (comment) => {
    return {
        type: "CREATE_COMMENT",
        comment
    }
}



//edit a comment

const actionEditComment = (comment) => {
    return {
        type: "EDIT_COMMENT",
        comment
    }
}



//delete a comment

const actionDeleteComment = (commendId) => {
    return {
        type: "DELETE_COMMENT",
        commendId
    }
}




//thunks

//get all comments

export const getAllComments =(trackId) => async (dispatch) => {
    const response = await fetch(`/api/tracks/${trackId}/comments`)

    if (response.ok) {
        const comments = await response.json();
        await dispatch(actionGetComments(comments));
    }
}



//create comment

export const createComment = ({trackId, comment}) => async (dispatch) => {
    const response = await fetch(`/api/tracks/${trackId}/comments`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({body:comment})
    })

    if (response.ok) {
        const comment = await response.json();
        await dispatch(actionCreateComment(comment))
    }
}



//edit a comment

export const editComment = ({commentId, body}) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({body: body})
    })

    if (response.ok) {
        const editedComment = await response.json();
        await dispatch(actionEditComment(editedComment))
    }
}



//delete comment

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        const deletedComment = await response.json();
        await dispatch(actionDeleteComment(commentId));
        return deletedComment
    }
}





const initialState = {};

export const commentReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_COMMENTS: {
            newState = {}
            action.trackId.Comments.forEach(comment => {
                newState[comment.id] = comment
            });
            return newState
        }
        case CREATE_COMMENT: {
            newState = {...state}
            newState[action.comment.id] = action.comment
            return newState
        }
        case EDIT_COMMENT: {
            newState = {...state}
            newState[action.comment.id] = action.comment
            return newState
        }
        case DELETE_COMMENT: {
            newState = {...state}
            delete newState[action.comment.id]
            return newState
        }
        default:
            return state
    }
}
