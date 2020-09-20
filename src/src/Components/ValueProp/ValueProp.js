import React, { Component } from 'react';

import {ReactComponent as ValuePropRectangle} from "../../Assets/Rectangles/ValuePropRectangle.svg"
import {ReactComponent as Image} from "../../Assets/JamImage.svg"

import {ReactComponent as Clipboard} from "../../Assets/BenefitsIcons/clipboard.svg"
import {ReactComponent as Code} from "../../Assets/BenefitsIcons/code.svg"
import {ReactComponent as Gift} from "../../Assets/BenefitsIcons/gift.svg"
import {ReactComponent as MessageCircle} from "../../Assets/BenefitsIcons/message-circle.svg"
import {ReactComponent as Monitor} from "../../Assets/BenefitsIcons/monitor.svg"
import {ReactComponent as Users} from "../../Assets/BenefitsIcons/users.svg"


import "./ValueProp.css"

class ValueProp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="value-prop-div">
                {/* <div className="value-prop-background-div">
                    <div style={{width : "90%", height : "100%", display: "flex", justifyContent : "flex-end", marginTop : "0vh"}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/social-media-59b42.appspot.com/o/Rectangle%2034%20(2).png?alt=media&token=c1eb529e-7344-4e6b-a68e-876c5bbe7afa" width="112" height="112"></img>
                    </div>
                </div> */}

                <div className="value-prop-content-row-div">
                    <div style={{width : "60%", minWidth : "260px"}}>
                        <div className="value-prop-title-div" data-aos="fade-up">Waterloo’s biggest high school hackathon</div>
                        <div className="about-content-subheading" data-aos="fade-up" style={{textAlign : "left", width : "100%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor vitae felis at fermentum. Nulla facilisi. Pellentesque faucibus nisi eget rhoncus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor vitae felis at fermentum. Nulla facilisi. Pellentesque faucibus nisi eget rhoncus suscipit. 
                            <br></br>
                            <br></br>
                            Ut elementum lorem ligula, eget luctus lorem accumsan vel. Donec vel elit non mauris commodo tempor. Donec eget justo tempus metus auctor tincidunt et et odio. Aliquam in consectetur tellus, tempus consequat elit. Ut elementum lorem ligula, eget luctus lorem accumsan vel. Donec vel elit non mauris commodo tempor. Donec eget justo tempus metus auctor tincidunt et et odio. Aliquam in consectetur tellus, tempus consequat elit. 
                        </div>
                    </div>
                     
                    <div className="jam-image-div" data-aos="fade-up">

                    </div>
                </div>
                <div className="value-prop-content-row-div" style={{flexWrap : "wrap-reverse"}}>
                    <div className="jam-image-div" data-aos="fade-up">

                    </div>
                    <div style={{width : "60%"}}>
                        <div className="value-prop-title-div" data-aos="fade-up">All Hackers Welcome</div>
                        <div className="about-content-subheading" data-aos="fade-up" style={{textAlign : "left", width : "100%"}}>
                        Some stuff about how like we are very inclusive and have stuff for everyone no matter who. stuff
                        Some stuff about how like we are very inclusive and have stuff for everyone no matter who. stuff
                        <br></br>
                        <br></br>
                        Ut elementum lorem ligula, eget luctus lorem accumsan vel. Donec vel elit non mauris commodo tempor. 
                        Donec eget justo tempus metus auctor tincidunt et et odio. Aliquam in consectetur tellus, tempus consequat elit
                        Ut elementum lorem ligula, eget luctus lorem accumsan vel. Donec vel elit non mauris commodo tempor. 
                        Donec eget justo tempus metus auctor tincidunt et et odio. Aliquam in consectetur tellus, tempus consequat elit
                        </div>
                    </div>
                    

                </div>
            </div>
        );
    }
}
 
export default ValueProp;