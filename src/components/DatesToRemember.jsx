import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import Emoji from 'react-emoji-render';

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
          date: `${this.currentYear}-07-16`,
        },
        {
          title: 'Wedding Anniversary',
          date: `${this.currentYear}-09-23`,
        },
        {
          title: 'Beck\'s Birthday',
          date: `${this.currentYear}-12-27`,
        },
        {
          title: 'My Birthday',
          date: `${this.currentYear}-11-19`,  
        },
        {
          title: 'Dating Anniversary',
          date: `${this.currentYear}-04-15`,
        },
        {
          title: 'Kobber\'s Birthday',
          date: `${this.currentYear}-07-31`,
        },
        {
          title: 'X-mas',
          date: `${this.currentYear}-12-25`,
        },
        {
          title: 'Testing 5 days from now',
          date: `${this.currentYear}-05-20`,
        },
        {
          title: 'Testing 4 days from now',
          date: `${this.currentYear}-05-19`,
        },
        {
          title: 'Testing today',
          date: `${this.currentYear}-05-15`,
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

  getDateItems = () => (
    this.state.events.map((event, i) => (
      <div key={event.title}>
        <div className="hs-line no-transp font-alt mb-10">
          <span>{event.title}</span>
          <TrackVisibility partialVisibility>
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
                return (<div className="hs-line-6"><CountUp start={0} end={this.getTimeDifference(event.date)} /> Days</div>)
              }
              return 'Uh oh! Invalid data.'
            }}
          </TrackVisibility>
        </div>
        <br />
      </div>
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
                      <br />
                        { this.getDateItems() }
                      <br />
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