import React, { useState } from 'react';

// components
import SidePanel from "./SidePanel";
import MenuButton from "./MenuButton";

// page components
import AboutMe from './AboutMe';
import Resume from './Resume';
import ParallaxBreak from './ParallaxBreak';
import Services from './Services';
import Contact from './Contact';
import ContactParallax from './ContactParallax';
import Footer from './Footer';

const Page = () => {
  const [spOpen, setSpOpen] = useState(false);
  const toggleSidePanel = () => {
    setSpOpen(!spOpen);
  };
  return (
    <>
      <MenuButton toggleSidePanel={toggleSidePanel} />
      <SidePanel spOpen={spOpen} toggleSidePanel={toggleSidePanel} />
      <div className="appear-animate">
        <div className="page" id="top">
          <AboutMe />
          <ParallaxBreak type="wheat" size="400px" height="20px" />
          <Resume />
          <ParallaxBreak type="universe" size="400px" height="5px" />
          <Services />
          <ParallaxBreak type="universe" size="400px" height="5px" />
          <Contact />
          <ContactParallax />
          <Footer returnToTop />
        </div>
      </div>
    </>
  );
}

export default Page;
