const GET_ALL_ANNOTATIONS = 'tracks/getAllAnnotations';

const GET_ONE_ANNOTATION = 'tracks/getOneAnnotation';

const GET_USER_ANNOTATIONS = 'tracks/getUserAnnotations';

const CREATE_ANNOTATION = 'tracks/createAnnotation';

const EDIT_ANNOTATION = 'tracks/editAnnotation';

const DELETE_ANNOTATION = 'tracks/deleteAnnotation';


//actions


//get all annotations

const actionGetAnnotations = (trackId) => {
    return {
        type: "GET_ALL_ANNOTATIONS",
        trackId
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

const actionDeleteAnnotation = (commendId) => {
    return {
        type: "DELETE_ANNOTATION",
        commendId
    }
}




//thunks

//get all annotations

export const getAllAnnotations =(trackId) => async (dispatch) => {
    const response = await csrfFetch(`/api/tracks/${trackId}/annotations`)
    // const response = await csrfFetch(`/api/annotations`)

    if (response.ok) {
        const annotations = await response.json();
        await dispatch(actionGetAnnotations(annotations));
    }
}



//create annotation

export const createAnnotation = ({trackId, annotation}) => async (dispatch) => {
    const response = await csrfFetch(`/api/tracks/${trackId}/annotations`, {
    // const response = await csrfFetch(`/api/annotations`, {
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
    const response = await csrfFetch(`/api/annotations/${annotationId}`, {
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
    const response = await csrfFetch(`/api/annotations/${annotationId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        const deletedAnnotation = await response.json();
        await dispatch(actionDeleteAnnotation(annotationId));
        return deletedAnnotation
    }
}





const initialState = {};

export const annotationReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_ANNOTATIONS: {
            newState = {}
            action.trackId.Annotations.forEach(annotation => {
                newState[annotation.id] = annotation
            });
            return newState
        }
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
        case DELETE_ANNOTATION: {
            newState = {...state}
            delete newState[action.annotation.id]
            return newState
        }
        default:
            return state
    }
}
