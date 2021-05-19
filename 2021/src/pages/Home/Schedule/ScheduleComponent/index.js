import React from 'react';
import './ScheduleComponent.scss';

import { times, events } from './data';

// https://codepen.io/liquidlight/pen/KjvgMQ
const ScheduleComponent = () => {
  return (
    <div class="scheduleContainer">
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
      {/* <div class="event stage-earth start-SA1100 end-SA1100 length-4">
        Speaker Two <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-SA1130 end-SA1130 length-4">
        Speaker Three <span>Earth Stage</span>
      </div>

      <div class="event stage-mercury start-SA1200 end-SA1600 length-1">
        Speaker Five <span>Mercury Stage</span>
      </div>
      <div class="event stage-venus start-SA1200 end-SA1600 length-1">
        Speaker Six <span>Venus Stage</span>
      </div>
      <div class="event stage-mars start-SA1200 end-SA1600 length-1">
        Speaker Seven <span>Mars Stage</span>
      </div>
      <div class="event stage-saturn start-SA1200 end-SA1600 length-1">
        Lunch <span>Saturn Stage</span>
      </div>

      <div class="event stage-earth start-SA1630 end-SA1630 length-4">
        Speaker Eigth <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-SA1700 end-SA1700 length-4">
        Speaker Nine <span>Earth Stage</span>
      </div>

      <div class="event stage-saturn start-SA1730 end-SA1730 length-4">
        Break <span>Saturn Stage</span>
      </div>

      <div class="event stage-earth start-SA1800 end-SA1900 length-1">
        Speaker Ten <span>Earth Stage</span>
      </div>
      <div class="event stage-mercury start-SA1800 end-SA1900 length-1">
        Speaker Eleven <span>Mercury Stage</span>
      </div>
      <div class="event stage-jupiter start-SA1800 end-SA1900 length-2">
        Speaker Twelve <span>Jupiter Stage</span>
      </div>

      <div class="event stage-venus start-SA1930 end-SA2130 length-2">
        Speaker Thirteen <span>Venus Stage</span>
      </div>
      <div class="event stage-saturn start-SA1930 end-SA2130 length-2">
        Drinks <span>Saturn Stage</span>
      </div> */}
    </div>
  );
};

export default ScheduleComponent;
