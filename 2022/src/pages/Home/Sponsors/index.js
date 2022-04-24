import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { media } from '../../../utils/media';

import Header from '../../../components/Typography/Header';
import { motion } from 'framer-motion';
import {
  blueberry,
  strawberry,
  grape,
  peach,
  partners,
  partnersLarge,
} from '../../../data/sponsors';

const SponsorDisplay = ({}) => {
  return (
    <Container>
      <Header data-aos="fade-up" style={{ marginTop: 100 }}>
        Our Sponsors
      </Header>
      <Tier data-aos="fade-up">
        {blueberry.map((val, i) => {
          return (
            <Blueberry key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
                src={val.logo}
              ></motion.img>
            </Peach>
          );
        })}
      </Tier>
      <Header data-aos="fade-up">Partners</Header>
      <Tier data-aos="fade-up">
        {partnersLarge.map((val, i) => {
          return (
            <PartnerLarge key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={val.logo}
              ></motion.img>
            </PartnerLarge>
          );
        })}
      </Tier>
      <Tier data-aos="fade-up">
        {partners.map((val, i) => {
          if (val.size === 'big') return null;

          return (
            <Partner key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.05 }}
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
  z-index: 1;
`;

const Tier = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Blueberry = styled.a`
  width: 40%;
  ${media('md')`
    width: 35%;
  `}
  ${media('sm')`
    width: 35%;
  `}
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Strawberry = styled.a`
  width: 30%;
  ${media('md')`
    width: 25%;
  `}
  ${media('sm')`
    width: 25%;
  `}
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Grape = styled.a`
  width: 25%;
  ${media('md')`
    width: 20%;
  `}
  ${media('sm')`
    width: 20%;
  `}
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

const Peach = styled.a`
  width: 20%;
  ${media('md')`
    width: 15%;
  `}
  ${media('sm')`
    width: 15%;
  `}
  img {
    width: 100%;
  }
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

const PartnerLarge = styled.a`
  ${media('md')`
    width: 45%;
  `}
  img {
    width: 100%;
  }
  width: 60%;
  img {
    width: 100%;
    box-sizing: border-box;
    padding: 5%;
  }
`;

export default SponsorDisplay;
