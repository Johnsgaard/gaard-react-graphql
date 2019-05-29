import React from 'react';
import { Link } from 'react-router-dom';

import MyImage from '../images/surf_black-min.png';

const Error = () => (
  <section className="page-section bg-dark bg-red" data-background="" id="home">
      <div className="relative container">
          <div className="home-content">
            <div className="home-text">
              <div className="hs-cont">
                <div className="hs-wrap">
                  <div className="hs-line-11 font-alt mb-10">
                    Surfing around?
                  </div>
                  <br />
                  <div className="hs-line-16 no-transp font-alt mb-10">
                      The page you are looking for may be under construction.
                  </div>
                  <br />
                  <p className="hs-line-8 no-transp mb-10">
                      Please go back to my <Link to="/">HOME PAGE</Link> to catch some better waves.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="hs-wrap" style={{ border: 'none' }}>
            <img src={MyImage} className="polaroid" alt=""/>
          </div>
      </div>
  </section>
);

export default Error;
