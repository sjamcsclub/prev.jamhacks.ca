import React from 'react';
import MaterialTable from 'material-table';
import { TablePagination } from '@material-ui/core';

const Schedule = () => {
  return (
    <div style={{ zIndex: 2, height: '100vh' }}>
      <button onClick={}>Go Back to Main Page</button>
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
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
            width: '10%',
          },
          { title: 'Event', field: 'title' },
        ]}
        data={[
          { title: 'Hacking Starts', time: '6PM' },
          { title: 'Game', time: '8PM' },
          { title: 'Introduction to Python', time: '10PM' },
          { title: 'Introduction to HTML', time: '12PM' },
        ]}
        title="JAMHacks 6 Schedule"
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },
          exportButton: true,
          sorting: true,
          tableLayout: 'fixed',
        }}
      />
    </div>
  );
};

export default Schedule;
