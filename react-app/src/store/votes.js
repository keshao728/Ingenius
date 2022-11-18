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
export const votecount = (id) => async (dispatch) => {
    const response = await fetch(`/api/votes/${id}/total`);
    // console.log('this is response for votecount in thunk',response)
    // console.log('this is id for votecount in thunk',id)
    if (response.ok) {
        const data = await response.json();
        // console.log('this is data for votecount in thunk',data.count)
        return data.count
        // return data;
    }
    // return response
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
        // await dispatch(upvote(data))
        if(data.statusCode == 401) {
            const response2 = await fetch(`/api/votes/${id}/unvote`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            })
            if(response2.ok) {
                const data2 = await response2.json()
                return data2
            }
        }
        return data.errors
    }
    return
}
//downvote
export const downvoteThunk = (id) => async () => {
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
        // const data2 = await dispatch(downvote(data))
        if(data.statusCode == 401) {
            const response2 = await fetch(`/api/votes/${id}/unvote`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            })
            if(response2.ok) {
                const data2 = await response2.json()
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
