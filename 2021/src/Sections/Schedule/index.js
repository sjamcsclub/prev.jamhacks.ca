import React from "react";
import ScheduleComponent from "./ScheduleComponent";
import "./Schedule.css";



const Schedule = () => (
  <div className="schedule-container" id="schedule-section">
    <div data-aos="fade-up" className="schedule-title large-title">
      Schedule
    </div>
    <div className="schedule-component-container">
      <ScheduleComponent></ScheduleComponent>
    </div>
  </div>
);

export default Schedule;
