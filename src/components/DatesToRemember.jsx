import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import Emoji from 'react-emoji-render';

import Cohen from '../images/CohenLarge.png';
import Scout from '../images/Scout.png';
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
          actualDate: 'Jul 16, 2018',
        },
        {
          title: 'Scout\'s Birthday',
          date: `Jun 19, ${this.currentYear}`,
          image: Scout,
          actualDate: 'Jun 19, 2020',
        },
        {
          title: 'Wedding Anniversary',
          date: `Sep 23, ${this.currentYear}`,
          image: Wedding,
          actualDate: 'Sept 23, 2017',
        },
        {
          title: 'Actual Wedding Anniversary',
          date: `Jul 23, ${this.currentYear}`,
          image: ActualWedding,
          actualDate: 'Jul 23, 2017',
        },
        {
          title: 'Beck\'s Birthday',
          date: `Dec 27, ${this.currentYear}`,
          image: Becks,
          actualDate: 'Dec 27, 1991',
        },
        {
          title: 'My Birthday',
          date: `Nov 19, ${this.currentYear}`,
          image: Me,
          actualDate: 'Nov 19, 1991',
        },
        {
          title: 'Dating Anniversary',
          date: `Apr 15, ${this.currentYear}`,
          image: Dating,
          actualDate: 'Apr 15, 2010',
        },
        {
          title: 'Kobber\'s Birthday',
          date: `Jul 31, ${this.currentYear}`,
          image: Kobber,
          actualDate: 'Jul 31, 2015',
        },
        {
          title: 'X-mas',
          date: `Dec 25, ${this.currentYear}`,
          image: Xmas,
          actualDate: 'December 25, 0',
        },
      ],
    };
  }

  getTimeDifference = (stringDate) => {
    const currentDate = new Date();
    const formattedDate = new Date(stringDate);
    const diffTime = formattedDate.getTime() - currentDate.getTime();
    if (Math.ceil(diffTime / (1000 * 60 * 60 * 24)) < 0) {
      return 365 + Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  }

 getYearDifferenceFromNow = (date) => {
    const now = new Date();
    const then = new Date(date);
    let diff =(now.getTime() - then.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round((diff/365.25) * 10) / 10);
 }

  getDateItems = () => (
    this.state.events.map((event) => (
      <li key={event.title} className="clearfix">
        <img src={event.image} alt={event.title} className="widget-posts-img date-img" />
        <div className="col-md-8 col-sm-6 mb-sm-50 mb-xs-30">
          <span className="ci-title font-alt">{event.title}</span>
          <TrackVisibility offset={1000}>
            {({isVisible}) => {
              if (isVisible === true) {
                if (this.getTimeDifference(event.date) === 0) {
                  return (
                        <div className="hs-green-n-bold">
                          <Emoji text=":tada:" />
                          CELEBRATE GOOD TIMES, C'MON
                          <Emoji text=":tada:" />
                          <div className="mb-40">
                            <strong>{event.actualDate}</strong>
                            <h5 className="black">{this.getYearDifferenceFromNow(event.actualDate)}&nbsp;Years</h5>
                          </div>
                        </div>
                  );
                }
                if (this.getTimeDifference(event.date) <= 5) {
                  return (
                    <div className="hs-green-n-bold">
                      <Emoji text=":sparkles:" />
                      <CountUp start={0} end={this.getTimeDifference(event.date)} /> Days
                      <Emoji text=":sparkles:" />
                      <div className="mb-40">
                        <strong>{event.actualDate}</strong>
                        <h5 className="black">{this.getYearDifferenceFromNow(event.actualDate)}&nbsp;Years</h5>
                      </div>
                    </div>
                  );
                }
                return (
                  <div>
                    <div className="hs-line-red">
                      <CountUp start={0} end={this.getTimeDifference(event.date)} />&nbsp;Days
                    </div>
                    <br />
                    <div className="mb-40">
                      <strong>{event.actualDate}</strong>
                      <h5 className="black">{this.getYearDifferenceFromNow(event.actualDate)}&nbsp;Years</h5>
                    </div>
                  </div>)
              }
              return <div style={{ minHeight: '80px' }}>&nbsp;</div>;
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