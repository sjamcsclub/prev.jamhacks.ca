import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { media } from '../../../utils/media';

import Header from '../../../components/Typography/Header';
import { motion } from 'framer-motion';
import { speakers } from '../../../data/speakers';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const API_KEY = process.env.REACT_APP_GMAP_API_KEY;

const MapComponent = withScriptjs(
  withGoogleMap(({}) => {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 43.4716, lng: -80.529678 }}
      >
        <Marker position={{ lat: 43.47496, lng: -80.529678 }} />
      </GoogleMap>
    );
  }),
);

const VenueSection = ({}) => {
  return (
    <Container id="venue-info-section">
      <Header data-aos="fade-up">Venue</Header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100px` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `600px`, width: '700px' }} />}
        />

        <p style={{ fontSize: '1.2rem' }}>
          <strong>Location</strong>: Lazaridis School of Business and Economics,
          64 University Ave W, Waterloo, ON N2L 3C7
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  z-index: 1;
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

export default VenueSection;
