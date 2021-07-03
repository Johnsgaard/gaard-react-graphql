import React from 'react';
import GreyFloral from '../images/greyfloral.png';

const ContactParallax = () => (
  <section  className="small-section bg-dark-alfa-20" style={{
    backgroundImage: `url(${GreyFloral})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px',
   }}>
      <div  className="container relative">

        <div  className="align-center">
          <h3  className="bg-light font-alt">Want to discuss your next project?</h3>
          <div>
            <a href="mailto:hello@gaard.ca"  className="btn btn-mod btn-w btn-circle btn-medium chill-animation" style={{ opacity: 1 }}>Lets chat</a>
          </div>
        </div>

      </div>
    </section>
);

export default ContactParallax;
