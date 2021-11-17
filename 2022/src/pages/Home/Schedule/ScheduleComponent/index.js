import React from 'react';
import './ScheduleComponent.scss';

import { times, events } from './data';

const ScheduleComponent = () => {
  return (
    <div className="scheduleContainer">
      {times.map((val) => {
        return (
          <div className={`time start-${val.split(':').join('')}`}>
            {val
              .replace('SU', '')
              .replace('SA', '')
              .replace('11:11', '')
              .replace('23:23', '')}
          </div>
        );
      })}

      <div className="event start-SA1111 end-SA1111 schedule-component-inner-header">
        Saturday
      </div>
      <div className="event start-SA2323 end-SA2323 schedule-component-inner-header">
        Sunday
      </div>

      {events.map((val) => {
        return (
          <div
            className={`event stage-${val.stage} start-${val.start} end-${val.end} length-${val.length}`}
          >
            {val.name} <span>{val.subText}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleComponent;
