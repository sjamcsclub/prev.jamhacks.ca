import React from 'react';
import ScheduleComponent from './ScheduleComponent';
import './Schedule.css';

const Schedule = () => (
  <div className="schedule-container" id="schedule-section">
    <div data-aos="fade-up" className="schedule-title large-title">
      Schedule
    </div>
    <div className="schedule-component-container" data-aos="fade-up">
      <ScheduleComponent></ScheduleComponent>
    </div>
    <div className="schedule-component-subtext" data-aos="fade-up">
      *Disclaimer, these events are subject to change. All times are shown in
      EDT (UTC−04:00)
    </div>
  </div>
);

export default Schedule;
