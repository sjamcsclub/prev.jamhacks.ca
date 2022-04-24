import React, { useState } from 'react';
import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import { Day1Data } from './data/day1';
import { Day2Data } from './data/day2';
import { Day3Data } from './data/day3';
import './style.css';
import { useEffect } from 'react';

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
          <option value="online">Online</option>
          <option value="in-person">In-Person</option>
        </select>
      </div>
      <div className="schedule-table-container">
        {' '}
        <MaterialTable
          columns={[
            {
              title: 'Time',
              field: 'time',
              cellStyle: {
                backgroundColor: '#EEDFFF',
                color: '#7B0EF6',
                width: '20%',
                cursor: 'default',
              },
              headerStyle: {
                width: '20%',
                cursor: 'default',
              },
              searchable: false,
            },
            { title: 'Event', field: 'title', disableSortBy: false },
          ]}
          data={data}
          onChangePage={(page) => setPageNum(page)}
          // title={`JAMHacks 6 - Day ${pageNum}`}
          options={{
            showTitle: false,
            headerStyle: {
              backgroundColor: '#7B0EF6',
              color: '#FFF',
              fontFamily: 'Poppins',
            },
            rowStyle: {
              overflowWrap: 'break-word',
              fontFamily: 'Poppins',
            },
            exportButton: true,
            sorting: false,
            paginationType: 'stepped',
            paging: false,
            tableLayout: 'auto',
            search: false,
            toolbar: false,
            draggable: false,
          }}
        />
      </div>
    </div>
  );
};

export default Schedule;
