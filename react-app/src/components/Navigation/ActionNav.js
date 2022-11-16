import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { HashLink } from 'react-router-hash-link';
import './ActionNav.css'

const ActionNav = (props) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='main-nav-list'>
        <NavLink to={`/tracks/new`} style={{ textDecoration: 'none' }}>
          <div className='main-nav-list-4' id='action-nav-links'>
            ADD A SONG
          </div>
        </NavLink>
      </div>
    )
  } else {
    // ADD LINK TO PROMOTE MUSIC PAGE
    sessionLinks = (
      <div className='main-nav-list'>
        {/* FORCE USER TO SIGN IN */}
        <div className='main-nav-list-4' id='action-nav-links'>
          PROMOTE YOUR MUSIC
        </div>
      </div>
    )
  }

  return (
    <div className="main-nav">
      <div className="main-nav-list">
        <div
          className="main-nav-list-1"
          id='action-nav-links'
          onClick={(props.featureRefScroll)}
        >
          FEATURED
        </div>

        <div
          className="main-nav-list-2"
          id='action-nav-links'
          onClick={(props.chartsRefScroll)}>
          CHARTS
        </div>

        <div
        className="main-nav-list-3"
        id='action-nav-links'
        onClick={(props.videoRefScroll)}
        >
          VIDEOS
        </div>
        <div>
          {sessionLinks}
        </div>
      </div>
    </div>
  )
}

export default ActionNav;
