// import { csrfFetch } from './csrf'

const GET_ALL_ANNOTATIONS = 'annotations/getAllAnnotations';

const GET_ONE_ANNOTATION = 'tracks/getOneAnnotation';

// const GET_USER_ANNOTATIONS = 'tracks/getUserAnnotations';

const CREATE_ANNOTATION = 'tracks/createAnnotation';

const EDIT_ANNOTATION = 'tracks/editAnnotation';

const DELETE_ANNOTATION = 'annotations/deleteAnnotation';


//actions


//get all annotations

// const actionGetAnnotations = (trackId) => {
//     return {
//         type: "GET_ALL_ANNOTATIONS",
//         trackId
//     }
// }

// get all user annotations
const actionGetUserAnnotations = (payload) => {
    return {
        type: GET_ALL_ANNOTATIONS,
        payload
    }
}

const actionGetOneAnnotation = (annotationId) => {
    return {
        type: GET_ONE_ANNOTATION,
        annotationId
    }
}

//create a annotation

const actionCreateAnnotation = (annotation) => {
    return {
        type: "CREATE_ANNOTATION",
        annotation
    }
}



//edit a annotation

const actionEditAnnotation = (annotation) => {
    return {
        type: "EDIT_ANNOTATION",
        annotation
    }
}



//delete a annotation

const actionDeleteAnnotation = (annotation) => {
    return {
        type: DELETE_ANNOTATION,
        annotation
    }
}


//thunks

//get all annotations for user

// export const getAllAnnotations =(trackId) => async (dispatch) => {
//     const response = await fetch(`/api/tracks/${trackId}/annotations`)
//     // const response = await fetch(`/api/annotations`)

//     if (response.ok) {
//         const annotations = await response.json();
//         await dispatch(actionGetUserAnnotations(annotations));
//         return annotations
//     }
//     return null
// }
 // get all user annotations
export const getUserAnnotations = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/annotations`);
    if (response.ok) {
        const annotations = await response.json();
        // console.log('IS IT WORKING YET', annotations)
        await dispatch(actionGetUserAnnotations(annotations));
        // console.log('HOW BOUT NOW', annotations)
        return annotations
    }
    return null
}

//get an annotation inside a track
// export const getOneAnnotation = (trackId, annotationId) => async (dispatch) => {

// }

//create annotation

export const createAnnotation = ({trackId, annotation}) => async (dispatch) => {
    const response = await fetch(`/api/tracks/${trackId}/annotations`, {
    // const response = await fetch(`/api/annotations`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({body:annotation})
    })

    if (response.ok) {
        const annotation = await response.json();
        await dispatch(actionCreateAnnotation(annotation))
    }
}



//edit a annotation

export const editAnnotation = ({annotationId, body}) => async (dispatch) => {
    const response = await fetch(`/api/annotations/${annotationId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({body: body})
    })

    if (response.ok) {
        const editedAnnotation = await response.json();
        await dispatch(actionEditAnnotation(editedAnnotation))
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





const initialState = {
    allAnnotations: {},
    oneAnnotation: {}
};

export const annotationReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        // case GET_ALL_ANNOTATIONS: {
        //     newState = {}
        //     action.trackId.Annotations.forEach(annotation => {
        //         newState[annotation.id] = annotation
        //     });
        //     return newState
        // }
        case GET_ALL_ANNOTATIONS: 
            let annotationState = {}
            newState = { ...state, allAnnotations: {...state.allAnnotations}}
            console.log('GET_ALL_ANNOTATIONSACTION', action)
            action.payload.annotations.forEach(annotation => {
                annotationState[annotation.id] = annotation
            })
            newState.allAnnotations = annotationState
            return newState
        

        case GET_ONE_ANNOTATION:
            newState = {...state, oneAnnotation: {...state.oneAnnotation}}
            newState.oneAnnotation = {...action.annotation}
            return newState


        case CREATE_ANNOTATION: {
            newState = {...state}
            newState[action.annotation.id] = action.annotation
            return newState
        }
        case EDIT_ANNOTATION: {
            newState = {...state}
            newState[action.annotation.id] = action.annotation
            return newState
        }
        case DELETE_ANNOTATION: 
            newState = {...state, allAnnotations: {...state.allAnnotations}}
            // console.log('DELETE ANNOTATION', action)
            delete newState.allAnnotations[action.annotation]
            return newState
        
        default:
            return state
    }
}

export default annotationReducer
