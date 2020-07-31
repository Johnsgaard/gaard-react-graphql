import React from 'react';
import { Link } from 'react-router-dom';

import SurfsOut from '../images/SurfsOut.JPG';

const Error = () => (
  <section
    className="home-section bg-dark-alfa-30"
    id="home"
    style={{
      backgroundImage: `url(${SurfsOut})`,
      padding: '0px',
      height: '99vh',
    }}
  >
      <div className="relative container" style={{ height: '100vh' }}>
          <div className="home-content">
            <div className="home-text">
              <div className="hs-cont">
                <div className="hs-wrap">
                  <div className="text-left hs-line-7 mb-40 mb-xs-10 noletterspace">
                    Surfing around?
                  </div>
                  <br />
                  <div className="text-left hs-line-10 no-transp font-alt mb-10">
                      The page you are looking for may be under construction.
                  </div>
                  <br />
                  <p className="text-left hs-line-10 font-alt no-transp mb-10">
                      Please go back to my <Link to="/">HOME PAGE</Link> to catch some better waves.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
      </div>
  </section>
);

export default Error;
