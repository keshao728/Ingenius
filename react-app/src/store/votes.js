const UPVOTE = 'vote/upvote'
const DOWNVOTE = 'vote/downvote'
const UNVOTE = 'vote/unvote'
const VOTECOUNT = 'vote/votecount'

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

const  votecounter = (data) => {
    return {
        type: VOTECOUNT,
        data
    }
}

//-----  THUNK  -----//
export const votecount = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/total`);
    console.log('this is response for votecount in thunk',response)
    console.log('this is id for votecount in thunk',id)
    if (response.ok) {
        const data = await response.json();
        console.log('this is data for votecount in thunk',data)
        await dispatch(votecounter(data))
        return data
        // return data;
    }
    // return response
    return
}

//upvote
export const upvoteThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/upvote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
    // console.log('id from upvote thunk',id)
    // console.log('response from upvote thunk',response)
    if (response.ok) {
        const data = await response.json()
        console.log('data from upvote thunk',data)
        await dispatch(votecount(id))
        // await dispatch(upvote(data))
        if(data.statusCode === 401) {
            const response2 = await fetch(`/api/votes/${id}/unvote`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            })
            if(response2.ok) {
                const data2 = await response2.json()
                await dispatch(votecount(id))
                return data2
            }
        }
        return data.errors
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
    console.log('id from downvote thunk',id)
    console.log('response from downvote thunk',response)
    if (response.ok) {
        const data = await response.json()
        await dispatch(votecount(id))
        // const data2 = await dispatch(downvote(data))
        if(data.statusCode === 401) {
            const response2 = await fetch(`/api/votes/${id}/unvote`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            })
            if(response2.ok) {
                const data2 = await response2.json()
                await dispatch(votecount(id))
                return data2
            }
        }
        return data.errors
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
const initialState = {
    votes: {}
}
//-----   REDUCER   -----//
const voteReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case VOTECOUNT:
            newState = {...state}
            newState.votes = action.data
            return newState


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
        default:
            return state
    }
}

export default voteReducer
