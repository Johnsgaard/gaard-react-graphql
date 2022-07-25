import React, { useState } from "react";

const Services = () => {
  const [visibleService, setVisibleService] = useState("web-design");

  return (
    <section className="page-section" id="services">
      <div className="container relative row col-12 offset-0 offset-md-2">
        <h3 className="section-title font-alt mb-5">Services</h3>

        {/*Nav tabs  */}
        <ul className="nav tpl-minimal-tabs mb-3">
          <li className="nav-link">
            <a
              className={visibleService === "web-design" ? "active" : ""}
              onClick={() => setVisibleService("web-design")}
            >
              Web Design
            </a>
          </li>
          <li className="nav-link secondItem">
            <a
              className={visibleService === "development" ? "active" : ""}
              onClick={() => setVisibleService("development")}
            >
              Development
            </a>
          </li>
        </ul>
        {/*End Nav tabs  */}

        {/*Tab panes  */}
        <div className="tab-content tpl-minimal-tabs-cont section-text mt-4">
          {/*Service Item  */}
          <div
            className={`tab-pane fade animate ${
              visibleService === "web-design" ? "active show" : ""
            }`}
            id="service-web-design"
          >
            <div className="section-text">
              <div className="row">
                <div className="col-md-4 mb-md-40 mb-xs-30">
                  <blockquote className="mb-0 blockquote">
                    <p>
                      It&nbsp;doesn’t matter how many times&nbsp;I have
                      to&nbsp;click, as&nbsp;long as&nbsp;each click
                      is&nbsp;a&nbsp;mindless, unambiguous choice.
                    </p>
                    <footer>Steve Krug</footer>
                  </blockquote>
                </div>
                <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30 mt-2 services-descr">
                  User experience is as important as having a beautiful design.
                  I will develop you a product that will minimize cognitive load
                  for your users and give them an enjoyable experience.
                </div>
                <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30 mt-2 services-descr">
                  A beautiful design is consistent and minimalistic.
                </div>
              </div>
            </div>
          </div>
          {/*End Service Item  */}

          {/*Service Item  */}
          <div
            className={`tab-pane fade animate ${
              visibleService === "development" ? "active show" : ""
            }`}
            id="service-development"
          >
            <div className="section-text">
              <div className="row">
                <div className="col-md-2 mb-md-40 mb-xs-30">
                  <blockquote className="mt-0 blockquote">
                    <p>Hello World</p>
                    <footer>console.log('hello world');</footer>
                  </blockquote>
                </div>
                <div className="col-md-8 col-sm-12 mb-sm-50 mb-xs-30 pt-1 services-descr">
                  Development is something I am truly passionate about and I am
                  always looking for new tools and libraries to work into my
                  projects. As a developer I love problem solving and challening
                  myself. I follow development procedures that ensure the code
                  is properly tested before it reaches production. Most
                  importantly I like to make the development process easy and
                  enjoyable for everyone.
                </div>
              </div>
            </div>
          </div>
          {/*End Service Item  */}
        </div>
        {/*End Tab panes  */}

        {/*Features Grid  */}
        <div className="row mt-5">
          {/*Text Item  */}
          <div className="col-sm-12">
            <div className="alt-features-item">
              <div className="alt-features-descr align-left">
                <h4 className="mt-0 font-alt">Development process</h4>
              </div>
            </div>
          </div>
          {/*End Text Item  */}

          {/*Features Item  */}
          <div className="col-sm-3">
            <div className="alt-features-item">
              <div className="alt-features-icon">
                <span className="icon-chat"></span>
              </div>
              <h3 className="alt-features-title font-alt">
                1. Plan / Architect
              </h3>
            </div>
          </div>
          {/*End Features Item  */}

          {/*Features Item  */}
          <div className="col-sm-3">
            <div className="alt-features-item">
              <div className="alt-features-icon">
                <span className="icon-browser"></span>
              </div>
              <h3 className="alt-features-title font-alt">2. Make</h3>
            </div>
          </div>
          {/*End Features Item  */}

          {/*Features Item  */}
          <div className="col-sm-3">
            <div className="alt-features-item">
              <div className="alt-features-icon">
                <span className="icon-refresh"></span>
              </div>
              <h3 className="alt-features-title font-alt">
                3. Weekly Update / Repeat
              </h3>
            </div>
          </div>
          {/*End Features Item  */}

          {/*Features Item  */}
          <div className="col-sm-3">
            <div className="alt-features-item">
              <div className="alt-features-icon">
                <span className="icon-heart"></span>
              </div>
              <h3 className="alt-features-title font-alt">4. Product</h3>
            </div>
          </div>
          {/*End Features Item  */}
        </div>
        {/*End Features Grid  */}
      </div>
    </section>
  );
};

export default Services;
