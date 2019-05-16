import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import Emoji from 'react-emoji-render';

import Cohen from '../images/CohenLarge.png';
import Wedding from '../images/wedding.png';
import ActualWedding from '../images/actualWedding.png';
import Becks from '../images/Becks.png';
import Me from '../images/Me.png';
import Dating from '../images/dating.png';
import Kobber from '../images/Kobber.png';
import Xmas from '../images/xmas.png';

// page components
import ParallaxBreak from './ParallaxBreak';
import Footer from './Footer';

class DatesPage extends React.Component {
  constructor(props) {
    super(props);
    this.currentYear = new Date().getFullYear();
    this.state = {
      events: [
        {
          title: 'Cohen\'s Birthday',
          date: `Jul 16, ${this.currentYear}`,
          image: Cohen,
        },
        {
          title: 'Wedding Anniversary',
          date: `Sep 23, ${this.currentYear}`,
          image: Wedding,
        },
        {
          title: 'Actual Wedding Anniversary',
          date: `Jul 23, ${this.currentYear}`,
          image: ActualWedding,
        },
        {
          title: 'Beck\'s Birthday',
          date: `Dec 27, ${this.currentYear}`,
          image: Becks,
        },
        {
          title: 'My Birthday',
          date: `Nov 19, ${this.currentYear}`,
          image: Me,
        },
        {
          title: 'Dating Anniversary',
          date: `${this.currentYear}-04-15`,
          image: Dating,
        },
        {
          title: 'Kobber\'s Birthday',
          date: `Jul 31, ${this.currentYear}`,
          image: Kobber,
        },
        {
          title: 'X-mas',
          date: `Dec 25, ${this.currentYear}`,
          image: Xmas,
        },
      ],
    };
  }

  getTimeDifference = (stringDate) => {
    const currentDate = new Date();
    const formattedDate = new Date(stringDate);
    console.log(currentDate, formattedDate);
    const diffTime = formattedDate.getTime() - currentDate.getTime();
    if (Math.ceil(diffTime / (1000 * 60 * 60 * 24)) < 0) {
      return 365 + Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  }

  getDateItems = () => (
    this.state.events.map((event) => (
      <li className="clearfix">
        <img src={event.image} alt={event.title} className="widget-posts-img" />
        <div>
          <span className="ci-title font-alt">{event.title}</span>
          <TrackVisibility>
            {({isVisible}) => {
              if (isVisible === true) {
                if (this.getTimeDifference(event.date) === 0) {
                  return (
                        <div className="hs-green-n-bold">
                          <Emoji text=":tada:" />
                          CELEBRATE GOOD TIMES, C'MON
                          <Emoji text=":tada:" />
                        </div>
                  );
                }
                if (this.getTimeDifference(event.date) <= 5) {
                  return (
                    <div className="hs-green-n-bold">
                      <Emoji text=":sparkles:" />
                      <CountUp start={0} end={this.getTimeDifference(event.date)} /> Days
                      <Emoji text=":sparkles:" />
                    </div>
                  );
                }
                return (<div className="hs-line-red"><CountUp start={0} end={this.getTimeDifference(event.date)} /> Days</div>)
              }
              return 'Uh oh! Invalid data.'
            }}
          </TrackVisibility>
        </div>
        <br />
    </li>
    )));

  render() {
    return (
      <div className="appear-animate">
        <div className="page" id="top">
          <section className="page-section bg-light" data-background="" id="home">
            <div className="relative container">
              <div className="home-content">
                <div className="home-text">
                  <div className="hs-cont">
                    <div className="hs-wrap red">
                      <div className="hs-line-11 font-alt mb-10">
                        Days to remember
                      </div>
                      <div className="widget-body">
                        <ul className="clearlist widget-posts">
                          { this.getDateItems() }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ParallaxBreak type="universe" size="500px" height="13px" />
          <Footer />
        </div>
      </div>
    );
  }
};

export default DatesPage;