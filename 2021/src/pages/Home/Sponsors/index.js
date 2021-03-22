import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import './SponsorDisplay.css';

import Header from '../../../components/Typography/Header';

import { strawberry, grape, peach } from '../../../data/sponsors';

const SponsorDisplay = ({}) => {
  return (
    <Container>
      <Header data-aos="fade-up">Sponsors</Header>
      <div
        className="sponsor-display-content-div"
        data-aos="fade-up"
        style={{ marginBottom: '60px' }}
      >
        {strawberry.map((val) => {
          return (
            <a
              href={val.link}
              target="_blank"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '0px',
              }}
              className="strawberry-container"
            >
              <img
                src={val.logo}
                className="sponsor-display-item strawberry"
                style={{ marginBottom: '0px' }}
              ></img>
            </a>
          );
        })}
      </div>
      <div className="sponsor-display-content-div" data-aos="fade-up">
        {grape.map((val) => {
          return (
            <a
              href={val.link}
              target="_blank"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="grape-container"
            >
              <img src={val.logo} className="sponsor-display-item grape"></img>
            </a>
          );
        })}
      </div>
      <div className="sponsor-display-content-div" data-aos="fade-up">
        {peach.map((val) => {
          return (
            <a href={val.link} target="_blank" className="peach-container">
              <img src={val.logo} className="sponsor-display-item peach"></img>
            </a>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SponsorDisplay;
