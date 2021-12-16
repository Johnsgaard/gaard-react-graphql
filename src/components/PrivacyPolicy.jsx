import React, { useState } from "react";

// components
import SidePanel from "./SidePanel";
import MenuButton from "./MenuButton";

// page components
import ParallaxBreak from "./ParallaxBreak";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Footer from "./Footer";

const PrivacyPolicy = () => {
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
          <Privacy />
          <ParallaxBreak type="universe" size="500px" height="10px" />
          <Contact />
          <Footer returnToTop />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
