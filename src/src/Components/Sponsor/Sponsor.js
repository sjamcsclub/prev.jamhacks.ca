import React, { Component } from 'react';
import { Button } from 'antd';

import "./Sponsor.css"

// import {ReactComponent as Sponsor1} from "../../Assets/Sponsor1.svg"
// import {ReactComponent as Sponsor2} from "../../Assets/Sponsor2.svg"
// import {ReactComponent as Sponsor3} from "../../Assets/Sponsor3.svg"

class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="sponsor-div">
                <div className="sponsor-content-div">
                    <div className="sponsor-content-half" data-aos="fade-up">
                        <div className="sponsor-title-div">Sponsor the Next Generation</div>
                        <div className="sponsor-content-text">
                            We are open to connecting with both sponsors and partner companies. As a partner company, 
                            you will provide a real or practice project for our talented fellows to work on. We ensure 
                            a smooth and easy process for you - our team takes care of all the administration work, 
                            so you get to focus on collaborating with our participants. 
                        </div>
                        <a href="https://bit.ly/visionarysponsoring" target="_blank">
                            <Button type="primary" ghost={true} style={{width : "260px", height : "40px"}}>Become a Sponsor</Button>
                        </a>
                    </div>
                    <div className="sponsor-content-half" style={{alignItems : "center"}} data-aos="fade-up">
                        <div style={{height : "75px"}}>
                            {/* <Sponsor1></Sponsor1> */}
                            <div className="sponsor1"></div>
                        </div>
                        <div style={{marginLeft : "30px"}}>
                            {/* <Sponsor2></Sponsor2> */}
                            <div className="sponsor2"></div>
                        </div>
                        <div style={{marginRight : "30px", marginTop : "5px"}}>
                            {/* <Sponsor3></Sponsor3> */}
                            <div className="sponsor3"></div>
                        </div>
                        {/* <div className="sponsor-logos-div">
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                            <div style={{width : "144px", height : "60px", background : "#E0EFF0", borderRadius : "6px"}}></div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sponsor;