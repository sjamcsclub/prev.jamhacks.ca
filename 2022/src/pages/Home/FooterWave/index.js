import React, { useEffect, useState } from 'react';
import Newsletter from '../../../components/Newsletter';

const Wave = function () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      height="500"
      width="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', bottom: -10 }}
    >
      <path
        fill="#7b0ef7"
        fill-opacity="1"
        d="M0,128L60,112C120,96,240,64,360,58.7C480,53,600,75,720,90.7C840,107,960,117,1080,133.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
};

const FooterWave = function () {
  const [waveHeight, setWaveHeight] = useState(0);

  return (
    <div
      style={{
        height: '0px',
        zIndex: 1,
        background: '#7b0ff7',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '0px',
          padding: '-2px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 90,
            marginLeft: 120,
            zIndex: 2,
            padding: '20px',
            color: 'white',
            width: '80%',
          }}
        >
          <h1 style={{ color: 'white' }}>Still got a question?</h1>
          <p>
            Feel free to send us an email at{' '}
            <a style={{ color: 'lightgrey' }}>contact@jamhacks.ca</a>{' '}
          </p>
          <h1 style={{ color: 'white' }}>Subscribe to Newsletter</h1>
          <Newsletter />
        </div>
        <Wave />
      </div>
    </div>
  );
};

export default FooterWave;
