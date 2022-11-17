import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './AllTrackNav.css'
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import singletrack from './NavImage/singletrack.png';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';
import { HashLink as Link } from 'react-router-hash-link';


const AllTrackNav = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    let sessionLinks;
    let sessionLinks2;

    if (sessionUser) {
        sessionLinks = (
            <>
                <Link className="main-nav-list-1-track" smooth to="/#featured"
                style={{ textDecoration: 'none' }} >
                Featured
                </Link>

                <Link className="main-nav-list-1-track" smooth to="/#charts"
                style={{ textDecoration: 'none' }}>
                Charts
                </Link>

                <Link className="main-nav-list-1-track" smooth to="/#video"
                style={{ textDecoration: 'none' }}>
                Videos
                </Link>

                <Link className="main-nav-list-1-track" smooth to="/#devs"
                style={{ textDecoration: 'none' }}>
                Devs
                </Link>

                {/* <div className="main-nav-list-1-track" >
                Forums
                </div> */}
                <NavLink to={`/tracks/new`} style={{ textDecoration: 'none' }}>
                <div className="main-nav-list-1-track" >
                Add A Song
                </div>
                </NavLink>
            </>
        )
        sessionLinks2 = (
        <div className='main-nav-list-alltrack-right'>
            {/* <div className='main-nav-list-2-track' >
                FORUMS
            </div>
            <div className='main-nav-list-2-track' >
                FEED
            </div> */}
            <div className='main-nav-list-2-track' onClick={openMenu}>
                ME
            </div>

            {showMenu && (
                <div className='user-dropdown-menu2'>
                    <div className='user-account-text'>ACCOUNT</div>
                    <div>
                    <NavLink to={`/users/${sessionUser.id}`}>
                        <button className='drop-down-button' id="drop-user-profile">
                        View Profile
                        </button>
                    </NavLink>
                    </div>
                    <div>
                    <div>
                        <LogoutButton className='drop-down-button'>
                        Sign Out
                        </LogoutButton>
                    </div>
                    </div>
                </div>
            )}
            {/* <div className='main-nav-list-2-track' >
                MESSAGES
            </div>
            <div className='main-nav-list-2-track' >
                EARN IQ
            </div>
            <div className='main-nav-list-2-track' >
                0 IQ
                {/* need to setup model where account and viewprofile and signout as option , viewprofile need to redirect to profile page and signout just need to signout */}
            {/* </div> */}
        </div>
        )
    } else {
        // ADD LINK TO PROMOTE MUSIC PAGE
        sessionLinks = (
            <>
                <Link className="main-nav-list-1-track" smooth to="/#featured"
                style={{ textDecoration: 'none' }} >
                Featured
                </Link>

                <Link className="main-nav-list-1-track" smooth to="/#charts"
                style={{ textDecoration: 'none' }}>
                Charts
                </Link>

                <Link className="main-nav-list-1-track" smooth to="/#video"
                style={{ textDecoration: 'none' }}>
                Videos
                </Link>

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
                    <div className='site-logo2' id="navs">
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <img className='icon2'id="icon" src={singletrack} alt="Logo"></img>
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
