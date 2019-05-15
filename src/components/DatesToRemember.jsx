import React from 'react';
import TrackVisibility from 'react-on-screen';
import { AgeFromDateString } from 'age-calculator';
import CountUp from 'react-countup';

// page components
import ParallaxBreak from './ParallaxBreak';
import Footer from './Footer';

const DatesPage = () => (
  <div className="appear-animate">
    <div className="page" id="top">
      <section className="page-section bg-light" data-background="" id="home">
        <div className="relative container">
          <div className="home-content">
            <div class="home-text">
              <div class="hs-cont">
                <div class="hs-wrap red">
                  <div class="hs-line-11 font-alt mb-10">
                    Count Down
                  </div>
                  <br />
                  <TrackVisibility partialVisibility>
                    {({isVisible}) => (
                      <div class="hs-line-16 no-transp font-alt mb-10">
                        { isVisible ? <CountUp start={0} end={new AgeFromDateString('1991-11-19').age} /> : 0}
                      </div>
                    )}
                  </TrackVisibility>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ParallaxBreak type="universe" size="500px" height="13px" />
      <Footer />
    </div>
  </div>
);

export default DatesPage;