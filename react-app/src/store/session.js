// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_USER_INFORMATION = 'session/getAllAnnotations';


const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const actionGetUserInfo = (payload) => {
  return {
      type: GET_USER_INFORMATION,
      payload
  }
}

const initialState = { 
  user: null, 
  annotations: {},
  comments: {},
  tracks: {},
  votes: {}
  };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const getUserInfo = (userId) => async dispatch => {
  const response = await fetch(`/api/users/${userId}/info`);
  if (response.ok) {
      const userInfo = await response.json();
      console.log('IS IT WORKING YET', userInfo)
      await dispatch(actionGetUserInfo(userInfo));
      console.log('HOW BOUT NOW', userInfo)
      return userInfo
  }
  return null
}

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case GET_USER_INFORMATION:
      let annotations = {}
      let tracks = {}
      let comments = {}
      let votes = {}
      newState = { ...state}
      console.log('GET_ALL_ANNOTATIONSACTION', action)

      action.payload.annotations.forEach(annotation => {
        annotations[annotation.id] = annotation
      })

      action.payload.tracks.forEach(track => {
        tracks[track.id] = track
      })
      
      action.payload.comments.forEach(comment => {
        comments[comment.id] = comment
      })

      action.payload.votes.forEach(vote => {
        votes[vote.id] = vote
      })

      newState.annotations = annotations
      newState.tracks = tracks
      newState.comments = comments
      newState.votes = votes
      console.log('NEWNEWSTATESTATE', newState)
      return newState

    default:
      return state;
  }
}
