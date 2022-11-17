import { createPortal } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import trackReducer from './tracks';
import commentReducer from './comments';
import annotationReducer from './annotations';
// import voteReducer from './votes';

const rootReducer = combineReducers({
  session,
  tracks: trackReducer,
  comments: commentReducer,
  annotations: annotationReducer,
  // upvote: voteReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
