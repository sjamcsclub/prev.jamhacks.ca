import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const BottomWave = () => {
  const [waveHeight, setWaveHeight] = useState(90);

  useScrollPosition(({ prevPos, currPos }) => {
    let val = currPos.y / window.innerHeight;
    let x = val * Math.PI;
    if (x > Math.PI) {
      x = Math.PI;
    }
    let height = Math.sin(x) * 300;
    if (height < 0) {
      height = Math.abs(height);
    }
    setWaveHeight(height);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        zIndex: 2,
        height: '0px',
      }}
    >
      {/* <svg
        preserveAspectRatio="none"
        width="100%"
        height={`${waveHeight}px`}
        viewBox="0 0 754 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', bottom: '-2px' }}
      >
        <path
          d="M0 144V0C123 0 106.5 56.5 192 56.5C273.5 56.5 327.5 0 392 0C456.5 0 503.474 56.5 581.5 56.5C646 56.5 718.833 27.8333 754 0V144H0Z"
          fill="#fff"
        />
      </svg> */}
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          width: '100%',
        }}
        height={`${waveHeight}px`}
      >
        <path
          fill="#7b0ff7"
          fill-opacity="1"
          d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,176C373.3,213,427,235,480,256C533.3,277,587,299,640,282.7C693.3,267,747,213,800,170.7C853.3,128,907,96,960,90.7C1013.3,85,1067,107,1120,112C1173.3,117,1227,107,1280,85.3C1333.3,64,1387,32,1413,16L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default BottomWave;
