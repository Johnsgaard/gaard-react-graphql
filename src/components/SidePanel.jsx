import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Emoji from 'react-emoji-render';

const SIDE_PANEL_QUERY = gql`
{
  viewer {
    name
    avatarUrl
    status {
      emoji
      message
    }
  }
}
`;

const SidePanel = (props) => {
  return (
    <Query query={SIDE_PANEL_QUERY}>
      {({ loading, error, data}) => {
        if (error) { return <div className="side-panel white"> Error! {error} </div>}
        if (loading) return "Loading...";
        return (
          <React.Fragment>
            <div onClick={props.toggleSidePanel} className={`sp-overlay ${props.spOpen ? 'open' : ''}`}></div>
              <div className={`side-panel white ${props.spOpen ? '' : 'closed'}`}>
                { /* close button */ }      
                <span onClick={props.toggleSidePanel} className="sp-close-button"></span>
                { /* Logo */}
                {  /* Your text or image into link tag */ }
                <div className="sp-logo-wrap local-scroll mb-40 mb-md-10 mb-xs-0">
                  <span className="logo">
                    <img src={loading ? '../template-images/loader.gif' : data.viewer.avatarUrl} width="119" height="119" alt="" />
                    <div className="ci-title font-alt">{data.viewer.name}</div>
                    <div className="ci-title font-alt" style={{ fontWeight: 700 }}><Emoji text={data.viewer.status.emoji} />{data.viewer.status.message}</div>
                  </span>
                </div>
                {  /* End Logo */ }

                {  /* Menu */ }
                <div className="sp-wrapper" id="side-panel-menu">

                  <ul className="sp-menu-links local-scroll">

                    <li>
                      <a href="#home">Home</a>
                    </li>

                    <li>
                      <a href="#about">About</a>
                    </li>

                    {  /* Item With Sub */ }
                  <li>
                    <a href="#" className="sp-has-sub" className="active">
                      Portfolio
                      <i className="fa fa-angle-down"></i>
                    </a>

                    <ul className="sp-sub">
                      <li>
                        <a href="work.html">Nature</a>
                      </li>
                      <li>
                        <a href="work.html">People</a>
                      </li>
                      <li>
                        <a href="work.html">Lifestyle</a>
                      </li>
                      <li>
                        <a href="work.html">Places</a>
                      </li>
                    </ul>

                  </li>
                  {  /* End Item With Sub */ }

                  <li>
                    <a href="#contact">Contact</a>
                  </li>

                  {  /* Item With Sub */ }
                  <li>
                  <a href="#" className="sp-has-sub">Search <i className="fa fa-angle-down"></i></a>
                    <ul className="sp-sub">
                      <li>
                        <div className="mn-wrap">
                          <form method="post" className="form align-center">
                            <div className="search-wrap inline-block sp-search">
                              <button className="search-button animate" type="submit" title="Start Search">
                                <i className="fa fa-search"></i>
                              </button>
                              <input type="text" className="form-control search-field round" placeholder="Search..." />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>

                  </li>
                {  /* End Item With Sub */ }

                </ul>

                </div>
                {  /* End Menu */ }


                {  /* Social Links */ }
                <div className="sp-social-links">
                  <a href="https://www.facebook.com/joshua.johnsgaard" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/joshua-johnsgaard-9ba83a58/" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
                  <a href="https://github.com/Johnsgaard" title="GitHub+" target="_blank"><i class="fa fa-github"></i></a>
              </div>
              {  /* End Social Links */ }

            </div>
          </React.Fragment>
      )}}
    </Query>
  );
}

SidePanel.propTypes = {
  spOpen: PropTypes.bool.isRequired,
  toggleSidePanel: PropTypes.func.isRequired,
}

export default SidePanel;
