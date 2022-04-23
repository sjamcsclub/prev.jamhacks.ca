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
} from '../../../data/sponsors';

const largeLogo = ['https://uwaterloo.ca/engineering/'];

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
      {partners.map((val, i) => {
        if (val.size !== 'big') return null;
        return (
          <Partner data-aos="fade-up" key={i} href={val.link} target="_blank">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={val.logo}
              style={{
                width: '30em',
              }}
            ></motion.img>
          </Partner>
        );
      })}
      <Tier data-aos="fade-up">
        {partners.map((val, i) => {
          if (val.size === 'big') return null;

          return (
            <Partner key={i} href={val.link} target="_blank">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={val.logo}
                style={{
                  width: '18em',
                }}
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
  position: relative;
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
    width: 55%;
  `}
  width: 31%;
  // img {
  //   width: 20em;
  //   box-sizing: border-box;
  //   padding: 5%;
  //   // border: 2px solid black;
  //   margin: 0;
  // }
  // .big-img {
  //   width: 35em;
  //   // position: absolute;
  //   // top: 0;
  //   // left: 14em;
  //   margin: 10em;
  }
`;

export default SponsorDisplay;
