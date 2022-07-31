import React from "react";
import { Link } from "react-router-dom";

import SurfsOut from "../images/SurfsOut.JPG";

const Error = () => (
  <section
    className="home-section bg-dark-alfa-30"
    id="home"
    style={{
      padding: "0px",
      height: "99vh",
      backgroundImage: `url(${SurfsOut})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      className="relative container chill-animation"
      style={{ height: "100%", width: "100%", maxWidth: "none" }}
    >
      <div className="home-content pt-5">
        <div className="home-text pt-5">
          <div className="hs-cont">
            <div className="hs-wrap">
              <h1 className="text-left mb-0 mb-xs-10 noletterspace hs-line-3">
                Surfing around?
              </h1>
              <div className="text-left hs-line-3 no-transp font-alt mt-1 mb-5">
                The page you are looking for may be under construction.
              </div>
              <div className="text-left mt-5 hs-line font-alt no-transp section-text">
                Please go back to my{" "}
                <Link className="hs-line small black" to="/">
                  HOME PAGE
                </Link>{" "}
                to catch some better waves.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
);

export default Error;
