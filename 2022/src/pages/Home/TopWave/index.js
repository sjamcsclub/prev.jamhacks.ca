import React, { useEffect, useState } from 'react';

const Wave = function ({ height, colour, bottom }) {
  return (
    <svg
      preserveAspectRatio="none"
      width="100%"
      height={`${height * 0.75}px`}
      viewBox="0 0 754 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', bottom }}
    >
      <path
        d="M0 144V0C123 0 106.5 56.5 192 56.5C273.5 56.5 327.5 0 392 0C456.5 0 503.474 56.5 581.5 56.5C646 56.5 718.833 27.8333 754 0V144H0Z"
        fill={colour}
      />
    </svg>
  );
};

const TopWave = function () {
  const [waveHeight, setWaveHeight] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const navbar = 80; // accounting for navbar height
      const val = window.pageYOffset / (window.innerHeight - navbar);
      let x = val * Math.PI;
      if (x > Math.PI) {
        x = Math.PI;
      }
      let height = Math.sin(x) * 400;
      if (height < 0) {
        height = Math.abs(height);
      }
      setWaveHeight(height);
    };
  }, []);

  return (
    <div style={{ width: '100%', zIndex: 2, height: '0px' }}>
      <Wave height={waveHeight} colour="#b600ff" bottom="-1px" />
      <Wave height={waveHeight * 0.75} colour="#7b0ff7" bottom="-2px" />
    </div>
  );
};

export default TopWave;
