import React, { Component } from 'react';
import { Button } from 'antd';

import "./Contact.css"

// import {ReactComponent as Sponsor1} from "../../Assets/Sponsor1.svg"
// import {ReactComponent as Sponsor2} from "../../Assets/Sponsor2.svg"
// import {ReactComponent as Sponsor3} from "../../Assets/Sponsor3.svg"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="contact-div">
                <div className="contact-content-div">
                    <div className="contact-content-half" data-aos="fade-up">
                        <div className="contact-title-div">Still got a question?</div>
                        <div className="contact-content-text">
                        Feel free to send us an email at       
                        <a href="mailto:contact@jamhacks.com"> contact@jamhacks.com</a>
                        </div>
                        <a href="https://bit.ly/visionarycontacting" target="_blank">
                            {/* <Button type="primary" ghost={true} style={{width : "260px", height : "40px"}}>Become a contact</Button> */}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;