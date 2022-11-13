import React from 'react';
import andrew from "./HomePageImage/andrew.png"
import kelly from "./HomePageImage/kelly.png"
import schaeffer from "./HomePageImage/schaeffer.png"
import simon from "./HomePageImage/simon.png"
import fries from "./HomePageImage/Fries.png"
import './HomePage.css'

const HomePage = () => {




  return (
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

  )
}

export default HomePage;
