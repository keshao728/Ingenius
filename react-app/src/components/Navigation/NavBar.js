import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import logo from './NavImage/logo.png';
import './NavBar.css'
import { useSelector } from 'react-redux';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';


const NavBar = () => {
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
  if (sessionUser) {
    sessionLinks = (
      //Signed in user - profile pic and drop down(logout button + view profile)
      <div className='session-right-nav' id="navs">
        <img
          onClick={openMenu}
          className='profile-pic'
          src="https://drive.google.com/uc?export=view&id=1e6AIQpUAr0_HcNJNaptcQAHEdO5aib5k"
          alt="Default Profile"
        >
        </img>

        {showMenu && (
          <div className='user-dropdown-menu'>
            <div>ACCOUNT</div>
            <div>
              <NavLink to={`/users/${sessionUser.id}`}>
                <button className='drop-down-button'>
                  View Profile
                </button>
              </NavLink>
            </div>
            <div>
              <div className='drop-down-button'>
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
            <img id="icon" src={logo} alt="Logo"></img>
          </NavLink>
        </div>

        {/* if not logged in, these will show  */}
        {!sessionUser && (
          <div className='right-nav'>
            <div>
              <SignUpForm />
            </div>
            <div>
              <LoginForm />
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
