import React from 'react';

// page components
import ParallaxBreak from './ParallaxBreak';
import Privacy from './Privacy';
import Contact from './Contact';
import Footer from './Footer';

const PrivacyPolicy = () => (
  <div className="appear-animate">
    <div className="page" id="top">
      <Privacy />
      <ParallaxBreak type="universe" size="500px" height="10px" />
      <Contact />
      <Footer returnToTop />
    </div>
  </div>
);

export default PrivacyPolicy;
