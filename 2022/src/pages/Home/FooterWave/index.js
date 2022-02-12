import React, { useEffect, useState } from 'react';
import Newsletter from '../../../components/Newsletter';
import './FooterWave.css';

const Wave = function () {
  return (
    <svg
      height="250"
      width="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', bottom: -10 }}
      viewBox="0 0 754 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M754 194.999V29C672 18.5 648.5 47 530 58C448.849 65.533 388 55.4386 345 42C302 28.5614 249.71 15.9141 191.5 5.80188C66 -15.9999 0 36 0 36V194.999H754Z"
        fill="#7B0FF7"
      />
    </svg>
  );
};

const Wave2 = function () {
  return (
    <svg
      height="250"
      width="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', bottom: -10 }}
      viewBox="0 0 755 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 216.999V56.9999C123 56.9999 73.5 83.4999 150 87.9999C231.359 92.7858 274 70.4386 317 56.9999C360 43.5613 510.5 0.500098 629.5 0.5C756.88 0.499896 754 58 754 58V216.999H0Z"
        fill="#B600FF"
      />
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
          display: 'flex',
        }}
      >
        <div className="footer-wave-inner-div">
          <h1 style={{ color: 'white' }}>Subscribe to our Newsletter</h1>
          <Newsletter location="footer" />
        </div>
        <Wave2 />
        <Wave />
      </div>
    </div>
  );
};

export default FooterWave;
