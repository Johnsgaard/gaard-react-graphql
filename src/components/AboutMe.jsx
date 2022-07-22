import React, { useEffect } from "react";
import { AgeFromDateString } from "age-calculator";
import MyImage from "../images/ScoutToss.jpg";
import { gsap } from "gsap";

const AboutMe = () => {
  const offsetXMax = 60;
  const offsetYMax = 60;
  const handleMouseMove = (e) => {
    const winHeight = window.outerHeight;
    const winWidth = window.outerWidth;
    if (winWidth <= 1000) {
      return;
    }
    const parallaxItem = document.getElementById("parallax");
    const dx = 0.3 - e.pageX / winWidth;
    const dy = 0.7 - e.pageY / winHeight;

    const offset = parallaxItem.getBoundingClientRect();
    const offX = dx * offset.left;
    const offY = dy * offset.top;
    if (
      offX > offsetXMax ||
      offY > offsetYMax ||
      offX < -offsetXMax ||
      offY < -offsetYMax ||
      offY === 0 ||
      offX === 0
    ) {
      return;
    }

    gsap.to(parallaxItem, {
      x: offX,
      y: offY,
      rotationY: offX * 0.12,
      rotationX: offY * 0.12,
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
        <div id="parallax" className="home-content text-start">
          <div className="row mt-5 mt-sm-2 mt-md-1 mt-lg-0 mt-xl-0">
            <div className="col-lg-5 d-flex mb-md-60 mt-5 mt-md-3 mt-sm-5">
              <div className="mt-sm-5 mt-md-5 mt-lg-5">
                <h1 className="hs-line-10 uppercase mb-30 mt-xs-10 wow fadeInUpShort animated">
                  Joshua Johnsgaard
                </h1>
                <h2 className="hs-line-7 mb-60 mb-xs-40 wow fadeInUpShort animated">
                  Mobile & Web app developer
                </h2>
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
                    Aside from being a web dev, I love to spend my time camping,
                    drawing, watching survivor, playing video games, or kickin
                    it with the family.
                  </p>
                  <hr />
                  <div>
                    <div>
                      <strong>Age:</strong>
                      &nbsp;{new AgeFromDateString("1991-11-19").age}
                    </div>
                    <div>
                      <strong>Location:</strong>
                      &nbsp;Campbell River, British Columbia Canada
                    </div>
                    <div>
                      <strong>Email: </strong>
                      &nbsp;hello@gaard.ca
                    </div>
                    <div>
                      <strong>Status: </strong>
                      &nbsp; ✨👨‍💻 Full stack developer @ INgrooves Music Group
                      ✨
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-image col-xl-6 col-lg-6 offset-lg-1 d-flex align-items-center polaroid">
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
