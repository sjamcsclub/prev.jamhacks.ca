import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Day1Data } from './data/day1';
import { Day1Data_2 } from './data/day1_2';
import { Day2Data } from './data/day2';
import { Day3Data } from './data/day3';
import './style.css';
import { useEffect } from 'react';
import { useWindowDimensions } from '../../utils/useWindowDimensions';
import Swal from 'sweetalert2';

const ScheduleComponent = ({ data }) => {
  const { width } = useWindowDimensions();
  const gridWidth = width / 1.3;
  const defaultHeight = 80;
  const start = data[0].startTime,
    end = 23;
  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>
          {range.map((i) => (
            <p
              key={i}
              style={{
                color: 'purple',
                margin: 0,
                position: 'relative',
                height: `${defaultHeight}px`,
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'end',
                paddingRight: '5px',
                width: '100px',
                // border: '1px solid #ccc',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '-10px',
                }}
              >
                {i <= 12 ? i : i - 12}:00 {i < 12 || i === 24 ? 'AM' : 'PM'}
              </span>
            </p>
          ))}
        </div>
        <div style={{ width: gridWidth, position: 'relative' }}>
          {data.map((item, i) => (
            <div
              style={{
                position: 'absolute',
                top: `${(item.startTime - start) * defaultHeight}px`,
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                }}
              >
                {item.events.map((event, j) => (
                  <p
                    style={{
                      height: `${(event.duration / 60) * defaultHeight}px`,
                      background: 'gray',
                      width: '100%',
                      color: 'white',
                      textAlign: 'center',
                      border: '2px solid #ffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: width > 600 ? '15px' : '10px',
                      cursor:
                        event?.specialStyles?.background === '#13C6FF'
                          ? 'help'
                          : 'default',
                      ...event?.specialStyles,
                    }}
                    onClick={() => {
                      if (event?.specialStyles?.background === '#13C6FF') {
                        Swal.fire({
                          title: event.title,
                          html:
                            event?.description ||
                            'Workshop description coming soon!',
                          showCloseButton: true,
                        });
                      }
                    }}
                  >
                    {event.title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Schedule = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(Day1Data);
  const [filter, setFilter] = useState('online');
  useEffect(() => {
    if (filter === 'online') {
      switch (pageNum) {
        case 1:
          setData(Day1Data);
          break;
        case 2:
          setData(Day2Data);
          break;
        case 3:
          setData(Day3Data);
          break;
        default:
          setData(Day1Data);
      }
    } else if (filter === 'in-person') {
      setData((data) =>
        data.map((item) => {
          return {
            ...item,
            events: item.events.filter((event) => event.type === 'In-person'),
          };
        }),
      );
      // console.log(
      //   data.map((item) => {
      //     return {
      //       ...item,
      //       events: item.events.filter((event) => event.type === 'In-person'),
      //     };
      //   }),
      // );
      // setData(

      // );
    }
  }, [filter]);
  useEffect(() => {
    switch (pageNum) {
      case 1:
        setData(Day1Data);
        break;
      case 2:
        setData(Day2Data);
        break;
      case 3:
        setData(Day3Data);
        break;
      default:
        setData(Day1Data);
    }
  }, [pageNum]);
  return (
    <div style={{ zIndex: 2, minHeight: '90vh' }}>
      <button
        className="btn_top go_back_main"
        onClick={() => history.push('/')}
      >
        &#x2190; Go Back to Main Page
      </button>
      {/* <button className="btn_top">&#x21e9;&nbsp;Download Schedule</button> */}
      <h1 style={{ color: '#7B0EF6', textAlign: 'center', marginTop: '20px' }}>
        Schedule
      </h1>
      <div className="schedule_btn_row">
        <button
          className={`schedule_btn ${pageNum === 1 && 'active'}`}
          onClick={() => {
            setPageNum(1);
          }}
        >
          Day 1
        </button>
        <button
          className={`schedule_btn ${pageNum === 2 && 'active'}`}
          onClick={() => {
            setPageNum(2);
          }}
        >
          Day 2
        </button>
        <button
          className={`schedule_btn ${pageNum === 3 && 'active'}`}
          onClick={() => {
            setPageNum(3);
          }}
        >
          Day 3
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <label htmlFor="typeSelect">Type: </label>
        <select id="typeSelect" onChange={(e) => setFilter(e.target.value)}>
          <option value="online">All</option>
          <option value="in-person">Just In-Person</option>
        </select>
      </div>
      <div
        style={{
          margin: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <ScheduleComponent data={data} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
