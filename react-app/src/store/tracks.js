const GET_ALL_TRACKS = 'tracks/getAllTracks';

const GET_ONE_TRACK = 'tracks/getOneTrack';

const GET_USER_TRACKS = 'tracks/getUserTracks';

const CREATE_TRACK = 'tracks/createTrack';

const EDIT_TRACK = 'tracks/editTrack';

const DELETE_TRACK = 'tracks/deleteTrack';

const RESET_TRACK = 'tracks/resetTrack';




//actions


// get all tracks

const actionGetTracks = (tracks) => {
    return {
        type: GET_ALL_TRACKS,
        tracks
    }
}

// get one track

const actionGetOneTrack = (track) => {
    return {
        type: GET_ONE_TRACK,
        track
    }
}

// get user tracks

const actionGetUserTracks = (tracks) => {
    return {
        type: GET_USER_TRACKS,
        tracks
    }
}

// create track

const actionCreateTrack = (track) => {
    return {
        type: CREATE_TRACK,
        track
    }
}

// edit track

const actionEditTrack = (track) => {
    return {
        type: EDIT_TRACK,
        track
    }
}


// delete track

const actionDeleteTrack = (track) => {
    return {
        type: DELETE_TRACK,
        track
    }
}


// reset track

export const actionResetTrack = () => ({
    type: RESET_TRACK
})


//thunks

// get all tracks

export const getAllTracks = () => async dispatch => {
    const response = await fetch('/api/tracks')

    if (response.ok) {
        const allTracks = await response.json();
        await dispatch(actionGetTracks(allTracks))
        return allTracks
    }
    return;
}

// get one track

export const getOneTrack = (trackId) => async dispatch => {
    const response = await fetch(`/api/tracks/${trackId}`)

    if (response.ok) {
        const oneTrack = await response.json();
        await dispatch(actionGetOneTrack(oneTrack))
        return oneTrack
    }
    return;
}

// get all tracks by user

export const getUserTracks = () => async dispatch => {
    const response = await fetch('/api/tracks/current')
    if (response.ok) {
        const userTracks = await response.json()
        await dispatch(actionGetUserTracks(userTracks))
        return userTracks
    }
}

// create track

export const createTrack = (track) => async dispatch => {
    const response = await fetch('/api/tracks/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(track)
    });

    if (response.ok) {
        const createdTrack = await response.json();
        dispatch(actionCreateTrack(createdTrack))
        return createdTrack
    }
    return
}

// edit track

export const editTrack = (track, trackId) => async dispatch => {
    const response = await fetch(`/api/tracks/${trackId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(track)
    });

    if (response.ok) {
        const editedTrack = await response.json();
        dispatch(actionEditTrack(editedTrack))
        return editedTrack
    }
    return
}


// delete track

export const deleteTrack = (trackId) => async (dispatch) => {
    const response = await fetch(`/api/tracks/${trackId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const deletedTrack = await response.json();
        dispatch(actionDeleteTrack(deletedTrack))
        return deletedTrack
    }
    return
}


const initialState = {

}

export const trackReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {

        case GET_ALL_TRACKS: {
            newState = {};
            action.tracks.forEach(track => {
                newState[track.id] = track
            })
            return newState
        }

        case GET_ONE_TRACK: {
            newState = { ...action.track };
            return newState
        }

        case GET_USER_TRACKS: {
            newState = {};
            action.tracks.forEach(track => {
                newState[track.id] = track
            })
            return newState
        }

        case CREATE_TRACK: {
            newState = { ...state };
            newState[action.track.id] = action.track
            return newState
        }

        case EDIT_TRACK: {
            newState = { ...state };
            newState[action.track.id] = action.track
            return newState;

        }

        case DELETE_TRACK: {
            newState = { ...state };
            delete newState[action.track.id]
            return newState
        }

        case RESET_TRACK:
            return initialState

        default:
            return state
    }
}

export default trackReducer;
