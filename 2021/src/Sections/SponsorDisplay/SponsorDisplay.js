import React, { Component } from 'react';
import { Collapse } from 'antd';

import {ReactComponent as Arrow} from "../../Assets/right.svg"
import "./SponsorDisplay.css"

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class SponsorDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="sponsor-display-div">
                <div className="sponsor-display-title-div large-title" data-aos="fade-up" >Sponsors</div>
                {/* <div className="sponsor-display-content-div" data-aos="fade-up">
                   
                </div> */}
            </div>
        );
    }
}
 
export default SponsorDisplay;