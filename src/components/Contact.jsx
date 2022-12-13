import React from "react";

const Contact = () => (
  <section className="page-section" id="contact">
    <div className="col-md-12 container relative">
      <h3 className="section-title font-alt">Contact Information</h3>

      <div className="row mt-5">
        <div className="col-md-8 col-md-offset-2">
          <div className="row">
            {/* Phone  */}
            <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
              <div className="contact-item">
                <div className="ci-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="ci-title font-alt">Call</div>
                <div className="ci-text">+1(403)999-8577</div>
              </div>
            </div>
            {/* End Phone  */}

            {/* Address  */}
            <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
              <div className="contact-item">
                <div className="ci-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="ci-title font-alt">Address</div>
                <div className="ci-text">Campbell River, BC Canada</div>
              </div>
            </div>
            {/* End Address  */}

            {/* Email  */}
            <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
              <div className="contact-item">
                <div className="ci-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="ci-title font-alt">Email</div>
                <div className="ci-text">
                  <a href="mailto:hello@gaard.ca">hello@gaard.ca</a>
                </div>
              </div>
            </div>
            {/* End Email  */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
