import React from "react";
import { AgeFromDateString } from "age-calculator";
import MyImage from "../images/SurfsOut.JPG";

const AboutMe = () => (
  <section className="home-section" data-background="" id="home">
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
      <div className="split-background d-none d-lg-block d-xl-block" />
      <div className="home-content text-start">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center mb-md-60">
            <div>
              <h1 className="hs-line-10 uppercase mb-30 mb-xs-10 wow fadeInUpShort animated">
                Joshua Johnsgaard
              </h1>
              <h2 className="hs-line-7 mb-60 mb-xs-40 wow fadeInUpShort animated">
                Mobile & Web app developer
              </h2>
            </div>
          </div>
          {/* <div className="mb-70 mb-xs-40 text-justify">
                <p className="col-sm-10 col-md-12 col-lg-12">
                  <span className="dropcap font-alt">H</span>ello, I'm Joshua. I
                  am a developer & programmer living in Campbell River, British
                  Columbia Canada. I am extremely passionate about designing and
                  developing advanced web applications and user interfaces. I
                  have years of experience in a diverse set of programming
                  languages and tools, ranging from client side (HTML5, SCSS,
                  Javascript, React, Apollo), to server side (Node,
                  Apollo-server, GraphQL, PHP, C#, Java), to the database
                  (MySQL, PL/SQL, PostgreSQL) and much much more. I am always
                  looking for more challenges to help me grow as a developer.
                </p>
                <p className="col-sm-10 col-md-12 col-lg-12">
                  Aside from being a web dev, I love to spend my time camping,
                  drawing, watching survivor, playing video games, or kickin it
                  with the family.
                </p>
                <hr className="red col-sm-9 col-md-12 col-lg-12" />
                <div className="post-prev-img col-sm-8 col-md-12 col-lg-12">
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
                    &nbsp; ✨👨‍💻 Full stack developer @ INgrooves Music Group ✨
                  </div>
                </div>
              </div> */}
          <div className="split-image col-lg-6 offset-lg-1 d-flex align-items-center parallax polaroid">
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

export default AboutMe;
