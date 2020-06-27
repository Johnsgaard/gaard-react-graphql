import React from 'react';
import TrackVisibility from 'react-on-screen';
import { AgeFromDateString } from 'age-calculator';
import CountUp from 'react-countup';
import CountTo from 'react-count-to';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// software logos
import laravel from '../images/logos/laravel.svg';
import react from '../images/logos/react.svg';
import immutable from '../images/logos/immutable.svg';
import node from '../images/logos/nodejs.svg';
import npm from '../images/logos/npm.svg';
import html from '../images/logos/html.svg';
import redux from '../images/logos/redux.svg';
import git from '../images/logos/git.svg';
import mysql from '../images/logos/mysql.svg';
import ios from '../images/logos/ios.svg';
import android from '../images/logos/android.svg';
import graphql from '../images/logos/graphql.svg';
import apollo from '../images/logos/apollo.svg';
import docker from '../images/logos/docker.svg';
import github from '../images/logos/github.svg';
import gitlab from '../images/logos/gitlab.svg';
import jira from '../images/logos/jira.svg';
import prisma from '../images/logos/prisma.svg';
import amazon from '../images/logos/amazon.svg';

const CONTRIBUTIONS = gql`
{
  viewer {
    contributionsCollection {
      totalIssueContributions
      totalCommitContributions
      totalRepositoryContributions
      totalPullRequestReviewContributions
      totalPullRequestContributions
      restrictedContributionsCount
    }
  }
}
`;

const Resume = () => (
  <section className="page-section" id="resume">
      <div className="container relative">
        <h3 className="section-title font-alt mb-70 mb-sm-40">
          Résumé
        </h3>
        { /* Experience */ }
        <div className="section-text mb-20 mb-sm-10">
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-sm-50 mb-xs-30">
              Talented and professional Web Developer with experience in design, software architecture, development, deployment, and management of web applications.
            </div>
          </div>
        </div>
        <TrackVisibility partialVisibility>
        {({isVisible}) => (
          <div className="section-text mb-20 mb-sm-10">
            <div className="row">

              <div className="col-md-6 mb-sm-50 mb-xs-30">

                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? (<CountTo from={70} to={100} speed={100}>
                      {(value) => {
                        const barWidth = value ? value : 100;
                        const barPercentString = `${barWidth}%`;
                        return (
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: barPercentString}}
                        >
                          HTML / CSS <span>{barPercentString}</span>
                        </div>
                      )}}
                    </CountTo>) : null}
                </div>
                { /* End Bar Item */ }

                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? ( <CountTo from={70} to={95} speed={95}>
                    {(value) => {
                      const barWidth = value ? value : 0;
                      const barPercentString = `${barWidth}%`;
                      return (
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: barPercentString}}
                      >
                        JS / React / Node / GraphQL <span>{barPercentString}</span>
                      </div>
                    )}}
                  </CountTo>) : null}
                </div>
                { /* End Bar Item */ }

                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? (<CountTo from={70} to={90} speed={90}>
                    {(value) => {
                      const barWidth = value ? value : 0;
                      const barPercentString = `${barWidth}%`;
                      return (
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: barPercentString}}
                      >
                        Servers / Deployment <span>{barPercentString}</span>
                      </div>
                    )}}
                  </CountTo>) : null}
                </div>
                { /* End Bar Item */ }

              </div>
              <div className="col-md-6 mb-sm-50 mb-xs-30">
                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? (<CountTo from={70} to={90} speed={100}>
                    {(value) => {
                      const barWidth = value ? value : 0;
                      const barPercentString = `${barWidth}%`;
                      return (
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: barPercentString}}
                      >
                        Git / AWS / Tools <span>{barPercentString}</span>
                      </div>
                    )}}
                  </CountTo>) : null }
                </div>
                { /* End Bar Item */ }

                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? (<CountTo from={70} to={85} speed={100}>
                    {(value) => {
                      const barWidth = value ? value : 0;
                      const barPercentString = `${barWidth}%`;
                      return (
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: barPercentString}}
                      >
                        UI / UX / Design <span>{barPercentString}</span>
                      </div>
                    )}}
                  </CountTo>) : null }
                </div>
                { /* End Bar Item */ }

                { /* Bar Item */ }
                <div className="progress tpl-progress">
                  {isVisible
                    ? (<CountTo from={70} to={100} speed={100}>
                    {(value) => {
                      const barWidth = value ? value : 0;
                      const barPercentString = `${barWidth}%`;
                      return (
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: barPercentString}}
                      >
                        Team player / Enjoy what I do <span>{barPercentString}</span>
                      </div>
                    )}}
                  </CountTo>) : null }
                </div>
                { /* End Bar Item */ }
              </div>
            </div>
          </div>
        )}
        </TrackVisibility>
        <hr className="mt-0 mb-20 " />
        <div className="section-text mb-60 mb-sm-40">
          <div className="row">
            { /* Section Title */ }
            <div className="col-sm-3">
                <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Work &amp; Experience</h2>
            </div>
            { /* End Section Title */ }

            { /* Section Content */ }
            <div className="col-sm-9">
              <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                { /* Project Detail */ }
                <div className="work-detail">
                  <h5 className="font-alt mt-0 mb-20">VizworX</h5>
                  <div className="work-full-detail">
                    <p>
                      <strong>Project:</strong> Admin portal<br /> Energy artifact visualization <br />Government data visualization <br />Android App
                    </p>
                    <p>
                      <strong>Date:</strong> Jan 2018 - current
                    </p>
                    <p>
                      <strong>Website:</strong>
                      <a href="http://www.vizworx.com" rel="noopener noreferrer" target="_blank">vizworx.com</a>
                    </p>
                    <div><strong>tl;dr</strong></div>
                    <div>
                      <a tooltip="GraphQL" flow="left" href="https://graphql.org/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={graphql} alt="GraphQL" />
                      </a>
                      <a tooltip="Apollo" href="https://www.apollographql.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={apollo} alt="Apollo" />
                      </a>
                      <a tooltip="Prisma" href="https://www.prisma.io/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={prisma} alt="Prisma" />
                      </a>
                      <a tooltip="React" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={react} alt="React" />
                      </a>
                      <a tooltip="Redux" href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={redux} alt="redux" />
                      </a>
                      <span tooltip="HTML5">
                        <img className="devlogo" src={html} alt="HTML5" />
                      </span>
                      <a tooltip="Android" href="https://www.android.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={android} alt="Android" />
                      </a>
                      <a tooltip="NodeJS" href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={node} alt="node" />
                      </a>
                      <a tooltip="npm" href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={npm} alt="npm" />
                      </a>
                      <a tooltip="Docker" href="https://www.docker.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={docker} alt="docker" />
                      </a>
                      <a tooltip="AWS" href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={amazon} alt="AWS" />
                      </a>
                      <a tooltip="MySQL" href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={mysql} alt="mysql" />
                      </a>
                      <a tooltip="Jira" href="https://www.atlassian.com/software/jira" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={jira} alt="jira" />
                      </a>
                      <a tooltip="Gitlab" href="https://gitlab.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={gitlab} alt="gitlab" />
                      </a>
                      <a tooltip="git" flow="right" href="https://git-scm.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={git} alt="git" />
                      </a>
                    </div>
                  </div>
                </div>
                { /* End Project Detail */ }

              </div>

              <div className="col-md-8 col-sm-6 mb-sm-50 mb-xs-30">
                <p>
                  As the lead developer / team lead for this project, I determined the technology stack and design for our clients product.
                  I was first tasked with developing an admin portal so that the client would be able to log into their platform and update their data with ease.
                  I decided to work with React.js / Apollo for the client side and Graphcool as a backend framework, using GraphQL as my query language. I first determined
                  the required database schema from the client and implemented all of the models and subscriptions required. After implementing an intuitive solution for
                  the client to manage their data, I then moved onto the main visualization aspect of the project.</p>
                <p>
                  For the visualization, I worked closely with the designer and client to determine the best interface for their data. During design phases, a critical step was to determine
                  a tool that had the most optimal performance for browsers. After stress testing browsers with images, I selected Canvas as my rendering component. I worked closely
                  with co-workers in an agile development cycle to deliver client requirements and weekly updates.
                </p>
                <p>
                  For both platforms I used various services / tools to host – these included AWS S3 buckets, Docker containers, and DigitalOcean. Deployments and versioning was a split task between
                  myself and another co-worker to perform database backups, testing and pushing code up to production.
                </p>
                <p>
                  In order to keep the project on-track and in-line with requirements, I had weekly demonstrations, frequent communication and sprint scheduling with the client.
                </p>
              </div>
            </div>
            <div className="col-sm-offset-3 col-sm-9">
              <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                { /* Project Detail */ }
                <div className="work-detail">
                  <h5 className="font-alt mt-0 mb-20">Aware 360</h5>
                  <div className="work-full-detail">
                    <p>
                      <strong>Project:</strong> Aware360 Platform
                    </p>
                    <p>
                      <strong>Date:</strong> Nov 2014 - Jan 2018
                    </p>
                    <p>
                      <strong>Website:</strong>
                      <a href="http://www.aware360.com" rel="noopener noreferrer" target="_blank">aware360.com</a>
                    </p>
                      <div><strong>tl;dr</strong></div>
                      <div>
                        <a tooltip="Laravel" flow="left" href="https://laravel.com/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={laravel} alt="Laravel" />
                        </a>
                        <a tooltip="React" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={react} alt="React" />
                        </a>
                        <a tooltip="redux" href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={redux} alt="redux" />
                        </a>
                        <a tooltip="Immutable" href="https://immutable-js.github.io/immutable-js/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={immutable} alt="Immutable" />
                        </a>
                        <span tooltip="HTML5">
                          <img className="devlogo" src={html} alt="HTML5" />
                        </span>
                        <a tooltip="NodeJS" href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={node} alt="node" />
                        </a>
                        <a tooltip="npm" href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={npm} alt="npm" />
                        </a>
                        <a tooltip="GitHub" href="https://github.com/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={github} alt="gitlab" />
                        </a>
                        <a tooltip="git" href="https://git-scm.com/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={git} alt="git" />
                        </a>
                        <a tooltip="Jira" href="https://www.atlassian.com/software/jira" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={jira} alt="jira" />
                        </a>
                        <a tooltip="mysql" flow="right" href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank">
                          <img className="devlogo" src={mysql} alt="mysql" />
                        </a>
                      </div>
                  </div>
                </div>
                { /* End Project Detail */ }

              </div>

              <div className="col-md-8 col-sm-6 mb-sm-50 mb-xs-30">
                At Aware360 I was responsible for creating and optimizing components to be used on their innovative real time web application.
                Throughout this process I grew as a developer, designer and team player. I broadened my experience with languages and development tools, and the most
                important part is that I enjoyed every bit of it. Git, JIRA and development were a daily routine and helped me accomplish all of my tasks on time and to spec.
                Throughout my career at Aware360 I had the opportunity to work with PHP (Laravel), HTML, SCSS, Javascript, JQuery, React, Node, NPM, MySQL, and C#.
              </div>
            </div>
          </div>
        </div>
        <div className="section-text mb-60 mb-sm-40">
          <div className="row">
            <div className="col-sm-offset-3 col-sm-9">
              <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                { /* Project Detail */ }
                <div className="work-detail">
                  <h5 className="font-alt mt-0 mb-20">Freelance Development</h5>
                  <div className="work-full-detail">
                    <p>
                      <strong>Clients:</strong> Available upon request
                    </p>
                    <p>
                      <strong>Date:</strong> 2014 - current
                    </p>
                    <div><strong>tl;dr</strong></div>
                    <div>
                      <a tooltip="iOS" flow="left" href="https://apple.ca/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={ios} alt="iOS" />
                      </a>
                      <a tooltip="React" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={react} alt="React" />
                      </a>
                      <a tooltip="Android" flow="right" href="https://www.android.com/" rel="noopener noreferrer" target="_blank">
                        <img className="devlogo" src={android} alt="Android" />
                      </a>
                    </div>
                  </div>
                </div>
                { /* End Project Detail */ }

              </div>

              <div className="col-md-8 col-sm-6 mb-sm-50 mb-xs-30">
                What I love most about meeting new clients is hearing about their story and goals and envisioning a product that completely matches their personality.
                I like to follow the agile development lifecycle and incorporate the client(s) every step of the way. I always strive for 100% satisfaction with development no matter how large or small the project may be.
              </div>
            </div>
          </div>
        </div>
        { /* End Experience */ }
        <hr className="mt-0 mg-40" />
        <div className="section-text mb-60 mb-sm-40">
          <div className="row">
              { /* Section Title */ }
              <div className="col-sm-3">
                  <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Education</h2>
              </div>
              { /* End Section Title */ }

              { /* Section Content */ }
              <div className="col-sm-9">
                  <div className="section-text">
                      <div className="row">
                          <div className="col-md-2 black">2012–2014</div>
                          <div className="col-md-10">
                              <h4 className="mt-0">SAIT, Diploma in IT Majoring in Software Development</h4>
                              <div className="section-text">
                                <ul>
                                  <li>Followed Optimal Flexible Architecture Standards for Oracle 11g on a Windows platform</li>
                                  <li>Developed a fully functional java enterprise application for a second-year project</li>
                                  <li>Knowledgeable and experienced with the use and application of HTML 5, CSS 3, Java Script, JQuery, Java, SQL and PLSQL</li>
                                  <li>Experience with MySQL, Oracle 10g and 11g, OEM, Netbeans, Eclipse, Glassfish 4.0, SVN, and Apache</li>
                                  <li>Demonstrated strong leadership skills through extensive group work</li>
                                  <li>Developed a strong sense of interface design through a first-year software development course and numerous web application projects</li>
                                  <li>Gained experience in problem solving and critical thinking by carrying out tasks with an open mind and creativity</li>
                                </ul>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              { /* End Section Content */ }

          </div>
        </div>

        { /* Counters */ }
        <TrackVisibility partialVisibility>
          {({ isVisible }) => {
            return (
              <div className="count-wrapper mb-60 mb-sm-40">
                <div className="row">
                  { /* Counter Item */ }
                  <div className="col-xs-6 col-sm-3">
                    <div className="count-number">
                      { isVisible ? <CountUp start={0} end={new AgeFromDateString('1991-11-19').age} /> : 0}
                    </div>
                    <div className="count-descr font-alt">
                      <i className="fa fa-heart-o"></i>
                      <span className="count-title"> Age</span>
                    </div>
                  </div>
                  { /* End Counter Item */ }

                  { /* Counter Item */ }
                  <div className="col-xs-6 col-sm-3">
                    <div className="count-number">
                      { isVisible ? <CountUp start={0} end={new AgeFromDateString('2014-01-01').age} /> : 0}
                    </div>
                    <div className="count-descr font-alt">
                      <i className="fa fa-code"></i>
                      <span className="count-title"> Years exp.</span>
                    </div>
                  </div>
                  { /* End Counter Item */ }

                  { /* Counter Item */ }
                  <div className="col-xs-6 col-sm-3">
                    <div className="count-number">
                      <Query pollInterval={3500} query={CONTRIBUTIONS}>
                        {({loading, error, data, startPolling, stopPolling}) => {
                          if (loading) { return <div className="loading-spinner" />; }
                          if (error) { return <div className="loading-spinner" />;}
                          const { contributionsCollection } = data.viewer;
                          let totalCount =
                            contributionsCollection.totalIssueContributions + contributionsCollection.totalCommitContributions + contributionsCollection.totalRepositoryContributions + contributionsCollection.totalPullRequestReviewContributions + contributionsCollection.totalPullRequestContributions + contributionsCollection.restrictedContributionsCount;
                          return isVisible ? (<CountUp start={0} end={totalCount} />) : 0;
                        }}
                      </Query>
                    </div>
                    <div className="count-descr font-alt">
                      <i className="fa fa-github"></i>
                      <span className="count-title"> GitHub Contributions This Year</span>
                    </div>
                  </div>
                  { /* End Counter Item */ }

                  { /* Counter Item */ }
                  <div className="col-xs-6 col-sm-3">
                    <div className="count-number">
                      { isVisible ? <CountUp start={0} end={100} /> : 0}
                    </div>
                    <div className="count-descr font-alt">
                      <i className="fa fa-thumbs-o-up"></i>
                      <span className="count-title"> % Team player</span>
                    </div>
                  </div>
                  { /* End Counter Item */ }

                </div>
              </div>);
            }}
        </TrackVisibility>
        { /* End Counters */ }

      </div>
    </section>
);

export default Resume;
