import React from 'react';

// page components
import Error from './Error';
import ParallaxBreak from './ParallaxBreak';
import Footer from './Footer';

const Page = () => (
  <div className="appear-animate">
    <div className="page" id="top">
      <Error />
      <ParallaxBreak type="universe" size="500px" height="13px" />
      <Footer />
    </div>
  </div>
);

export default Page;