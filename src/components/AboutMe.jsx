import React, { useEffect } from "react";
import { AgeFromDateString } from "age-calculator";
import MyImage from "../images/ScoutToss.jpg";
import { gsap } from "gsap";
import Typist from "react-text-typist";
import TrackVisibility from "react-on-screen";

const AboutMe = () => {
  const offsetMax = 200;
  const handleMouseMove = (e) => {
    const winHeight = window.outerHeight;
    const winWidth = window.outerWidth;
    if (winWidth <= 1000) {
      return;
    }
    const parallaxItem = document.getElementById("parallax");
    const dx = 0.5 - e.pageX / winWidth;
    const dy = 0.5 - e.pageY / winHeight;

    const offset = parallaxItem.getBoundingClientRect();
    const offX = dx * offset.left;
    const offY = dy * offset.top;

    if (
      offY === 0 ||
      offX === 0 ||
      offY >= offsetMax ||
      offX >= offsetMax ||
      offY <= -offsetMax ||
      offX <= -offsetMax
    ) {
      return;
    }

    gsap.to(parallaxItem, {
      x: offX * 0.1,
      y: offY * 0.4,
      rotationY: offX * 0.02,
      rotationX: offY * 0.02,
      duration: 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="home-section" data-background="" id="home">
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
        <div className="split-background d-none d-lg-block d-xl-block zen-animation" />
        <div className="home-content text-start">
          <div className="row mt-5 mt-sm-2 mt-md-1 mt-lg-0 mt-xl-0 mb-5">
            <div className="col-lg-5 d-flex mb-md-60 mt-5 mt-md-3 mt-sm-5">
              <div className="mt-sm-5 mt-md-5 mt-lg-5">
                <h1 className="hs-line-10 uppercase mb-30 mt-xs-10 wow fadeInUpShort animated">
                  Joshua Johnsgaard
                </h1>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <h1 className="mb-60 mb-xs-40 wow fadeInUpShort animated">
                      {isVisible && (
                        <Typist
                          cursorColor="#ff3333"
                          sentences={[
                            "Mobile",
                            "Web Application",
                            "Full Stack",
                          ]}
                          deletingSpeed={120}
                          pauseTime={2000}
                          cursorSmooth
                          loop={false}
                        />
                      )}
                      <br />
                      Developer
                    </h1>
                  )}
                </TrackVisibility>
                <div className="text-justify services-descr">
                  <p>
                    <span className="dropcap font-alt">H</span>ello, I'm Joshua.
                    I am a developer & programmer living in Campbell River,
                    British Columbia Canada. I am extremely passionate about
                    designing and developing advanced web applications and user
                    interfaces. I have years of experience in a diverse set of
                    programming languages and tools, ranging from client side
                    (HTML5, SCSS, Javascript, React, Apollo), to server side
                    (Node, Apollo-server, GraphQL, PHP, C#, Java), to the
                    database (MySQL, PL/SQL, PostgreSQL) and much much more. I
                    am always looking for more challenges to help me grow as a
                    developer.
                  </p>
                  <p>
                    Aside from being a dev, I love to spend my time camping,
                    drawing, watching survivor, surfing, or kickin it with the
                    family.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="alt-features-title">Age:</div>
                      <div className="alt-features-desc small">
                        {new AgeFromDateString("1991-11-19").age}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="alt-features-title">Location:</div>
                      <div className="alt-features-desc small">
                        Campbell River, British Columbia Canada
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="alt-features-title">Email: </div>
                      <div className="alt-features-desc small">
                        hello@gaard.ca
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="alt-features-title">Status: </div>
                      <div className="alt-features-desc small">
                        ✨👨‍💻 Full stack developer @ INgrooves Music Group ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="parallax"
              className="split-image mt-3 mt-lg-5 mt-md-5 mt-xl-5 col-xl-6 col-lg-6 offset-0 offset-sm-2 offset-md-3 offset-lg-1 d-flex align-items-center polaroid"
            >
              <div className="insetShadow" />
              <img
                className="wow fadeScaleIn animated"
                src={MyImage}
                alt="it me"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
