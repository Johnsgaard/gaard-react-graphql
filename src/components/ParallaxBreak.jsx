import React from 'react';
import GreyFloral from '../images/greyfloral.png';

const ParallaxBreak = () => (
  <section
    className="small-section bg-dark"
    data-background={GreyFloral}
    style={{ backgroundImage: `url(${GreyFloral})`, backgroundRepeat: 'repeat', backgroundSize: '200px', clipPath: 'polygon(0px 0px, 100% 0px, 50% 0vw, 0px 6vw)' }}
  />
);

export default ParallaxBreak;
