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
  return (
    <div style={{ zIndex: 2, height: '100vh' }}>
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
                width: '15%',
                cursor: 'default',
              },
              headerStyle: {
                width: '15%',
                cursor: 'default',
              },
              searchable: false,
            },
            { title: 'Event', field: 'title', disableSortBy: false },
          ]}
          data={(() => {
            switch (pageNum) {
              case 1:
                return Day1Data;
              case 2:
                return Day2Data;
              case 3:
                return Day3Data;
              default:
                return [];
            }
          })()}
          onChangePage={(page) => setPageNum(page)}
          // title={`JAMHacks 6 - Day ${pageNum}`}
          options={{
            showTitle: false,
            headerStyle: {
              backgroundColor: '#7B0EF6',
              color: '#FFF',
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
