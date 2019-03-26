import React from 'react';
import GreyFloral from '../images/greyfloral.png';

const ParallaxBreak = () => (
  <section
    className="small-section bg-dark"
    data-background={GreyFloral}
    style={{
      backgroundImage: `url(${GreyFloral})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px',
      height: '20px',
      padding: '0px'
     }}
  />
);

export default ParallaxBreak;
