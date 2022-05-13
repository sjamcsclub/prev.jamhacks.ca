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
  const gridWidth = width / 2.5;
  const start = data[0].startTime,
    end = 23;
  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const displayModal = (title, description) => {
    Swal.fire({
      title: title,
      html: description,
      showCloseButton: true,
      icon: 'info',
    });
  };
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
                height: '80px',
                // borderTop: '3px solid purple',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'end',
                paddingRight: '5px',
                width: width > 700 ? '150px' : '100px',
                // borderRadius: '10px 0 0 10px',
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
                display: 'flex',
                position: 'absolute',
                top: `${(item.startTime - start) * 80}px`,
                width: item.hasConcurrent ? '50%' : '100%',
                left: item.behaviour === 'right' ? '50%' : '0',
                textAlign: 'center',
                fontSize: width < 800 ? '10px' : '15px',
              }}
            >
              <p
                key={i}
                style={{
                  background: 'gray',
                  color: 'white',
                  margin: 0,
                  height: item.duration * 80,
                  border: '1px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  borderRadius: '0 10px 10px 0',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  displayModal(
                    item.title,
                    item.description || 'No description',
                  );
                }}
              >
                <div>{item.title}</div>
              </p>
              {item.concurrent && (
                <p
                  key={i}
                  style={{
                    background: 'gray',
                    color: 'white',
                    margin: 0,
                    height: item.concurrent.duration * 80,
                    border: '1px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    borderRadius: '0 10px 10px 0',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    displayModal(
                      item.concurrent.title,
                      item.concurrent.description || 'No description',
                    );
                  }}
                >
                  {item.concurrent.title}
                </p>
              )}
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
      setData(data.filter((item) => item.type === 'In-person'));
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
      <button className="btn_top">&#x21e9;&nbsp;Download Schedule</button>
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
          <option value="online">Everyone</option>
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
