import React, { Component } from 'react';
import { Button } from 'antd';

import "./Hero.css"

import {ReactComponent as FellowshipFull} from "../../Assets/FellowshipFull.svg"
import {ReactComponent as Rectangle35} from "../../Assets/Rectangles/Rectangle35.svg"
import {ReactComponent as Rectangle34} from "../../Assets/Rectangles/Rectangle34.svg"
import {ReactComponent as Rectangle7} from "../../Assets/Rectangles/Rectangle7.svg"

import WeAid from "../../Assets/Logos/WeAid.png"
import Carizon from "../../Assets/Logos/Carizon.png"
import CheaprEats from "../../Assets/Logos/CheaprEats.png"
import HackGuild from "../../Assets/Logos/HackGuild.png"
import MyPalate from "../../Assets/Logos/MyPalate.png"
import Harled from "../../Assets/Logos/Harled.png"
import VirtualMeet from "../../Assets/Logos/VirtualMeet.png"

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="hero-div">
                <div className="hero-content-div">
                    <div className="hero-title-div">
                        <div>JAMHacks V</div> 
                    </div>
                    <div className="hero-subtitle-div">
                        <div>
                            Learn, Connect, Innovate
                        </div>
                    </div>
                    <div className="hero-subtitle-div">
                        <div style={{color : "#222130", fontSize : "20px", textAlign : "left"}}>
                            Sir John A. Macdonald Secondary School
                        </div>
                    </div>
                    <div className="hero-subtitle-div" style={{marginTop : "10px"}}>
                        <div style={{color : "#222130", fontSize : "16px", opacity : "90%"}}>
                            May 2 to 3, 2021
                        </div>
                    </div>
                    <div className="hero-button-div">
                        <a href="https://bit.ly/visionaryapplication" target="_blank">
                            <Button type="primary" ghost={false} style={{width : "180px", height : "40px", zIndex : "50"}}>
                                Register
                            </Button>
                        </a>
                    </div>
                    
                    <div className="hero-subtitle-div">
                        <div style={{color : "#222130", fontSize : "16px"}}>
                            Interested in sponsoring?
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}
 
export default Hero;