import React, { Component } from 'react';
import {Button} from "antd"

import {ReactComponent as Linkedin} from "../../Assets/linkedin.svg"
import {ReactComponent as Instagram} from "../../Assets/instagram.svg"
import {ReactComponent as Email} from "../../Assets/mail.svg"
import {ReactComponent as Word} from "../../Assets/Word.svg"

import {ReactComponent as InstagramH} from "../../Assets/instagramH.svg"
import {ReactComponent as EmailH} from "../../Assets/mailH.svg"
import {ReactComponent as LinkedinH} from "../../Assets/linkedinH.svg"

// import {Link} from 

import "./Footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="footer-div">
                <div className="footer-content-div">
                    <div className="footer-title-content">Follow us on social media</div>
                    <a href="https://bit.ly/visionaryapplication" target="_blank">
                        <Button type="primary" style={{width : "180px", height : "40px"}}>Apply now</Button>
                    </a>
                    <div className="footer-icons-div" style={{marginBottom : "20px"}}>
                        <a href="https://www.linkedin.com/company/visionary-development-studios/" target="_blank" className="social-icon linkedin">
                            <Linkedin className="hover-icon"></Linkedin>
                        </a>
                        <a href="https://www.instagram.com/visionary_app/" target="_blank" className="social-icon instagram">
                            <Instagram className="hover-icon"></Instagram>
                        </a>
                        <a href="mailto:markos@visionary.app" target="_blank" className="social-icon email">
                            <Email className="hover-icon"></Email>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom-div">
                    <div style={{display : "flex", alignItems : "center", width : "100%", flexWrap : "wrap", height : "fit-content"}}>
                        <div className="footer-logo"></div>
                        <div className="footer-copyright">Copyright © 2020 JAMHacks. <br className="footer-copyright-linebreak"></br> All rights reserved.</div>
                        <a target="_blank" href="https://www.visionary.app/privacy-policy" className="footer-privacy">Privacy Policy</a>\
                        <a target="_blank" href="https://www.visionary.app/privacy-policy" className="footer-privacy">Code of Conduct</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;