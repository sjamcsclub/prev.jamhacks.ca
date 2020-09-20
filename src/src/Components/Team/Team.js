import React, { Component } from 'react';
import { Collapse } from 'antd';

import {ReactComponent as Arrow} from "../../Assets/right.svg"
import "./Team.css"

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="team-display-div">
                <div className="team-display-title-div large-title" data-aos="fade-up">Meet the Team</div>
                {/* <div className="sponsor-display-content-div" data-aos="fade-up">
                    <Collapse expandIcon={({ isActive }) => <Arrow style={isActive ? {transform : "rotate(90deg)", transformOrigin : "75% 25%"}:{}}rotate={isActive ? 90 : 0} />}>
                        <Panel header="Is this a paid internship?" key="1" className="site-collapse-custom-panel">
                        <p>
                            The Visionary Fellowship provided internships are not paid positions. All the work done under Visionary Fellowship
                            is a volunteering position. Regardless, the experience and opportunity we provide is of the same quality of an internship. The program
                            is tailored for people with skills and passion, but not sure where to start. We give the kickstart needed to help
                            you secure future positions and employment.
                        </p>
                        </Panel>
                        <Panel header="What skills do I need to apply?" key="2" className="site-collapse-custom-panel">
                        <p>
                            Ideally, our program would best fit those with at least a little background in computer science, technology, design, or
                            project management. Having knowledge in a programming language, design tools, or a course under your belt would definitely be a 
                            good asset. However, that does not mean you have to be a programming maestro. Above all, we are looking for 
                            individuals that have a drive and passion for software or design. Our program will accommodate for beginners by providing
                            a process to help fill knowledge gaps before diving deep into the technical portions of the project.
                        </p>
                        </Panel>
                        <Panel header="Who is eligible to apply?" key="3" className="site-collapse-custom-panel">
                        <p>
                            Anyone is welcome to apply, however, we have tailored our program for students. This includes high school and university students.
                            Individuals who enjoy programming, project management, or graphic design, are optimal. We also prefer those with either no professional
                            experience, or only an intermediate amount of professional experience. We carefully review applications to ensure the best candidates for the positions are selected.
                        </p>
                        </Panel>
                        <Panel header="What is the time commitment?" key="4" className="site-collapse-custom-panel">
                        <p>
                            Visionary Fellowship is designed to fit within the schedule of other commitments such as school. Depending on your prerequisite knowledge,
                            some individuals may find they will have to spend more time, specifically within the first 4 weeks, to catch up in terms technical skill with
                            their peers. That is why we have designed the program to spread out and allocate enough time to learn and catch up, while also allocating specific 
                            times for development to ensure you can manage the project as well as your other commitments. That said, most participants can expect 2-5 hours of work
                            on average per week. 
                        </p>
                        </Panel>
                        <Panel header="What types of positions does the program offer?" key="5" className="site-collapse-custom-panel">
                        <p>
                            Our administration will carefully review each application, and ensure that you get matched into a specialization and project that best fits your skills and interests.
                            For example, some of the specializations within the program include: database engineer, frontend engineer, project lead (PM), UI/UX Designer, backend engineer, mobile
                            application developer, machine learning engineer, and desktop application developer. Of course, as a participant you will have the opportunity to work on all planes of
                            the project, but we include specializations to help divide the workload into more manageable pieces, while also helping to develop more complete skills for each participant.
                            Additionally, these are position titles you can use on a resume for future use.
                        </p>
                        </Panel>
                        <Panel header="Where does the program take place?" key="6" className="site-collapse-custom-panel">
                        <p>
                            The first cohort, and likely the next few to come, will take place virtually. There is the possibility of in person cohorts, depending on how COVID progresses, as well as our 
                            demographics. We are looking into possibly having Waterloo region, Toronto, or other tech hotspot locations as chapter locations for future in-person cohorts. For now, the virtual
                            option allows anyone anywhere to learn and participate!
                        </p>
                        </Panel>
                    </Collapse>
                </div> */}
            </div>
        );
    }
}
 
export default Team;