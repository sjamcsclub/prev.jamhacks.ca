import React, { Component } from 'react';
import { Steps, Popover } from 'antd';
import "./About.css"

import {ReactComponent as AboutRectangle} from "../../Assets/Rectangles/AboutRectangle.svg"

const { Step } = Steps;


  class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress : 0,
            timeline : "horizontal"
        }
        this.responsiveGraph = this.responsiveGraph.bind(this)
    }

    componentDidMount(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 

        if (mm == 7){
            if (dd > 27){
                this.setState({progress : 2.6})
            }
            else if (dd == 27){
                this.setState({progress : 2})
            }
            else if (dd < 27 && dd > 24){
                this.setState({progress : 1.6})
            }
            else if (dd == 24){
                this.setState({progress : 1})
            }
            else if (dd < 24 && dd > 14){
                this.setState({progress : 0.6})
            }
            else if(dd == 14){
                this.setState({progress : 0})
            }
        }
        else if (mm == 8){
            if (dd < 4){
                this.setState({progress : 2.6})
            }
            else if(dd == 4){
                this.setState({progress : 3})
            }
            else if (dd > 4 && dd < 8){
                this.setState({progress : 3.6})
            }
            else{
                this.setState({progress : 4})
            }
        }


        var x = window.matchMedia("(max-width: 1000px)")
        this.responsiveGraph(x) // Call listener function at run time
        x.addListener(this.responsiveGraph) // Attach listener function on state changes
    }

    responsiveGraph(x) {
        if (x.matches) { // If media query matches
          this.setState({timeline : "vertical"})
        } else {
          this.setState({timeline : "horizontal"})
        }
    }


    render() { 
        return (
            <div className="about-div">
                {/* <div className="about-background-div">
                    <div style={{marginLeft : "10vw"}}>
                        <img width="63" height="63" src="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/Rectangle%2035%20(1).png?alt=media&token=3144d695-bbcd-4852-83e8-d54ab84be738"></img>
                    </div>
                </div> */}
                <div className="about-content-div">
                    <div className="about-content-title" data-aos="fade-up">How Does it Work?</div>
                    <div className="about-content-subheading" data-aos="fade-up">
                        Visionary Fellowship will combine your interests and skills, and 
                        match you with a team of 5 along with a company. Our Visionary Fellows
                        will work directly with their assigned company to complete a comprehensive software project,
                        courtesy of the companies. The program will assist in guiding each team with weekly objectives,
                        workshops, and guidelines to meet project deadlines and improve your skills.
                    </div>
                </div>
                <div className="about-timeline-div">
                    <div style={{width : "70%", height : "fit-content"}} data-aos="fade-up">
                        <Steps direction={this.state.timeline} current={this.state.progress} progressDot>
                            <Step title={<div style={{fontFamily : "Inter", fontWeight : "500", width : "150px"}}>July 14</div>} description={<div style={{fontFamily : "Inter", width : "150px"}}>Applications Open</div>} />
                            <Step title={<div style={{fontFamily : "Inter", fontWeight : "500", width : "150px"}}>July 24</div>}  description={<div style={{fontFamily : "Inter", width : "150px"}}>Early Applications Close</div>}/>
                            <Step title={<div style={{fontFamily : "Inter", fontWeight : "500", width : "150px"}}>July 27</div>} description={<div style={{fontFamily : "Inter", width : "150px"}}>Early Application Decisions</div>}/>
                            <Step title={<div style={{fontFamily : "Inter", fontWeight : "500", width : "150px"}}>August 4</div>}  description={<div style={{fontFamily : "Inter", width : "150px"}}>All Applications Due</div>} />
                            <Step title={<div style={{fontFamily : "Inter", fontWeight : "500", width : "150px"}}>August 8</div>} description={<div style={{fontFamily : "Inter", width : "150px"}}>All Application Decisions</div>}/>
                        </Steps>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;