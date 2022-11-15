import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActionNav.css'
import { useSelector } from 'react-redux';

const ActionNav = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    // ADD LINK TO ADD A SONG
    sessionLinks = (
      <div className='main-nav-list'>
        <NavLink to={`/tracks/new`}>
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
        <div className="main-nav-list-1" id='action-nav-links'>
          FEATURED
        </div>

        <div className="main-nav-list-2" id='action-nav-links'>
          CHARTS
        </div>

        <div className="main-nav-list-3" id='action-nav-links'>
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
