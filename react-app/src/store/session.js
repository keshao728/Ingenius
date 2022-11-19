// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_USER_INFORMATION = 'session/getUserInfo';
const EDIT_ANNOTATION = 'annotations/editAnnotation';
const DELETE_ANNOTATION = 'annotations/deleteAnnotation';
const EDIT_USER_IMG = 'session/editUserImg'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const actionEditUserImg = (user) => ({
  type: EDIT_USER_IMG,
  user
})

const actionGetUserInfo = (payload) => {
  return {
      type: GET_USER_INFORMATION,
      payload
  }
}

const actionEditAnnotation = (annotation) => {
  return {
      type: EDIT_ANNOTATION,
      annotation
  }
}

const actionDeleteAnnotation = (annotation) => {
  return {
      type: DELETE_ANNOTATION,
      annotation
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  console.log('response', response)
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    console.log('data', data)
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

//edit user pfp and/or banner
export const editUserPhoto = (user) => async dispatch => {
  const response = await fetch(`/api/users/${user.id}/photos`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
  console.log('SIMONSUSER', user)
  console.log('SIMON RESPONSE', response)
  
  if (response.ok) {
    const newPhoto = await response.json();
    await dispatch(actionEditUserImg(newPhoto))
  console.log('NEWPHOTO', newPhoto)
    return newPhoto
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

//edit a annotation
export const editAnnotation = (annotation) => async dispatch => {
  const response = await fetch(`/api/annotations/${annotation.id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(annotation)
  })
  console.log('annotation from thunk!', annotation)
  console.log('RESPONSE from thunk!', response)
  if (response.ok) {
      const editedAnnotation = await response.json();
      await dispatch(actionEditAnnotation(editedAnnotation))
      return editedAnnotation
  }
}

//delete annotation
export const deleteAnnotation = (annotationId) => async (dispatch) => {
  const response = await fetch(`/api/annotations/${annotationId}`, {
      method: "DELETE",
  })
  if (response.ok) {
      dispatch(actionDeleteAnnotation(annotationId));
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
    case EDIT_ANNOTATION: 
      newState = {...state}
      newState.annotations = {...state.annotations}
      newState.annotations[action.annotation.id] = action.annotation

      return newState
    case EDIT_USER_IMG:
      newState = {...state}
      newState.user = {...state.user, ...action.user}
      
      return newState
    case DELETE_ANNOTATION:
      newState = {...state, annotations: {...state.annotations}}
      delete newState.annotations[action.annotation]
      return newState
    default:
      return state;
  }
}
