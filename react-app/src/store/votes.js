const UPVOTE = 'vote/upvote'
const DOWNVOTE = 'vote/downvote'
const UNVOTE = 'vote/unvote'

//-----  ACTION  -----//
//upvote
const upvote = (id) => {
    return {
        type: UPVOTE,
        id
    }
}
//downvote
const downvote = (id) => {
    return {
        type: DOWNVOTE,
        id
    }
}
//unvote
const unvote = (id) => {
    return {
        type: UNVOTE,
        id
    }
}


//-----  THUNK  -----//
//upvote
export const upvoteThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/upvote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(upvote(data))
        return data
    }
    return
}
//downvote
export const downvoteThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/downvote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
    console.log(id)
    console.log(response)
    if (response.ok) {
        const data = await response.json()
        await dispatch(downvote(data))
        return data
    }
    return
}
//unvote
export const unvoteThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/unvote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(unvote(data))
        return data
    }
    return
}

//-----   REDUCER   -----//
// const voteReducer = (state = {}, action) => {
//     let newState
//     switch (action.type) {
//         case UPVOTE:
//             newState = {...state}
//             newState[action.id] = 1
//             return newState
//         case DOWNVOTE:
//             newState = {...state}
//             newState[action.id] = -1
//             return newState
//         case UNVOTE:
//             newState = {...state}
//             delete newState[action.id]
//             return newState
//         default:
//             return state
//     }
// }
