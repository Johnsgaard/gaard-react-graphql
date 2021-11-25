import React from 'react';
import { AgeFromDateString } from 'age-calculator';
import MyImage from '../images/KobberAndMe.png';

const AboutMe = () => (
  <section className="page-section bg-dark bg-beige" data-background="" id="home">
      <div className="relative container breakword">
          <div className="home-content">
              <div className="home-text">
                  <div className="row mt-60 mt-xs-20">
                      
                      <div className="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-1 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30">
                          <div className="hs-line-4 mb-20 text-left">Joshua Johnsgaard</div>
                          <h1 className="text-left hs-line-7 mb-40 mb-xs-10 noletterspace">Mobile & Web app developer</h1>
                          <div className="row mb-70 mb-xs-40 text-justify">
                              <p className="col-sm-10 col-md-12 col-lg-12" >
                                  <span className="dropcap font-alt">H</span>ello, I'm Joshua. I am a developer & programmer
                                   living in Campbell River, British Columbia Canada. I am extremely passionate about designing and developing advanced web applications and user interfaces.
                                   I have years of experience in a diverse set of programming languages and tools, ranging from client side (HTML5, SCSS, Javascript, React, Apollo), 
                                   to server side (Node, Apollo-server, GraphQL, PHP, C#, Java), to the database (MySQL, PL/SQL, PostgreSQL) and much much more. I am always looking for more challenges 
                                   to help me grow as a developer.
                              </p>
                              <p className="col-sm-10 col-md-12 col-lg-12">
                                Aside from being a web dev, I love to spend my time camping, drawing, watching survivor, playing video games, or 
                                kickin it with the family.
                              </p>
                              <hr className="red col-sm-9 col-md-12 col-lg-12"/>
                              <div className="post-prev-img col-sm-8 col-md-12 col-lg-12">
                                  <div>
                                      <strong>Age:</strong>
                                      &nbsp;{new AgeFromDateString('1991-11-19').age}
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
                          </div>
                      </div>
                      
                      <div className="col-sm-8 col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-sm-offset-2 col-lg-5 col-lg-offset-1 polaroid">
                        <div className="insetShadow" />
                        <img src={MyImage} alt="it me"/>
                      </div>
                      
                  </div>
              </div>
          </div>
          
      </div>
  </section>
);

export default AboutMe;
