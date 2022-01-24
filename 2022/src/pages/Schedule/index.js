import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import { Day1Data } from './data/day1';
import { Day2Data } from './data/day2';
import { Day3Data } from './data/day3';

const Schedule = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState(1);
  return (
    <div style={{ zIndex: 2, height: '100vh' }}>
      <button onClick={() => history.push('/')}>Go Back to Main Page</button>
      <h1 style={{ color: 'purple', textAlign: 'center', marginTop: '20px' }}>
        Schedule Page
      </h1>
      <MaterialTable
        columns={[
          {
            title: 'Time',
            field: 'time',
            cellStyle: {
              backgroundColor: '#039be5',
              color: '#FFF',
            },
            searchable: false,
          },
          { title: 'Event', field: 'title' },
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
        title={`JAMHacks 6 - Day ${pageNum}`}
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },
          exportButton: true,
          sorting: true,
          paginationType: 'stepped',
          paging: false,
        }}
      />
      <div>
        <button
          onClick={() => {
            setPageNum(1);
          }}
        >
          Day 1
        </button>
        <button
          onClick={() => {
            setPageNum(2);
          }}
        >
          Day 2
        </button>
        <button
          onClick={() => {
            setPageNum(3);
          }}
        >
          Day 3
        </button>
      </div>
    </div>
  );
};

export default Schedule;
