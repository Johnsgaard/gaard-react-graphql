import React from 'react';
import GaardLogo from '../images/logo.png';
import TrackVisibility from 'react-on-screen';
import { HashLink as Link } from 'react-router-hash-link';
import { reportAnalytics } from '../utilities';

const Footer = (props) => (
  <footer  className="page-section bg-gray-lighter footer pb-60">
    <div  className="container">

      { /*  Footer Logo  */ }
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div 
            className={`local-scroll mb-30 wow ${isVisible ? 'fadeInUp' : ''}`}
            style={{ visibility: 'visible', animationDuration: '1.5s', animationName: isVisible ? 'fadeInUp': '' }}
          >
            {isVisible ? <Link to="/#home"><img src={GaardLogo} width="78" height="36" alt="" /></Link> : <div width="78" height="36"></div> }
          </div>
        )}
      </TrackVisibility>
      { /*  End Footer Logo  */ }

      { /*  Social Links  */ }
      <div  className="footer-social-links mb-110 mb-xs-60">
        <a href="https://www.facebook.com/joshua.johnsgaard" rel="noopener noreferrer" title="Facebook" target="_blank" onClick={() => reportAnalytics('Facebook Clicked', 'Social Media', 'facebook')}><i  className="fa fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/joshua-johnsgaard-9ba83a58/" rel="noopener noreferrer" title="LinkedIn+" target="_blank" onClick={() => reportAnalytics('LinkedIn Clicked', 'Social Media', 'linkedin')}><i  className="fa fa-linkedin"></i></a>
        <a href="https://github.com/Johnsgaard" title="GitHub+" rel="noopener noreferrer" target="_blank"><i  className="fa fa-github" onClick={() => reportAnalytics('GitHub Clicked', 'Repos', 'GitHub')}></i></a>
      </div>
      { /*  End Social Links  */ }

    </div>


    { /*  Top Link  */ }
    {props.returnToTop
      ? (<div  className="local-scroll"><Link to="/#top"  className="link-to-top"><i  className="fa fa-caret-up"></i></Link></div>)
      : null
    }
    
    { /*  End Top Link  */ }

  </footer>
);

export default Footer;
