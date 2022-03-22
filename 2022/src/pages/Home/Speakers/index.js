import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { media } from '../../../utils/media';

import Header from '../../../components/Typography/Header';
import { motion } from 'framer-motion';
import { speakers } from '../../../data/speakers';

const SpeakerDisplay = ({}) => {
  return (
    <Container id="speaker-section">
      <Header data-aos="fade-up">Keynote Speaker</Header>
      {speakers.map((val, i) => {
        return (
          <div data-aos="fade-up" key={val.name}>
            <Speaker key={i}>
              <motion.img
                src={val.headshot}
                alt={val.name}
                style={{ width: '20vmax' }}
                whileHover={{ scale: 0.95 }}
              ></motion.img>
              <div>
                <h2>{val.name}</h2>
                <i>
                  {val.title} - {val.company}
                </i>
                {val.biography}
              </div>
            </Speaker>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  z-index: 1;
  padding-top: 500px;
`;

const Speaker = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
  flex-wrap: wrap;
  i {
    margin-bottom: 10px;
    // margin-top: -10px;
    display: block;
  }
  h2 {
    display: inline-block;
    margin: 0;
  }
  div {
    width: 70%;
    flex-grow: 1;
  }
  ${media('md')`
    gap: 30px;
  `}
`;

export default SpeakerDisplay;
