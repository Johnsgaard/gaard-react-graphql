import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Typist from 'react-text-typist';

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
    const updateDataLoading = setTimeout(() => {
      setDataLoading([]);
      setNextState(data);
    }, 105000);
    return () => clearTimeout(updateDataLoading);
  }, [data]);

  return (
    <div className="col-md-4">
      <div className="pricing-item">
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
                <li
                  className={`${
                    dataLoading.includes('nextScrape') ? 'hs-green-rainbow' : ''
                  }`}
                >
                  <span className="alt-features-descr">Next Scrape -- </span>
                  <Typist
                    hideCursorOnFinish
                    sentences={[nextScrape]}
                    loop={false}
                  />
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
  return (
    <div className="appear-animate">
      <div className="page" id="top" />
      <section className="page-section pt-0">
        <div className="container">
          <Query pollInterval={30000} query={BUOYS}>
            {({ loading, error, data }) => {
              if (loading) {
                return <div className="loading-spinner" />;
              }
              if (error) {
                return <div className="loading-spinner" />;
              }
              const { buoys } = data;
              return (
                <div className="row">
                  {buoys
                    .filter((buoy) => buoy.waveHeight)
                    .map((buoyItem) => (
                      <BuoyItem key={buoyItem.code} {...buoyItem} />
                    ))}
                </div>
              );
            }}
          </Query>
        </div>
      </section>
      <ParallaxBreak type="universe" size="500px" height="13px" />
      <Footer />
    </div>
  );
};

export default SurfReport;
