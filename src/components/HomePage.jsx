import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TrackVisibility from "react-on-screen";

import Loader from "./Loader";

// images
import Logo from "../images/gaardicon.png";
import CowboyCohen from "../images/cowboyCohen.jpg";
import OceanScout from "../images/oceanScout.jpg";
import ElkFalls from "../images/elkFalls.jpg";
import CohenScooter from "../images/cohenScooter.jpg";
import KobberBday from "../images/kobberBday.jpg";
import ScoutHalloween from "../images/scoutHalloween.jpg";

const HomePage = () => {
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  const [pageScrolled, setPageScrolled] = useState(false);
  const images = [
    CowboyCohen,
    OceanScout,
    ElkFalls,
    CohenScooter,
    KobberBday,
    ScoutHalloween,
  ];

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setPageScrolled(true);
    } else {
      setPageScrolled(false);
    }
  };

  useEffect(() => {
    Promise.all(
      images.map(
        (src) =>
          new Promise((res) => {
            const image = new Image();
            image.onload = res;
            image.src = src;
          })
      )
    ).then(() => {
      setImagesLoaded(true);
    });

    // TODO: Probably need something to cancel the promises if we unmount
  }, [images]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div id="home" className="appear-animate homepage">
      <div className="page bg-gray-lighter" id="top">
        <div id="sticky-wrapper" className="sticky-wrapper">
          <nav
            className={`main-nav stick-fixed ${
              pageScrolled ? "small-height" : undefined
            }`}
          >
            <div className="container-fluid relative clearfix">
              <div className="nav-logo-wrap local-scroll">
                <a href="/">
                  <h1 className="victor">Johnsgaards</h1>
                </a>
              </div>
              <ul className="nav nav-tabs tpl-minimal-tabs animate">
                <li className="nav-item">
                  <a href="/joshua">Joshua Johnsgaard</a>
                </li>
                <li className="nav-item">
                  <a href="/rebecca">Rebecca Johnsgaard</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="main" className="col-sm-12 col-md-12 col-xs-12">
          <section className="page-section container-fluid">
            <div className="row">
              <div className="visibility-row">
                <div
                  className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated fadeInLeft`}
                >
                  <div className="post-prev-title font-alt">Cowboy Cohen</div>
                  <div className="post-prev-img">
                    <img src={CowboyCohen} alt="Cohen" />
                  </div>
                </div>
                <div
                  className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated fadeInLeft`}
                >
                  <div className="post-prev-title font-alt">
                    Scout by the ocean
                  </div>
                  <div className="post-prev-img">
                    <img src={OceanScout} alt="Scout" />
                  </div>
                </div>
              </div>
              <TrackVisibility once partialVisibility>
                {({ isVisible }) => (
                  <div className="visibility-row">
                    <div
                      className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated ${
                        isVisible ? "fadeInUp" : "fadeOutDown"
                      }`}
                    >
                      <div className="post-prev-title font-alt">
                        Kobber's 6th Birthday
                      </div>
                      <div className="post-prev-img">
                        <img src={KobberBday} alt="Kobber" />
                      </div>
                    </div>
                    <div
                      className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated ${
                        isVisible ? "fadeInUp" : "fadeOutDown"
                      }`}
                    >
                      <div className="post-prev-title font-alt">Elk Falls</div>
                      <div className="post-prev-img">
                        <img src={ElkFalls} alt="Elk Falls" />
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
              <TrackVisibility once partialVisibility>
                {({ isVisible }) =>
                  console.log(isVisible) || (
                    <div className="visibility-row">
                      <div
                        className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated ${
                          isVisible ? "fadeInUp" : "fadeOutUp"
                        }`}
                      >
                        <div className="post-prev-title font-alt">
                          Scout's first halloween
                        </div>
                        <div className="post-prev-img">
                          <img src={ScoutHalloween} alt="Scout" />
                        </div>
                      </div>
                      <div
                        className={`col-lg-6 col-sm-6 mb-140 mb-sm-100 mb-xs-40 wow animated ${
                          isVisible ? "fadeInUp" : "fadeOutUp"
                        }`}
                      >
                        <div className="post-prev-title font-alt">
                          Cohen flexing his scooter skills
                        </div>
                        <div className="post-prev-img">
                          <img src={CohenScooter} alt="Cohen" />
                        </div>
                      </div>
                    </div>
                  )
                }
              </TrackVisibility>
            </div>
          </section>
          <Footer hideSocials />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
