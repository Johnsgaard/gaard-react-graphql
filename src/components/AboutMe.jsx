import React from 'react';
import { AgeFromDateString } from 'age-calculator';
import MyImage from '../images/surf_black-min.png';

const AboutMe = () => (
  <section className="page-section bg-dark bg-beige" data-background="" id="home">
      <div className="relative container">
          <div className="home-content">
              <div className="home-text">
                  <div className="row mt-60 mt-xs-20">
                      
                      <div className="col-sm-7 col-md-5 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30">
                          <div className="hs-line-4 mb-20 text-left">Joshua Johnsgaard</div>
                          <h1 className="text-justify hs-line-7 mb-40 mb-xs-10">Web Application Developer</h1>
                          <div className="mb-70 mb-xs-40 text-justify">
                              <p>
                                  <span className="dropcap font-alt">H</span>ello, I'm Joshua. I am a web developer & programmer
                                   living in Calgary, Alberta Canada. I am passionate about designing and developing web applications and user interfaces.
                                   I have experience in a diverse set of programming languages and tools, ranging from client side (HTML5, SCSS, Javascript, React, Apollo), 
                                   to server side (PHP, Node, C#, Java, GraphQL), all the way to the database (MySQL, Knex). I am always looking for more challenges 
                                   to help me grow as a developer.
                              </p>
                              <p>
                                Aside from being a web dev, I love to spend my time camping, drawing, playing video games, or 
                                just hanging out with family & friends.
                              </p>
                              <hr className="red" />
                              <div className="post-prev-img">
                                  <div>
                                      <strong>Age:</strong>
                                      &nbsp;{new AgeFromDateString('1991-11-19').age}
                                  </div>
                                  <div>
                                      <strong>Location:</strong>
                                      &nbsp;Calgary, Alberta Canada
                                  </div>
                                  <div>
                                      <strong>Email: </strong>
                                      &nbsp;hello@gaard.ca
                                  </div>
                                  <div>
                                      <strong>Status: </strong>
                                      &nbsp;Open to opportunities
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-sm-4 col-md-6 col-sm-offset-1 col-lg-offset-1">
                          <img src={MyImage} className="polaroid" alt=""/>
                      </div>
                      
                  </div>
              </div>
          </div>
          
      </div>
  </section>
);

export default AboutMe;
