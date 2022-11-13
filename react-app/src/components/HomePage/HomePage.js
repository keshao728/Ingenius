import React from 'react';
import andrew from "./HomePageImage/andrew.png"
import kelly from "./HomePageImage/kelly.png"
import schaeffer from "./HomePageImage/schaeffer.png"
import simon from "./HomePageImage/simon.png"
import fries from "./HomePageImage/Fries.png"
import './HomePage.css'

const HomePage = () => {




  return (
    // FEATURES - ALL PLACEHOLDERS RN!!!!!!!!!
    <div>
      <div className="featured-page">
        <div className="top-feature">
          <div className="top-feature-left">
            <div className="top-feature-news">
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
      <div className="chart-page">
        <div className="chart-heading">CHARTS</div>
        <div className="all-tracks">
          <div className="individual-tracks">
            <div className="track-num">
              1
            </div>
            <div className="track-cover-name">
              <div>
                <img id="track-cover" src={kelly} alt="Logo"></img>
              </div>
              <div className="track-name-lyric">
                <div className="track-name">
                  Track Name
                </div>
                <div className="track-lyric">
                  LYRICS
                </div>
              </div>
            </div>
            <div className="track-artist">
              Artist Name
            </div>

          </div>
          <div className="individual-tracks">
            <div className="track-num">
              2
            </div>
            <div className="track-cover-name">
              <div>
                <img id="track-cover" src={schaeffer} alt="Logo"></img>
              </div>
              <div className="track-name-lyric">
                <div className="track-name">
                  Track Name
                </div>
                <div className="track-lyric">
                  LYRICS
                </div>
              </div>
            </div>
            <div className="track-artist">
              Artist Name
            </div>

          </div>


          <div className="individual-tracks">
            <div className="track-num">
              3
            </div>
            <div className="track-cover-name">
              <div>
                <img id="track-cover" src={simon} alt="Logo"></img>
              </div>
              <div className="track-name-lyric">
                <div className="track-name">
                  Track Name
                </div>
                <div className="track-lyric">
                  LYRICS
                </div>
              </div>
            </div>
            <div className="track-artist">
              Artist Name
            </div>

          </div>

          <div className="individual-tracks">
            <div className="track-num">
              4
            </div>
            <div className="track-cover-name">
              <div>
                <img id="track-cover" src={andrew} alt="Logo"></img>
              </div>
              <div className="track-name-lyric">
                <div className="track-name">
                  Track Name
                </div>
                <div className="track-lyric">
                  LYRICS
                </div>
              </div>
            </div>
            <div className="track-artist">
              Artist Name
            </div>
          </div>

          <div className="track-button">
            <button className="track-load-more">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>

      {/* VIDEOS - ALL PLACEHOLDERS RN!!!!!!!!! */}
      <div class="video-page">
        <div class="video-wrapper">
          <div class="video-title">
            VIDEOS
          </div>
          <div class="video-series">
            GENIUS ORIGINAL SERIES
          </div>

          <div class="video-verified">
            <div>
              <iframe class="video"
              //IT'S AUTOPLAYING!!! STAHP IT
                src='//players.brightcove.net/4863540648001/S1ZcmcOC1x_default/index.html?videoId=6315238407112' width="850"
                height="480" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
            </div>
            <div class="video-right">
              <div class="video-right-verified">
                VERIFIED
              </div>
              <div class="video-verified-wrapper">
                <div class="video-verified-title">
                  Chlöe Breaks Down The Meaning of “For The Night”
                </div>
                <div class="video-verified-description">
                  Learn about the song’s lyrics on the latest episode of ‘Verified.’
                </div>

                <div class="video-verified-author-date">
                  <div class="video-verified-author">
                    by ButterflyHoney /
                  </div>

                  <div class="top-feature-date">
                    Nov 9 2022
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="video-button">
            <button class="video-load-more">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>










    </div>



  )
}

export default HomePage;
