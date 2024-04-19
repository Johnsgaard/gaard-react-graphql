import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// page components
import ParallaxBreak from './ParallaxBreak';
import Footer from './Footer';

const BuoyItem = ({
  pageTime,
  waveHeight,
  waterTemp,
  wavePeriod,
  code,
  nextScrape,
  wind,
  pressure,
  airTemp,
}) => (
  <div class="col-md-4">
    <div class="pricing-item">
      <div class="pricing-item-inner round red">
        <div class="pricing-wrap">
          <div class="pricing-icon">
            <i class="fas fa-water" aria-hidden="true"></i>
          </div>
          <div class="pricing-title">{code}</div>
          <div class="pricing-features">
            <ul class="sf-list pr-list">
              <li>
                <span className="alt-features-descr">Wave Height -- </span>
                {waveHeight}m
              </li>
              <li>
                <span className="alt-features-descr">Wave Period -- </span>
                {wavePeriod} seconds
              </li>
              <li>
                <span className="alt-features-descr">Water Temp -- </span>
                {waterTemp}°C
              </li>
              <li>
                <span className="alt-features-descr">Wind -- </span>
                {wind}
              </li>
              <li>
                <span className="alt-features-descr">Air Temp -- </span>
                {airTemp}°C
              </li>
              <li>
                <span className="alt-features-descr">Air Pressure -- </span>
                {pressure}
              </li>
              <li>
                <span className="alt-features-descr">Scrape Time -- </span>
                {pageTime}
              </li>
              <li>
                <span className="alt-features-descr">Next Scrape -- </span>
                {nextScrape}
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

          <div class="pr-per">meters</div>
        </div>
      </div>
    </div>
  </div>
);

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
      <section class="page-section pt-0">
        <div class="container">
          <Query pollInterval={180000} query={BUOYS}>
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
                      <BuoyItem {...buoyItem} />
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
