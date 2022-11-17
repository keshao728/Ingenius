import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { HashLink } from 'react-router-hash-link';
import './ActionNav.css'
// import {useRef} from 'react';
// import {useHistory} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const ActionNav = (props) => {
  const sessionUser = useSelector(state => state.session.user);
  // const History = useHistory();
  // const featureRef = useRef(null)

  // //references da ref we wanna scroll to
  // const featureRefScroll = (e) => {
  //   e.preventDefault();
  //   featureRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // //CHARTS REF
  // const chartsRef = useRef(null)

  // const chartsRefScroll = (e) => {
  //   e.preventDefault();
  //   chartsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // //VIDEO REF
  // const videoRef = useRef(null)

  // const videoRefScroll = (e) => {
  //   e.preventDefault();
  //   videoRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  // const navigatetohome = () => {
  //   History.push("/");
  //   props.videoRefScroll()
  // }

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
        <Link
          className="main-nav-list-1"
          id='action-nav-links'
          smooth to="/#featured"
          // onClick={(props.featureRefScroll)}
          // onClick={navigatetohome}
        >
          FEATURED
        </Link>

        <Link
          className="main-nav-list-2"
          id='action-nav-links'
          smooth to="/#charts">
          {/* // onClick={(props.chartsRefScroll)}> */}
          CHARTS
        </Link>

        <Link
        className="main-nav-list-3"
        id='action-nav-links'
        smooth to="/#video"
       // onClick={(props.videoRefScroll)
        >
          VIDEOS
        </Link>

        <Link
        className="main-nav-list-5"
        id='action-nav-links'
        smooth to="/#devs"
       // onClick={(props.videoRefScroll)
        >
          DEVS
        </Link>
        {/* </div>
        <div
        className="main-nav-list-5"
        id='action-nav-links'
        onClick={(props.devRefScroll)}
        >
          DEVS
        </div> */}
        <div>
          {sessionLinks}
        </div>
      </div>
    </div>
  )
}

export default ActionNav;

// </div>
// <div
// className="main-nav-list-5"
// id='action-nav-links'
// onClick={(props.devRefScroll)}
// >
//   DEVS
// </div>
