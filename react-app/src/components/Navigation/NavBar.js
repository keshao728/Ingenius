
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import logo from './NavImage/logo.png';
import './NavBar.css'
import { useSelector } from 'react-redux';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      //Signed in user - profile pic and drop down(logout button + view profile)
      <div class='right-nav' id="navs">
        <img class='profile-pic' src="https://drive.google.com/uc?export=view&id=1e6AIQpUAr0_HcNJNaptcQAHEdO5aib5k"
          alt="Default Profile"></img>
        {/* ADD A DROP DOWN HERE */}
        <div>
          <LogoutButton />
        </div>
      </div>
    )
  } else {
    //Not signed in user - Sign in / Log In
    sessionLinks = (

      <div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <nav>
      <div className='full-navigation'>
        <div class="mt"></div>
        <div class='left-nav' id="navs">
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id="icon" src={logo} alt="Logo"></img>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
