import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ActionNav from './components/Navigation/ActionNav';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage/HomePage';
import AllTracks from './components/Tracks';
import AllComments from './components/Comments/comments';
import TrackInfo from './components/TrackInfo';
import Annotation from './components/Annotation/annotations';
import AnnotationForm from './components/AnnotationForm/AnnotationForm';
import CreateTrack from './components/TrackForm';
import AllTrackNav from './components/Navigation/AllTrackNav';
// import UserAnnotations from './components/UserProfile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>



      <Switch>
        <Route path='/' exact={true}>
          {/* <NavBar />
          <ActionNav /> */}
          <HomePage />
        </Route>

        <Route path='/users/:userId' exact={true} >
          <NavBar />
          <ActionNav />
          <User />
        </Route>

        <Route path='/tracks' exact={true}>
          <AllTracks />
        </Route>

        <Route path='/tracks/new'>
          <NavBar />
          <ActionNav />
          <CreateTrack />
        </Route>

        <Route exact path='/tracks/:trackId'>
          <AllTrackNav />
          <TrackInfo />
          <AnnotationForm />
          <Annotation />
          <AllComments />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
