import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// page components
import ParallaxBreak from './ParallaxBreak';
import Footer from './Footer';

const BuoyItem = (data) => {
  const {
    pageTime,
    waveHeight,
    waterTemp,
    wavePeriod,
    code,
    nextScrape,
    wind,
    pressure,
    airTemp,
  } = data;

  const [prevState, setNextState] = useState(data);

  const [dataLoading, setDataLoading] = useState([]);

  useEffect(() => {
    const changedKeys = Object.entries(prevState)
      .map(([k, v]) => {
        if (data[k] !== v) {
          return k;
        }
      })
      .filter((key) => key !== undefined);
    setDataLoading(changedKeys);
    // how long should the updated text colour remain
    const updateDataLoading = setTimeout(() => {
      setDataLoading([]);
      setNextState(data);
    }, 60000);
    return () => clearTimeout(updateDataLoading);
  }, [data]);

  const [timeLeft, setTimeLeft] = useState(
    Math.round((new Date(nextScrape).getTime() - new Date().getTime()) / 1000),
  );

  useEffect(() => {
    if (dataLoading.includes('nextScrape')) {
      setTimeLeft(
        Math.round(
          (new Date(nextScrape).getTime() - new Date().getTime()) / 1000,
        ),
      );
    }

    if (!timeLeft) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(Math.round(timeLeft) - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data, timeLeft, dataLoading]);

  // for all out of date buoys
  if (timeLeft < 0) {
    return null;
  }

  return (
    <div className="col-md-4">
      <div
        className={`pricing-item ${data.theme ? 'bg-dark light-content' : ''}`}
      >
        <div className="pricing-item-inner round red">
          <div className="pricing-wrap">
            <div className="pricing-icon">
              <i className="fas fa-water" aria-hidden="true"></i>
            </div>
            <div className="pricing-title ellipsis">{code}</div>
            <div className="pricing-features">
              <ul className="sf-list pr-list">
                <li
                  className={`${
                    dataLoading.includes('waveHeight') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Wave Height -- </span>
                  {waveHeight}m
                </li>
                <li
                  className={`${
                    dataLoading.includes('wavePeriod') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Wave Period -- </span>
                  {wavePeriod} seconds
                </li>
                <li
                  className={`${
                    dataLoading.includes('waterTemp') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Water Temp -- </span>
                  {waterTemp}°C
                </li>
                <li
                  className={`${
                    dataLoading.includes('wind') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Wind -- </span>
                  {wind}
                </li>
                <li
                  className={`${
                    dataLoading.includes('airTemp') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Air Temp --</span>
                  {airTemp}°C
                </li>
                <li
                  className={`${
                    dataLoading.includes('pressure') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Air Pressure -- </span>
                  {pressure}
                </li>
                <li
                  className={`${
                    dataLoading.includes('pageTime') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Page Time -- </span>
                  {pageTime}
                </li>
                <li className="hs-green-rainbow">
                  <span className="alt-features-descr">Next Scrape -- </span>
                  {timeLeft ? `${timeLeft} Seconds` : 'Now! 🤙🏻'}
                </li>
              </ul>
            </div>
            <TrackVisibility>
              {({ isVisible }) => (
                <span
                  className={`pricing-num ${
                    waveHeight > 1 ? 'hs-red-rainbow' : ''
                  }`}
                >
                  {isVisible ? (
                    <CountUp start={0} end={waveHeight} decimals={2} />
                  ) : (
                    0
                  )}
                </span>
              )}
            </TrackVisibility>

            <div className="pr-per">meters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SurfReport = () => {
  const BUOYS = gql`
    {
      buoys {
        pageTime
        waveHeight
        waterTemp
        wavePeriod
        code
        nextScrape
        wind
        updatedAt
        pressure
        name
        id
        createdAt
        airTemp
      }
    }
  `;

  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    // Function to update state when OS preference changes
    const handleChange = (e) => {
      setTheme(e.matches);
    };

    // Listen for changes in OS preference
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={`appear-animate ${theme ? 'bg-dark-lighter' : ''}`}>
      <div className="page" id="top" />
      <section className="page-section pt-0">
        <div className="container">
          <Query pollInterval={5000} query={BUOYS}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return <div className="loading-spinner" />;
              }
              const { buoys } = data;
              return (
                <div className="row mt-4">
                  {buoys
                    .filter((buoy) => buoy.waveHeight)
                    .map((buoyItem) => (
                      <BuoyItem
                        theme={theme}
                        key={buoyItem.code}
                        {...buoyItem}
                      />
                    ))}
                </div>
              );
            }}
          </Query>
        </div>
      </section>
      <ParallaxBreak type="universe" size="500px" height="13px" />
      <Footer theme={theme} />
    </div>
  );
};

export default SurfReport;
