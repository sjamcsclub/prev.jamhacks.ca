import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { media } from '../../../utils/media';

import './SponsorDisplay.css';

import Header from '../../../components/Typography/Header';
import { motion } from 'framer-motion';
import {
  blueberry,
  strawberry,
  grape,
  peach,
  partners,
} from '../../../data/sponsors';

const SponsorDisplay = ({}) => {
  return (
    <Container>
      <Header data-aos="fade-up">Past Sponsors</Header>
      <Tier data-aos="fade-up">
        {blueberry.map((val, i) => {
          return (
            <Blueberry key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={val.logo}
              ></motion.img>
            </Blueberry>
          );
        })}
      </Tier>
      <Tier data-aos="fade-up">
        {strawberry.map((val, i) => {
          return (
            <Strawberry key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={val.logo}
              ></motion.img>
            </Strawberry>
          );
        })}
      </Tier>
      <Tier data-aos="fade-up">
        {grape.map((val, i) => {
          return (
            <Grape
              key={i}
              href={val.link}
              target="_blank"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={val.logo}
              ></motion.img>
            </Grape>
          );
        })}
      </Tier>
      <Tier data-aos="fade-up">
        {peach.map((val, i) => {
          return (
            <Peach key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={val.logo}
              ></motion.img>
            </Peach>
          );
        })}
      </Tier>
      <Header
        className="sponsor-display-title-div large-title"
        data-aos="fade-up"
      >
        Past Partners
      </Header>
      <Tier data-aos="fade-up">
        {partners.map((val, i) => {
          return (
            <Partner key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={val.logo}
              ></motion.img>
            </Partner>
          );
        })}
      </Tier>
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;

const Tier = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Blueberry = styled.a`
  width: 100%;
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Strawberry = styled.a`
  width: 80%;
  ${media('md')`
    width: 85%;
  `}
  ${media('sm')`
    width: 90%;
  `}
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Grape = styled.a`
  width: 32%;
  ${media('sm')`
    width: 48%;
  `}
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Peach = styled.a`
  ${media('md')`
    width: 30%;
  `}
  ${media('sm')`
    width: 45%;
  `}
  img {
    width: 100%;
  }
  width: 22%;
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Partner = styled.a`
  ${media('md')`
    width: 45%;
  `}
  img {
    width: 100%;
  }
  width: 31%;
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

export default SponsorDisplay;
