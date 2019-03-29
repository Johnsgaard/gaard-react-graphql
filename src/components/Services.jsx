import React from 'react';

class Services extends React.Component {
  render () {
    return (
      <section className="page-section" id="services">
        <div className="container relative">

          <h3 className="section-title font-alt mb-70 mb-sm-40">
                          Services
                      </h3>

          { /*Nav tabs  */ }
          <ul className="nav nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
            <li className="active">
              <a href="#service-web-design" data-toggle="tab">

                <div className="alt-tabs-icon">
                  <span className="icon-desktop"></span>
                </div>

                Web Design
              </a>
            </li>
            <li>
              <a href="#service-development" data-toggle="tab">

                <div className="alt-tabs-icon">
                  <span className="icon-gears"></span>
                </div>

                Development
              </a>
            </li>
          </ul>
          { /*End Nav tabs  */ }

          { /*Tab panes  */ }
          <div className="tab-content tpl-tabs-cont">

            { /*Service Item  */ }
            <div className="tab-pane fade in active" id="service-web-design">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        It&nbsp;doesn’t matter how many times&nbsp;I have to&nbsp;click, as&nbsp;long as&nbsp;each click is&nbsp;a&nbsp;mindless, unambiguous choice.
                      </p>
                      <footer>
                        Steve Krug
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    User experience is as important as having a beautiful design. I will develop you a product that will minimize cognitive load for your users and give them an enjoyable experience.
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    A beautiful design is consistent and minimalistic.
                  </div>
                </div>
              </div>

            </div>
            { /*End Service Item  */ }

            { /*Service Item  */ }
            <div className="tab-pane fade" id="service-development">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        Hello World
                      </p>
                      <footer>
                        console.log('hello world');
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-8 col-sm-12 mb-sm-50 mb-xs-30">
                    &lt;Johnsgaard&gt; Development is something I am truly passionate about and I am always looking for new tools and libraries to work into my projects.
                    As a developer I love problem solving and challening myself. I follow development procedures that ensure the code is properly tested before it reaches production.
                    Most importantly I like to make the development process easy and enjoyable for everyone. &lt;/ Johnsgaard&gt;
                  </div>
                </div>
              </div>

            </div>
            { /*End Service Item  */ }

          </div>
          { /*End Tab panes  */ }

          { /*Features Grid  */ }
          <div className="row pt-30">

            { /*Text Item  */ }
            <div className="col-sm-12">
              <div className="alt-features-item align-center">
                <div className="alt-features-descr align-left">
                  <h4 className="mt-0 font-alt">Development process</h4>
                </div>
              </div>
            </div>
            { /*End Text Item  */ }

            { /*Features Item  */ }
            <div className="col-sm-3">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-chat"></span>
                </div>
                <h3 className="alt-features-title font-alt">1. Plan</h3>
              </div>
            </div>
            { /*End Features Item  */ }

            { /*Features Item  */ }
            <div className="col-sm-3">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-browser"></span>
                </div>
                <h3 className="alt-features-title font-alt">2. Make</h3>
              </div>
            </div>
            { /*End Features Item  */ }

            { /*Features Item  */ }
            <div className="col-sm-3">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-refresh"></span>
                </div>
                <h3 className="alt-features-title font-alt">3. Validate</h3>
              </div>
            </div>
            { /*End Features Item  */ }

            { /*Features Item  */ }
            <div className="col-sm-3">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-heart"></span>
                </div>
                <h3 className="alt-features-title font-alt">4. Product</h3>
              </div>
            </div>
            { /*End Features Item  */ }

          </div>
          { /*End Features Grid  */ }

        </div>
      </section>);
    }
  }

export default Services;
