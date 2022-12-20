import ReactPlayer from 'react-player'

// import React, { useRef } from 'react';
// import andrew from "./HomePageImage/andrew.png"
import akim from "./HomePageImage/akim.png"
// import kelly from "./HomePageImage/kelly.png"
import keshao from "./HomePageImage/keshao.png"
import schaeffer from "./HomePageImage/schaeCat.png"
import simon from "./HomePageImage/simon.png"
// import fries from "./HomePageImage/devs.png"
import feature1 from "./HomePageImage/feature1.png"
import feature2 from "./HomePageImage/feature2.png"
import feature3 from "./HomePageImage/feature3.png"
import feature4 from "./HomePageImage/feature4.png"
import feature5 from "./HomePageImage/feature5.png"
// import videoImg from "./HomePageImage/videoImg.jpg"
import defaultalbum2 from './HomePageImage/defaultalbum2.png';

// import vidplay from "./HomePageImage/vidplay.png"
import NavBar from '../Navigation/NavBar';
import ActionNav from '../Navigation/ActionNav';


import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { getAllTracks } from '../../store/tracks';

import './HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const [showTracks, setShowTracks] = useState(5)

  //TRACKS
  const tracks = useSelector(state => state.tracks.allTracks)
  const allTracks = Object.values(tracks)

  //FEATURE REF
  //we want ref here bc it holds the ele we wanna scroll to
  // const featureRef = useRef(null)

  //references da ref we wanna scroll to
  // const featureRefScroll = (e) => {
  //   e.preventDefault();
  //   featureRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  //CHARTS REF
  // const chartsRef = useRef(null)

  // const chartsRefScroll = (e) => {
  //   e.preventDefault();
  //   chartsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  //VIDEO REF
  // const videoRef = useRef(null)

  // const videoRefScroll = (e) => {
  //   e.preventDefault();
  //   videoRef.current.scrollIntoView({ behavior: "smooth" });
  // }


  // const devRefScroll = (e) => {
  //   e.preventDefault();
  //   devRef.current.scrollIntoView({ behavior: "smooth" });
  // }
  // useEffect(()=> {
  //   return ()=> videoRandomizer
  // })
  const videoRandomizer = () => {
    let randomVideo = {
      verified: {
        cat: 'VERIFIED',
        title: 'Chlöe Breaks Down The Meaning of “For The Night”',
        description: "Learn about the song’s lyrics on the latest episode of ‘Verified.’",
        author: 'by ButterflyHoney /',
        date: 'Nov 9 2022',
        video: 'https://www.youtube.com/watch?v=KH7_PFZgPn4'
        // light={videoImg}
      },
      between: {
        cat: 'BETWEEN THE LINES',
        title: "Vin Diesel & Ludacris Explain 'Fast & Furious' Lyrical References",
        description: "The F9 stars dicussed the bars that reference the film franchise",
        author: 'Rahel Bereyes /',
        date: 'Nov 16 2022',
        video: 'https://www.youtube.com/watch?v=q5Mqa3GZeog'
      },
      irl: {
        cat: 'IRL',
        title: 'H.E.R Talks Black Music Icons & Cooks Authentic Filipino Dishes',
        description: 'H.E.R. reflects on her upbringing in a mixed ethnic household and her career',
        author: 'Rob Markman /',
        date: 'Feb 20 2020',
        video: 'https://www.youtube.com/watch?v=XL8C4tnO8Jk'
      },
      open: {
        cat: 'OPEN MIC',
        title: 'Dvsn Performs "If I Get Caught" Live',
        description: "Watch him perform the song on the latest episode of ‘Open Mic.’",
        author: 'ButterflyHoney /',
        date: 'Sep 1 2022',
        video: 'https://www.youtube.com/watch?v=-Qsh2zbT-1Q'
      },
      decon: {
        cat: 'DECONSTRUCTED',
        title: 'The Making Of BTS - Dynamite With David Stewart',
        description: 'UK Producer Breaks Down How The Song Was Made',
        author: 'Ndeye Thioubou /',
        date: 'Nov 18 2020',
        video: 'https://www.youtube.com/watch?v=qBCM1Fy-ByY'
      }
    }
    const entries = Object.entries(randomVideo)
    const randoEntry = Object.values(entries[Math.floor(Math.random() * entries.length)])[1]
    // console.log('0000000000000000000000000000000000000000000',randoEntry)
    return (
      <div className="video-wrapper">
        <div className="video-title">
          VIDEOS
        </div>
        <div className="video-series">
          INGENIUS ORIGINAL SERIES
        </div>

        <div className="video-verified">
          <div>
            <ReactPlayer
              width="830px"
              height="480px"
              // playIcon={vidplay}
              // light={videoImg}
              // config={{
              //   youtube: {
              //     playerVars: { showinfo: 0 }
              //   }
              // }}
              url={randoEntry.video}
            // react-player__preview={videoImg}
            />

            {/* <iframe className="video"
              //IT'S AUTOPLAYING!!! STAHP IT
              src='//players.brightcove.net/4863540648001/S1ZcmcOC1x_default/index.html?videoId=6315238407112' width="850"
              height="480" frameborder="0" allow="fullscreen" allowfullscreen></iframe> */}
          </div>
          <div className="video-right">
            <div className="video-right-verified">
              {randoEntry.cat}
            </div>
            <div className="video-verified-wrapper">
              <div className="video-verified-title">
                {randoEntry.title}
              </div>
              <div className="video-verified-description">
                {randoEntry.description}
              </div>

              <div className="video-verified-author-date">
                <div className="video-verified-author">
                  {randoEntry.author}
                </div>

                <div className="top-feature-date">
                  {randoEntry.date}
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <div className="video-button">
          <button className="video-load-more">
            LOAD MORE
          </button>
        </div> */}
      </div>
    )
  }


  useEffect(() => {
    dispatch(getAllTracks())
      .then(() => dispatch(getAllTracks()))
      // return (() => dispatch(resetData()))
      .then(() => setIsLoaded(true))
  }, [dispatch])



  return isLoaded && (
    // FEATURES - ALL PLACEHOLDERS RN!!!!!!!!!
    <div>
      <NavBar />
      <ActionNav
      // featureRefScroll={featureRefScroll}
      // chartsRefScroll={chartsRefScroll}
      // videoRefScroll={videoRefScroll}
      // devRefScroll={devRefScroll}
      />
      {/* <div className="featured-page" id="featured-page-id" ref={featureRef}> */}
      <div className="featured-page" id="featured">

        <div className="top-feature">
          <div className="top-feature-left">
            <div className="top-feature-news" >
              NEWS
            </div>
            <a className="dev-text-link" href="https://genius.com/a/gucci-mane-remembers-takeoff-and-other-fallen-rappers-on-new-song-letter-to-takeoff" target="_blank" rel="noreferrer">

              <div className="top-feature-news-wrapper">
                <div className="top-feature-title">
                  Gucci Mane Remembers Takeoff and Other Fallen Rappers On New Song “Letter To Takeoff”
                </div>
                <div className="top-feature-description">
                  Gucci also pays respect to Shawty Lo, Young Dolph, and PnB Rock, among others.
                </div>

                <div className="top-feature-author-date">
                  <div className="top-feature-author">
                    by Ken Partridge /
                  </div>

                  <div className="top-feature-date">
                    Nov 16 2022
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="top-feature-right">
            <img id="fries" src={feature1} alt="Logo"></img>
          </div>
        </div>
        <div className="bottom-feature">
          <div className="bottom-feature-1">
            <div id="dev">NEWS</div>
            <a className="dev-text-link" href="https://genius.com/a/cigarettes-after-sex-pine-for-their-ex-on-new-song-pistol" target="_blank" rel="noreferrer">
              <div className="dev-text">
                Cigarettes After Sex Pine For Their Ex On New Song “Pistol”
              </div>
              <div className='top-bottom-feature'>
                <div className="top-feature-author-date2">
                  <div className="top-feature-author">
                    by Ken Partridge /
                  </div>

                  <div className="top-feature-date">
                    Nov 16 2022
                  </div>
                </div>
                <img id="individual-fries" src={feature2} alt="Logo"></img>
              </div>
            </a>
          </div>
          <div className="bottom-feature-3">
            <div id="dev">NEWS</div>
            <a className="dev-text-link" href="https://genius.com/a/roddy-ricch-showcases-his-chemistry-with-lil-durk-on-new-single-twin" target="_blank" rel="noreferrer">
              <div className="dev-text">
                Roddy Ricch Showcases His Chemistry With Lil Durk On New Single “Twin”
              </div>
              <div className='top-bottom-feature'>
                <div className="top-feature-author-date2">
                  <div className="top-feature-author">
                    by Ken Partridge /
                  </div>

                  <div className="top-feature-date">
                    Nov 15 2022
                  </div>
                </div>
                <img id="individual-fries" src={feature4} alt="Logo"></img>
              </div>
            </a>
          </div>
          <div className="bottom-feature-4">
            <div id="dev">NEWS</div>
            <a className="dev-text-link" href="https://genius.com/a/nas-celebrates-his-home-borough-of-queens-on-new-song-thun" target="_blank" rel="noreferrer">
              <div className="dev-text">
                Nas Celebrates His Home Borough of Queens On New Song “Thun”
              </div>
              <div className='top-bottom-feature'>
                <div className="top-feature-author-date2">
                  <div className="top-feature-author">
                    by Ken Partridge /
                  </div>

                  <div className="top-feature-date">
                    Nov 14 2022
                  </div>
                </div>
                <img id="individual-fries" src={feature5} alt="Logo"></img>
              </div>
            </a>
          </div>
          <div className="bottom-feature-2">
            <div id="dev">NEWS</div>
            <a className="dev-text-link" href="https://genius.com/a/rihanna-will-fight-until-the-end-on-new-black-panther-wakanda-forever-song-born-again" target="_blank" rel="noreferrer">
              <div className="dev-text">
                Rihanna Will Fight Until The End On New ‘Black Panther: Wakanda Forever’ Song “Born Again”
              </div>
              <div className='top-bottom-feature'>
                <div className="top-feature-author-date2">
                  <div className="top-feature-author">
                    by Leah Degrazia /
                  </div>

                  <div className="top-feature-date">
                    Nov 11 2022
                  </div>
                </div>
                <img id="individual-fries" src={feature3} alt="Logo"></img>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CHARTS - ALL PLACEHOLDERS RN!!!!!!!!! */}
      {/* <div className="chart-page" id="chart-id" ref={chartsRef}> */}
      <div className="chart-page" id="charts">

        <div className="chart-heading">CHARTS</div>
        {allTracks.slice(0, showTracks).map((track,index) => {
          return (
            <div key={track.id} className="all-tracks">
              <NavLink class="tracks-navlink" to={`/tracks/${track.id}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="individual-tracks">
                  <div className="track-num">
                    {index+1}
                  </div>
                  <div className="track-cover-name">
                    <div>
                      <img id="track-cover" src={track.track_art?track.track_art : defaultalbum2} alt="Logo"></img>
                    </div>
                    <div className="track-name-lyric">
                      <div className="track-name">
                        {track.track_title}
                      </div>
                      <div className="track-lyric">
                        LYRICS
                      </div>
                    </div>
                  </div>
                  <div className="track-artist">
                    {track.artist}
                  </div>
                  <div className="track-views">
                    <i class="fa-regular fa-eye"></i>
                    {Math.floor(Math.random() * (100 * 10 - 1 * 10) + 1 * 10) / (1 * 10)}k
                  </div>
                </div>

              </NavLink>
            </div>
          )
        })}

        <div className='load-track-container'>

          {allTracks.length > showTracks ? <div className="track-button"><button className="track-load-more" onClick={() => setShowTracks(showTracks + 5)}>
            LOAD MORE
          </button></div> : ''}


          {showTracks > 5 ? <div className="track-button"><button className="track-load-more" onClick={() => setShowTracks(showTracks - 5)}>
            SHOW LESS
          </button></div> : ''}

        </div>

      </div>

      {/* VIDEOS - ALL PLACEHOLDERS RN!!!!!!!!! */}
      {/* <div className="video-page" ref={videoRef} id='testing'> */}
      <div className="video-page" id='video'>
        {videoRandomizer()}
      </div>
      {/* <div className="video-page" id='video'>

        <div className="video-wrapper">
          <div className="video-title">
            VIDEOS
          </div>
          <div className="video-series">
            INGENIUS ORIGINAL SERIES
          </div>

          <div className="video-verified">
            <div>
              <ReactPlayer
                width="830px"
                height="480px"
                // playIcon={vidplay}
                light={videoImg}
                url="https://www.youtube.com/watch?v=KH7_PFZgPn4&ab_channel=Genius"
              // react-player__preview={videoImg}
              /> */}

      {/* <iframe className="video"
                //IT'S AUTOPLAYING!!! STAHP IT
                src='//players.brightcove.net/4863540648001/S1ZcmcOC1x_default/index.html?videoId=6315238407112' width="850"
                height="480" frameborder="0" allow="fullscreen" allowfullscreen></iframe> */}
      {/* </div>
            <div className="video-right">
              <div className="video-right-verified">
                VERIFIED
              </div>
              <div className="video-verified-wrapper">
                <div className="video-verified-title">
                  Chlöe Breaks Down The Meaning of “For The Night”
                </div>
                <div className="video-verified-description">
                  Learn about the song’s lyrics on the latest episode of ‘Verified.’
                </div>

                <div className="video-verified-author-date">
                  <div className="video-verified-author">
                    by ButterflyHoney /
                  </div>

                  <div className="top-feature-date">
                    Nov 9 2022
                  </div>
                </div>
              </div>

            </div>
          </div> */}
      {/* <div className="video-button">
            <button className="video-load-more">
              LOAD MORE
            </button>
          </div> */}





      {/* <div className="latest-page" ref={devRef}> */}

      <div className="latest-page">
        <div className="latest-wrapper">
          <div className="latest-title">
            FULL STACK DEVS
          </div>
          <div className="latest-des">
            HOVER OVER TO SEE MORE INFO
          </div>
        </div>

        <div className="latest-items" id="devs">

          <div className="bottom-latest">


            <figure className="bottom-latest-1">
              <img src={simon} alt="Logo"></img>
              <figcaption>

                <h3>
                  Simon Tan
                </h3>
                <div className="dev-socials">
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://github.com/SimonMTan" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i></a>
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://www.linkedin.com/in/simonmtan/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="bottom-latest-2">
              <img src={keshao} alt="Logo"></img>
              <figcaption>

                <h3>
                  Kelly Shao
                </h3>
                <div className="dev-socials">
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://github.com/keshao728" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i></a>
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://www.linkedin.com/in/keyingshao/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="bottom-latest-3">
              {/* <div id="latest-dev">DEV</div> */}
              <img src={akim} alt="Logo"></img>
              <figcaption>

                <h3>
                  Andrew Kim
                </h3>
                <div className="dev-socials">
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://github.com/k-rewd" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i></a>
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://www.linkedin.com/in/andrew-k-474479123/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="bottom-latest-4">
              {/* <div id="latest-dev">DEV</div> */}
              <img src={schaeffer} alt="Logo"></img>
              <figcaption>

                <h3>
                  Schaeffer Ahn
                </h3>
                <div className="dev-socials">
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://github.com/Schaeffy" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i></a>
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <p className="dev-socials-links">
                      <a href="https://github.com/Schaeffy" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>




          </div>
        </div>
        {/* <div className="latest-button">
          <button className="latest-load-more">
            LOAD MORE
          </button>
        </div> */}
      </div>


      <div className="home-footer">

        <div className="footer-inner">
          <div className="footer-message">
            INGENIUS is the world’s smallest collection of song lyrics and musical knowledge
          </div>

          <div className="footer-links">
            <ul className="footer-links-ul">
              <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer">
                  Free Music
                </a></li>
              <li>
                <a href="https://media.tenor.com/Y84Uql0KSwEAAAAd/oprah-winfrey.gif"
                  target="_blank"
                  rel="noreferrer">
                  Dont click this
                </a></li>
              <li>
                <a href="https://www.youtube.com/watch?v=HmZm8vNHBSU"
                  target="_blank"
                  rel="noreferrer">
                  Stop Piracy
                </a></li>
              <li><a href="https://github.com/keshao728/Genius"
                target="_blank"
                rel="noreferrer">
                Project Github
              </a></li>
            </ul>
          </div>

          <div className="footer-links">
            <ul className="footer-links-ul">
              <li>
                <a href="https://github.com/keshao728"
                  target="_blank"
                  rel="noopener noreferrer">
                  Kelly Shao
                </a>
              </li>
              <li>
                <a href="https://github.com/Schaeffy"
                  target="_blank"
                  rel="noopener noreferrer">
                  Schaeffer Anh
                </a>
              </li>
              <li>
                <a href="https://github.com/SimonMTan"
                  target="_blank"
                  rel="noopener noreferrer">
                  Simon Tan
                </a>
              </li>
              <li>
                <a href="https://github.com/k-rewd"
                  target="_blank"
                  rel="noopener noreferrer">
                  Andrew Kim
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>




    </div>



  )
}

export default HomePage;

// const devRefScroll = (e) => {
//   e.preventDefault();
//   devRef.current.scrollIntoView({ behavior: "smooth" });
// }
