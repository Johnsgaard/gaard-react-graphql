import React from 'react';
import { Link } from 'react-router-dom';

import MyImage from '../images/surf_black-min.png';

const Error = () => (
  <section className="page-section bg-dark bg-red" data-background="" id="home">
      <div className="relative container">
          <div className="home-content">
            <div class="home-text">
              <div class="hs-cont">
                <div class="hs-wrap">
                  <div class="hs-line-11 font-alt mb-10">
                    Surfing around?
                  </div>
                  <br />
                  <div class="hs-line-16 no-transp font-alt mb-10">
                      The page you are looking for may be under construction.
                  </div>
                  <br />
                  <p class="hs-line-8 no-transp mb-10">
                      Please go back to my <Link to="/">HOME PAGE</Link> to catch some better waves.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-6 col-lg-offset-3">
            <img src={MyImage} className="polaroid" alt=""/>
          </div>
      </div>
  </section>
);

export default Error;
