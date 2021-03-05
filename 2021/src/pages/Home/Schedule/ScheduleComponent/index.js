import React from 'react';
import './ScheduleComponent.scss';

import { times, events } from './data';

// https://codepen.io/liquidlight/pen/KjvgMQ
const ScheduleComponent = () => {
  return (
    <div class="scheduleContainer">
      {times.map((val) => {
        return <div class={`time start-${val.split(':').join('')}`}>{val}</div>;
      })}

      <div class="event stage-saturn start-800 end-930 length-4">
        Arrival and registration <span>Registration Area</span>
      </div>
      <div class="event stage-earth start-1000 end-1000 length-4">
        Welcome <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-1030 end-1030 length-4">
        Speaker One <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-1100 end-1100 length-4">
        Speaker Two <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-1130 end-1130 length-4">
        Speaker Three <span>Earth Stage</span>
      </div>

      <div class="event stage-mercury start-1200 end-1600 length-1">
        Speaker Five <span>Mercury Stage</span>
      </div>
      <div class="event stage-venus start-1200 end-1600 length-1">
        Speaker Six <span>Venus Stage</span>
      </div>
      <div class="event stage-mars start-1200 end-1600 length-1">
        Speaker Seven <span>Mars Stage</span>
      </div>
      <div class="event stage-saturn start-1200 end-1600 length-1">
        Lunch <span>Saturn Stage</span>
      </div>

      <div class="event stage-earth start-1630 end-1630 length-4">
        Speaker Eigth <span>Earth Stage</span>
      </div>
      <div class="event stage-earth start-1700 end-1700 length-4">
        Speaker Nine <span>Earth Stage</span>
      </div>

      <div class="event stage-saturn start-1730 end-1730 length-4">
        Break <span>Saturn Stage</span>
      </div>

      <div class="event stage-earth start-1800 end-1900 length-1">
        Speaker Ten <span>Earth Stage</span>
      </div>
      <div class="event stage-mercury start-1800 end-1900 length-1">
        Speaker Eleven <span>Mercury Stage</span>
      </div>
      <div class="event stage-jupiter start-1800 end-1900 length-2">
        Speaker Twelve <span>Jupiter Stage</span>
      </div>

      <div class="event stage-venus start-1930 end-2130 length-2">
        Speaker Thirteen <span>Venus Stage</span>
      </div>
      <div class="event stage-saturn start-1930 end-2130 length-2">
        Drinks <span>Saturn Stage</span>
      </div>
    </div>
  );
};

export default ScheduleComponent;
