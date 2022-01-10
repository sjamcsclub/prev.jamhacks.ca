import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Wave = ({ colour, height }) => {
  return (
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        width: '100%',
        position: 'absolute',
      }}
      height={`${height * 0.6}px`}
    >
      <path
        fill={colour}
        d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,176C373.3,213,427,235,480,256C533.3,277,587,299,640,282.7C693.3,267,747,213,800,170.7C853.3,128,907,96,960,90.7C1013.3,85,1067,107,1120,112C1173.3,117,1227,107,1280,85.3C1333.3,64,1387,32,1413,16L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
      ></path>
    </svg>
  );
};

// Lock Animation
const lock = true;

const BottomWave = () => {
  const [waveHeight, setWaveHeight] = useState(90);
  const [blockHeight, setBlockHeight] = useState(200);

  useScrollPosition(({ prevPos, currPos }) => {
    let val =
      (Math.abs(currPos.y) -
        (document.getElementById('bottom-wave').offsetTop +
          50 -
          window.innerHeight)) /
      (1.2 * window.innerHeight);
    if (val < 0) {
      val = 0;
    }

    let x = val * Math.PI;
    console.log(x);
    if (lock) {
      if (x > Math.PI / 2) {
        x = Math.PI / 2;
      }
    } else {
      if (x > Math.PI) {
        x = Math.PI;
      }
    }

    let height = Math.sin(x) * 400;
    if (height < 0) {
      height = Math.abs(height);
    }
    setWaveHeight(height);

    val =
      (Math.abs(currPos.y) -
        (document.getElementById('sponsor-section').offsetTop +
          0 -
          window.innerHeight)) /
      window.innerHeight;
    if (lock) {
      if (x >= Math.PI * 0.55) {
        val = 0.5;
      }
    }
    setBlockHeight(val * 200);
  }, []);

  return (
    <div
      id="bottom-wave"
      style={{
        width: '100%',
        zIndex: 2,
        height: '0px',
        position: 'relative',
        top: '-5px',
      }}
    >
      <div
        style={{
          width: '100%',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
        }}
        id="bottom-wave-block"
      >
        <div
          style={{
            height: `${blockHeight}px`,
            width: '100%',
            background: '#7b0ff7',
          }}
        ></div>
        <div>
          <Wave height={waveHeight} colour="#b600ff" />
          <Wave height={0.6 * waveHeight} colour="#7b0ff7" />
        </div>
      </div>
    </div>
  );
};

export default BottomWave;
