import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import defaultpro from './NavImage/defaultpro.png';
import ingeniousLogo from './NavImage/ingeniousLogo.png';
import { useSelector } from 'react-redux';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const pfp = useSelector(state => state.session.user?.profile_img)
  console.log('PFP', pfp)
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
  if (sessionUser) {
    sessionLinks = (
      //Signed in user - profile pic and drop down(logout button + view profile)
      <div className='session-right-nav' id="navs">
        <img
          onClick={openMenu}
          className='profile-pic'
          src={pfp ? pfp : defaultpro}
          alt="Default Profile"
        >
        </img>

        {showMenu && (
          <div className='user-dropdown-menu'>
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
      </div >
    )
  }

  return (
    <nav>
      <div className='full-navigation'>
        <div className="empty-placeholder"></div>
        <div className='site-logo' id="navs">
          <NavLink to={`/`} exact={true} activeClassName='active'>
            <img id="icon" src={ingeniousLogo} alt="Logo"></img>
          </NavLink>
        </div>

        {/* if not logged in, these will show  */}
        {!sessionUser && (
          <div className='right-nav'>
            <div>
              <SignUpForm className="login-signup" />
            </div>
            <div>
              <LoginForm className="login-signup"/>
            </div>
          </div>
        )}
        <div className='session-right-nav'>
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
