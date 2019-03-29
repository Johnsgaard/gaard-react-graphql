import React from 'react';
import PropTypes from 'prop-types';
import GreyFloral from '../images/greyfloral.png';
import Universe from '../images/universe.jpg';
import Banana from '../images/bananas.png';
import Wheat from '../images/wheat.png';
import Paper from '../images/lightpaperfibers.png';

const ParallaxBreak = (props) => {
  const backgroundURL = {
    greyfloral: GreyFloral,
    universe: Universe,
    banana: Banana,
    wheat: Wheat,
    paper: Paper,
  }
  return (
    <section
      className="small-section bg-dark"
      style={{
        backgroundImage: `url(${backgroundURL[props.type]})`,
        backgroundRepeat: 'repeat',
        backgroundSize: props.size,
        height: props.height,
        padding: '0px'
      }}
    />
  );
}

ParallaxBreak.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
}

ParallaxBreak.defaultProps = {
  type: 'greyfloral',
  size: '200px',
  height: '20px',
}

export default ParallaxBreak;
