import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Emoji from "react-emoji-render";
import { HashLink as Link } from "react-router-hash-link";
import { reportAnalytics } from "../utilities";
import GaardLogo from "../images/logo.png";

const SIDE_PANEL_QUERY = gql`
  {
    viewer {
      name
      login
      avatarUrl
      status {
        emoji
        message
      }
      followers {
        totalCount
      }
    }
  }
`;

const SidePanel = (props) => {
  return (
    <Query query={SIDE_PANEL_QUERY} pollInterval={3500}>
      {({ loading, error, data, startPolling, stopPolling }) => {
        return (
          <React.Fragment>
            <div
              onClick={props.toggleSidePanel}
              className={`sp-overlay ${props.spOpen ? "open" : ""}`}
            ></div>
            <div className={`side-panel white ${props.spOpen ? "" : "closed"}`}>
              {/* close button */}
              <span
                onClick={props.toggleSidePanel}
                className="sp-close-button"
              ></span>
              {/* Logo */}
              {/* Your text or image into link tag */}
              <div className="sp-logo-wrap local-scroll mt-5">
                <span className="logo">
                  <img
                    src={loading || !data ? GaardLogo : data.viewer.avatarUrl}
                    width="230"
                    height="230"
                    alt=""
                  />
                  <div className="font-alt mt-3 services-title">
                    {!loading && data ? data.viewer.name : "Loading"}
                  </div>
                  <div className="services-descr" style={{ fontWeight: 700 }}>
                    <Emoji
                      text={
                        !loading && data ? data.viewer.status.emoji : "tada"
                      }
                    />
                    {!loading && data ? data.viewer.status.message : "Loading"}
                  </div>
                </span>
                <a
                  className="btn btn-mod btn-glass btn-circle relative mb-3"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Johnsgaard"
                  data-show-count="true"
                  aria-label="@Johnsgaard on GitHub"
                >
                  <span className="label-new label-for-button gaard-tooltip round">
                    {!loading && data ? data.viewer.followers.totalCount : 0}
                  </span>
                  <i className="fa fa-github"></i>
                  <span>
                    {!loading && data ? `@${data.viewer.login}` : "Loading"}
                  </span>
                </a>
              </div>
              {/* End Logo */}

              {/* Menu */}
              <div className="sp-wrapper" id="side-panel-menu">
                <ul className="sp-menu-links local-scroll small">
                  <li>
                    <Link to="/#home" onClick={props.toggleSidePanel}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/#resume" onClick={props.toggleSidePanel}>
                      Resume / CV
                    </Link>
                  </li>

                  {/* Item With Sub */}
                  <li>
                    <Link to="/#services" onClick={props.toggleSidePanel}>
                      Services
                    </Link>
                  </li>
                  {/* End Item With Sub */}

                  <li>
                    <Link to="/#contact" onClick={props.toggleSidePanel}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/mmaempire" onClick={props.toggleSidePanel}>
                      MMA Empire
                    </Link>
                  </li>
                  <li>
                    <Link to="/surf" onClick={props.toggleSidePanel}>
                      Surf Report
                    </Link>
                  </li>
                </ul>
              </div>
              {/* End Menu */}

              {/* Social Links */}
              <div className="sp-social-links">
                <a
                  href="https://www.facebook.com/joshua.johnsgaard"
                  title="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() =>
                    reportAnalytics(
                      "Facebook Clicked",
                      "Social Media",
                      "facebook"
                    )
                  }
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/joshua-johnsgaard-9ba83a58/"
                  rel="noopener noreferrer"
                  title="LinkedIn+"
                  target="_blank"
                  onClick={() =>
                    reportAnalytics(
                      "LinkedIn Clicked",
                      "Social Media",
                      "linkedin"
                    )
                  }
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Johnsgaard"
                  title="GitHub+"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() =>
                    reportAnalytics("GitHub Clicked", "Repos", "GitHub")
                  }
                >
                  <i className="fa fa-github"></i>
                </a>
                <Link
                  to="/dates"
                  title="Countdown"
                  onClick={() => {
                    reportAnalytics("Dates Opened", "Dates", "viewed");
                    props.toggleSidePanel();
                  }}
                >
                  <i className="fa fa-calendar-o"></i>
                </Link>
              </div>
              {/* End Social Links */}
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

SidePanel.propTypes = {
  spOpen: PropTypes.bool.isRequired,
  toggleSidePanel: PropTypes.func.isRequired,
};

export default SidePanel;
