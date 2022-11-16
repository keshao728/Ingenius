import React, { useRef } from 'react';
import andrew from "./HomePageImage/andrew.png"
import kelly from "./HomePageImage/kelly.png"
import schaeffer from "./HomePageImage/schaeffer.png"
import simon from "./HomePageImage/simon.png"
import fries from "./HomePageImage/Fries.png"
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

  //TRACKS
  const tracks = useSelector(state => state.tracks.allTracks)
  const allTracks = Object.values(tracks)

  //FEATURE REF
  //we want ref here bc it holds the ele we wanna scroll to
  const featureRef = useRef(null)

  //references da ref we wanna scroll to
  const featureRefScroll = (e) => {
    e.preventDefault();
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //CHARTS REF
  const chartsRef = useRef(null)

  const chartsRefScroll = (e) => {
    e.preventDefault();
    chartsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //VIDEO REF
  const videoRef = useRef(null)

  const videoRefScroll = (e) => {
    e.preventDefault();
    videoRef.current.scrollIntoView({ behavior: "smooth" });
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
        featureRefScroll={featureRefScroll}
        chartsRefScroll={chartsRefScroll}
        videoRefScroll={videoRefScroll}
      />
      <div className="featured-page" id="featured-page-id" ref={featureRef}>
        <div className="top-feature">
          <div className="top-feature-left">
            <div className="top-feature-news" >
              NEWS
            </div>
            <div className="top-feature-news-wrapper">
              <div className="top-feature-title">
                What are the FRIES up to?
              </div>
              <div className="top-feature-description">
                Celebrate the McDonalds Fries by playing Valorant.
              </div>

              <div className="top-feature-author-date">
                <div className="top-feature-author">
                  by Kelly Shao /
                </div>

                <div className="top-feature-date">
                  Nov 8 2022
                </div>
              </div>
            </div>
          </div>

          <div className="top-feature-right">
            <img id="fries" src={fries} alt="Logo"></img>
          </div>
        </div>
        <div className="bottom-feature">
          <div className="bottom-feature-1">
            <div>

              <div id="dev">DEV</div>
              <div>
                Simon Tan - Da sleepy one-shot beast, piupiupiu
              </div>
            </div>
            <img id="individual-fries" src={simon} alt="Logo"></img>
          </div>
          <div className="bottom-feature-2">
            <div>
              <div id="dev">DEV</div>
              <div>
                Kelly Shao - This girl just won't get out of bed
              </div>
            </div>
            <img id="individual-fries" src={kelly} alt="Logo"></img>
          </div>
          <div className="bottom-feature-3">
            <div>

              <div id="dev">DEV</div>
              <div>
                Andrew Kim - Ditches teammate and Omen teleport on site by himself
              </div>
            </div>
            <img id="individual-fries" src={andrew} alt="Logo"></img>
          </div>
          <div className="bottom-feature-4">
            <div>
              <div id="dev">DEV</div>
              <div>
                Schaeffer Ahn - Big arms with tattoos, on Valo all day
              </div>
            </div>
            <img id="individual-fries" src={schaeffer} alt="Logo"></img>
          </div>
        </div>
      </div>

      {/* CHARTS - ALL PLACEHOLDERS RN!!!!!!!!! */}
      <div className="chart-page" id="chart-id" ref={chartsRef}>
        <div className="chart-heading">CHARTS</div>
        {allTracks.map((track) => {
          return (
            <div key={track.id} className="all-tracks">
              <NavLink class="tracks-navlink" to={`/tracks/${track.id}`}>
                <div className="individual-tracks">
                  <div className="track-num">
                    {track.id}
                  </div>
                  <div className="track-cover-name">
                    <div>
                      <img id="track-cover" src={track.track_art} alt="Logo"></img>
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
                </div>

              </NavLink>
            </div>
          )
        })}
        <div className="track-button">
          <button className="track-load-more">
            LOAD MORE
          </button>
        </div>
      </div>

      {/* VIDEOS - ALL PLACEHOLDERS RN!!!!!!!!! */}
      <div className="video-page" ref={videoRef}>
        <div className="video-wrapper">
          <div className="video-title">
            VIDEOS
          </div>
          <div className="video-series">
            GENIUS ORIGINAL SERIES
          </div>

          <div className="video-verified">
            <div>
              <iframe className="video"
                //IT'S AUTOPLAYING!!! STAHP IT
                src='//players.brightcove.net/4863540648001/S1ZcmcOC1x_default/index.html?videoId=6315238407112' width="850"
                height="480" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
            </div>
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
          </div>
          <div className="video-button">
            <button className="video-load-more">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>




      {/* LATEST - ALL PLACEHOLDERS RN!!!!!!!!! */}
      <div className="latest-page">
        <div className="latest-wrapper">
          <div className="latest-title">
            LATEST
          </div>
          <div className="latest-des">
            MOST RECENT NEWS
          </div>
        </div>

        <div className="latest-items">

          <div className="bottom-latest">


            <figure className="bottom-latest-1">
              {/* <div id="latest-dev">DEV</div> */}
              <img src={simon} alt="Logo"></img>
              <figcaption>

                <h3>
                  Simon Tan
                </h3>
                <div className="top-feature-author-date">
                  <p className="top-feature-author">
                    Github: <a href="https://github.com">Link</a>
                    <br></br>
                    LinkdIn: <a href="https://github.com">Link</a>
                  </p>
                </div>
              </figcaption>
            </figure>

            <figure className="bottom-latest-2">
              {/* <div id="latest-dev">DEV</div> */}
              <img src={kelly} alt="Logo"></img>
              <figcaption>

                <h3>
                  Kelly Shao
                </h3>
                <div className="top-feature-author-date">
                  <p className="top-feature-author">
                    Github: <a href="https://github.com">Link</a>
                    <br></br>
                    LinkdIn: <a href="https://github.com">Link</a>
                  </p>

                </div>
              </figcaption>
            </figure>

            <figure className="bottom-latest-3">
              {/* <div id="latest-dev">DEV</div> */}
              <img src={andrew} alt="Logo"></img>
              <figcaption>

                <h3>
                  Andrew Kim
                </h3>
                <div className="top-feature-author-date">
                  <p className="top-feature-author">
                    Github: <a href="https://github.com">Link</a>
                    <br></br>
                    LinkdIn: <a href="https://github.com">Link</a>
                  </p>

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
                <div className="top-feature-author-date">
                  <p className="top-feature-author">
                    Github: <a href="https://github.com">Link</a>
                    <br></br>
                    LinkdIn: <a href="https://github.com">Link</a>
                  </p>

                </div>
              </figcaption>
            </figure>




          </div>
        </div>
        <div className="latest-button">
          <button className="latest-load-more">
            LOAD MORE
          </button>
        </div>
      </div>


      <div className="footer">
        <div className="footer-message">
          Genius is the world’s biggest collection of song lyrics and musical knowledge
        </div>

      </div>
    </div>



  )
}

export default HomePage;
