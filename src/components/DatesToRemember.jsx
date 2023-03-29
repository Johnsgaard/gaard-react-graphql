import React, { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Emoji from "react-emoji-render";

import Cohen from "../images/CohenLarge.png";
import Scout from "../images/Scout.png";
import Wedding from "../images/wedding.png";
import ActualWedding from "../images/actualWedding.png";
import Becks from "../images/Becks.png";
import Me from "../images/Me.png";
import Dating from "../images/dating.png";
import Kobber from "../images/Kobber.png";
import Xmas from "../images/xmas.png";

// page components
import ParallaxBreak from "./ParallaxBreak";
import Footer from "./Footer";

const DatesPage = () => {
  const currentYear = new Date().getFullYear();
  const [events, setEvents] = useState([
    {
      title: "Cohen's Birthday",
      date: `Jul 16, ${currentYear}`,
      image: Cohen,
      actualDate: "Jul 16, 2018",
    },
    {
      title: "Scout's Birthday",
      date: `Jun 19, ${currentYear}`,
      image: Scout,
      actualDate: "Jun 19, 2020",
    },
    {
      title: "Wedding Anniversary",
      date: `Sep 23, ${currentYear}`,
      image: Wedding,
      actualDate: "Sept 23, 2017",
    },
    {
      title: "Actual Wedding Anniversary",
      date: `Jul 23, ${currentYear}`,
      image: ActualWedding,
      actualDate: "Jul 23, 2017",
    },
    {
      title: "Beck's Birthday",
      date: `Dec 27, ${currentYear}`,
      image: Becks,
      actualDate: "Dec 27, 1991",
    },
    {
      title: "My Birthday",
      date: `Nov 19, ${currentYear}`,
      image: Me,
      actualDate: "Nov 19, 1991",
    },
    {
      title: "Dating Anniversary",
      date: `Apr 15, ${currentYear}`,
      image: Dating,
      actualDate: "Apr 15, 2010",
    },
    {
      title: "Kobber's Birthday",
      date: `Jul 31, ${currentYear}`,
      image: Kobber,
      actualDate: "Jul 31, 2015",
    },
    {
      title: "X-mas",
      date: `Dec 25, ${currentYear}`,
      image: Xmas,
    },
  ]);

  const getTimeDifference = (stringDate) => {
    const currentDate = new Date();
    const formattedDate = new Date(stringDate);
    const diffTime = formattedDate.getTime() - currentDate.getTime();
    if (Math.ceil(diffTime / (1000 * 60 * 60 * 24)) < 0) {
      return 365 + Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getYearDifferenceFromNow = (date) => {
    const now = new Date();
    const then = new Date(date);
    let diff = (now.getTime() - then.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    if (isNaN(diff)) {
      return 0;
    }
    return Math.abs(Math.round((diff / 365.25) * 10) / 10);
  };

  const getDateItems = () =>
    events.map((event) => (
      <li key={event.title} className="clearfix">
        <img
          src={event.image}
          alt={event.title}
          className="widget-posts-img date-img"
        />
        <div className="col-md-12 col-sm-12 mb-sm-50 mb-xs-30">
          <span className="ci-title font-alt">{event.title}</span>
          <TrackVisibility offset={1000}>
            {({ isVisible }) => {
              if (isVisible === true) {
                if (getTimeDifference(event.date) === 0) {
                  return (
                    <div className="hs-green-n-bold">
                      <Emoji text=":tada:" />
                      Yey!
                      <Emoji text=":tada:" />
                      <div className="mb-40">
                        <strong>{event.actualDate}</strong>
                        <h5 className="red">
                          {getYearDifferenceFromNow(event.actualDate)}
                          &nbsp;Years
                        </h5>
                      </div>
                    </div>
                  );
                }
                if (getTimeDifference(event.date) <= 5) {
                  return (
                    <div className="hs-green-n-bold small">
                      <Emoji text=":sparkles:" />
                      <CountUp start={0} end={getTimeDifference(event.date)} />
                      {getTimeDifference(event.date) > 1 ? "Days" : "Day"}
                      <Emoji text=":sparkles:" />
                      <div className="mb-40">
                        <strong>{event.actualDate}</strong>
                        <h5 className="count-number">
                          {getYearDifferenceFromNow(event.actualDate)}
                          &nbsp;Years
                        </h5>
                      </div>
                    </div>
                  );
                }
                return (
                  <div>
                    <div className="hs-line-red">
                      <CountUp start={0} end={getTimeDifference(event.date)} />
                      &nbsp;Days
                    </div>
                    <br />
                    <div className="mb-40">
                      <strong>{event.actualDate}</strong>
                      <h5 className="red">
                        {getYearDifferenceFromNow(event.actualDate)}
                        &nbsp;Years
                      </h5>
                    </div>
                  </div>
                );
              }
              return <div style={{ minHeight: "80px" }}>&nbsp;</div>;
            }}
          </TrackVisibility>
        </div>
        <br />
      </li>
    ));

  const oneDay = 86400000;
  useEffect(() => {
    if (!Notification || Notification.permission) {
      return;
    }
    if (Notification.permission === "denied") {
      Notification.requestPermission();
    } else {
      const interval = setInterval(() => {
        // Every day this will check if an event is within 30 days and count down :)
        const filteredEvents = events.filter((event) => {
          const diffTime = Math.abs(new Date(event.date) - new Date());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays < 30) {
            return true;
          }
        });

        if (filteredEvents.length >= 1) {
          filteredEvents.forEach((event) => {
            const diffTime = Math.abs(new Date(event.date) - new Date());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            // Delay each notification by one second
            const timer = setTimeout(() => {
              new Notification(`👁️🫦👁️ ${event.title}`, {
                body: `${event.title} is ${diffDays} day(s) away`,
                icon: "https://gaard.ca/favicon.ico",
              });
            }, 1000);
            return () => clearTimeout(timer);
          });
        }
      }, oneDay);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="appear-animate">
      <div className="page" id="top">
        <section className="page-section bg-light" data-background="" id="home">
          <div className="relative container">
            <div className="home-content">
              <div className="home-text">
                <div className="hs-cont">
                  <div className="hs-wrap red">
                    <input
                      type="button"
                      onClick={() =>
                        Notification?.requestPermission() ||
                        alert("Sorry no support for notifications")
                      }
                      className="hs-line-10 btn btn-mod btn-w btn-circle btn-medium chill-animation mb-5"
                      value="👁️🫦👁️"
                    />
                    <div className="widget-body">
                      <ul className="clearlist widget-posts">
                        {getDateItems()}
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
};

export default DatesPage;
