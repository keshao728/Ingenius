import React from 'react';
import { NavLink } from 'react-router-dom';
import './AllTrackNav.css'
import { useSelector } from 'react-redux';
// import alltracklogo from './NavImage/alltracklogo.png';
import logo from './NavImage/logo.png';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';

const AllTrackNav = () => {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    let sessionLinks2;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="main-nav-list-1-track" >
                FEATURED
                </div>

                <div className="main-nav-list-1-track" >
                CHARTS
                </div>

                <div className="main-nav-list-2-track" >
                VIDEOS
                </div>

                <div className="main-nav-list-1-track" >
                Promote
                </div>

                <div className="main-nav-list-1-track" >
                Forms
                </div>

                <div className="main-nav-list-1-track" >
                Add a Song
                </div>
            </>
        )
        sessionLinks2 = (
        <div className='main-nav-list-alltrack-right'>
            <div className='main-nav-list-2-track' >
                FORUMS
            </div>
            <div className='main-nav-list-2-track' >
                FEED
            </div>
            <div className='main-nav-list-2-track' >
                ME
            </div>
            <div className='main-nav-list-2-track' >
                MESSAGES
            </div>
            <div className='main-nav-list-2-track' >
                EARN IQ
            </div>
            <div className='main-nav-list-2-track' >
                0 IQ
                {/* need to setup model where account and viewprofile and signout as option , viewprofile need to redirect to profile page and signout just need to signout */}
            </div>
        </div>
        )
    } else {
        // ADD LINK TO PROMOTE MUSIC PAGE
        sessionLinks = (
            <>
                <div className="main-nav-list-1-track" >
                FEATURED
                </div>

                <div className="main-nav-list-1-track" >
                CHARTS
                </div>

                <div className="main-nav-list-2-track" >
                VIDEOS
                </div>

                <div className="main-nav-list-1-track" >
                Promote
                </div>
            </>
        )
        sessionLinks2 = (
        <div className='main-nav-list'>
            {/* FORCE USER TO SIGN IN */}
            <div className='main-nav-list-4' id='action-nav-links'>
            <SignUpForm />
            </div>
        </div>
        )
    }
  return (
    <div>
        <div className='survey'>
            <div className='work_in_progress'>
            🚧  The new song page is a work in progress! We need your help to continue improving contributor features. Take our survey 🚧
            </div>
        </div>
        <div className="main-nav-alltrack">
            <div className='main-nav-alltrack-container'>
                <div className="main-nav-list-alltrack-left">
                    <div className='site-logo' id="navs">
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <img id="icon" src={logo} alt="Logo"></img>
                        </NavLink>
                    </div>
                    {sessionLinks}
                </div>
                <div>
                    {sessionLinks2}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllTrackNav;
