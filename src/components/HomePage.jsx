import React from 'react';
import Footer from "./Footer";
import TrackVisibility from 'react-on-screen';

// images
import CowboyCohen from '../images/cowboyCohen.jpg';
import OceanScout from '../images/oceanScout.jpg';
import ElkFalls from '../images/elkFalls.jpg';
import CohenScooter from "../images/cohenScooter.jpg";
import KobberBday from "../images/kobberBday.jpg";
import ScoutHalloween from "../images/scoutHalloween.jpg";

const HomePage = () => (
<div className="appear-animate">
  <div className="page bg-gray-lighter" id="top">
    <div id="main">
        <div className="relative container-1400 pt-10 pt-lg-1">
          <div>
            <h1 className="font-alt">The Johnsgaard Family</h1>
          </div>
        </div>
      <section className="page-section pt-60 pt-lg-20 pt-xs-10 pb-0">
        <div className="relative container-fluid">
          <div className="row">
          <TrackVisibility partialVisibility once>
            {({isVisible}) => (
              <div>
                <div
                  className={`col-lg-6 col-sm-5 mt-lg-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInLeft' : 'fadeOutLeft'}`}
                >
                  <div className="post-prev-img">
                    <img src={CowboyCohen} alt="Cohen"/>
                  </div>
                  <div className="post-prev-title font-alt">
                    Cowboy Cohen
                  </div>
                </div>
                <div
                  className={`col-lg-6 col-sm-5 mt-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInRight' : 'fadeOutRight'}`}
                >
                  <div className="post-prev-img">
                    <img src={OceanScout} alt="Scout" />
                  </div>
                  <div className="post-prev-title font-alt">
                    Scout by the ocean
                  </div>
                </div>
              </div>
            )}
            </TrackVisibility>
            <TrackVisibility partialVisibility once>
            {({isVisible}) => (
              <div>
                <div
                  className={`col-lg-6 col-sm-5 mt-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInUp' : 'fadeOutDown'}`}
                >
                  <div className="post-prev-img">
                    <img src={KobberBday} alt="Kobber" />
                  </div>
                  <div className="post-prev-title font-alt">
                    Kobber's 6th Birthday
                  </div>
                </div>
                <div
                  className={`col-lg-6 col-sm-5 mt-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInUp' : 'fadeOutDown'}`}
                >
                  <div className="post-prev-img">
                    <img src={ElkFalls} alt="Elk Falls" />
                  </div>
                  <div className="post-prev-title font-alt">
                    Elk Falls
                  </div>
                </div>
              </div>
            )}
            </TrackVisibility>
            <TrackVisibility partialVisibility once>
              {({isVisible}) => (
                <div>
                  <div
                    className={`col-lg-6 col-sm-5 mt-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInUp' : 'fadeOutDown'}`}
                   >
                    <div className="post-prev-img">
                      <img src={ScoutHalloween} alt="Scout" />
                    </div>
                    <div className="post-prev-title font-alt">
                      Scout's first halloween
                    </div>
                  </div>
                  <div
                    className={`col-lg-6 col-sm-5 mt-140 mt-sm-100 mt-xs-40 mb-140 mb-sm-100 mb-xs-40 wow animated ${isVisible ? 'fadeInUp' : 'fadeOutDown'}`}
                  >
                    <div className="post-prev-img">
                      <img src={CohenScooter} alt="Cohen" />
                    </div>
                    <div className="post-prev-title font-alt">
                      Cohen flexing his scooter skills
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </section>
      <Footer hideSocials />
    </div>
  </div>
</div>
);

export default HomePage;
