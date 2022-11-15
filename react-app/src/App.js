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
import CreateTrack from './components/TrackForm';

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
      <NavBar />
      <ActionNav />


      <Switch>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        <Route path='/tracks' exact={true}>
          <AllTracks />
        </Route>

        <Route path='/tracks/:trackId'>
          <AllComments />
          <TrackInfo />
        </Route>

        <Route exact path='/tracks/new'>
          <CreateTrack />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
