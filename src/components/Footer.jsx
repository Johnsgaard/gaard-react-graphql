import React from 'react';
import GaardLogo from '../images/GAARDfooter.png';
import TrackVisibility from 'react-on-screen';

const Footer = () => (
  <footer  className="page-section bg-gray-lighter footer pb-60">
    <div  className="container">

      { /*  Footer Logo  */ }
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div 
            className={`local-scroll mb-30 wow ${isVisible ? 'fadeInUp' : ''}`}
            style={{ visibility: 'visible', animationDuration: '1.5s', animationName: isVisible ? 'fadeInUp': '' }}
          >
            {isVisible ? <a href="#home"><img src={GaardLogo} width="78" height="36" alt="" /></a> : <div width="78" height="36"></div> }
          </div>
        )}
      </TrackVisibility>
      { /*  End Footer Logo  */ }

      { /*  Social Links  */ }
      <div  className="footer-social-links mb-110 mb-xs-60">
        <a href="https://www.facebook.com/joshua.johnsgaard" rel="noopener noreferrer" title="Facebook" target="_blank"><i  className="fa fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/joshua-johnsgaard-9ba83a58/" rel="noopener noreferrer" title="LinkedIn+" target="_blank"><i  className="fa fa-linkedin"></i></a>
        <a href="https://github.com/Johnsgaard" title="GitHub+" rel="noopener noreferrer" target="_blank"><i  className="fa fa-github"></i></a>
      </div>
      { /*  End Social Links  */ }

    </div>


    { /*  Top Link  */ }
    <div  className="local-scroll">
      <a href="#top"  className="link-to-top"><i  className="fa fa-caret-up"></i></a>
    </div>
    { /*  End Top Link  */ }

  </footer>
);

export default Footer;