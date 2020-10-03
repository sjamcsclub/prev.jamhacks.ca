import React, { Component } from 'react';
import { Button } from 'antd';
import {Link} from "react-router-dom"

import {ReactComponent as Logo} from "../../Assets/NoWordsLogo.svg"
import {ReactComponent as Linkedin} from "../../Assets/linkedin.svg"
import {ReactComponent as Instagram} from "../../Assets/instagram.svg"
import {ReactComponent as Email} from "../../Assets/mail.svg"



class PrivNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){

        window.addEventListener('scroll', function(e) {
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop


            if (scrollTop > 10){
                document.getElementsByClassName("navbar-div")[0].classList.add("scrolled-navbar")
            }else{
                document.getElementsByClassName("navbar-div")[0].classList.remove("scrolled-navbar")
            }
        })

    }

    handleClick(){
        if (this.state.open){
            document.getElementById("hamburger-1").classList.remove("is-active")
            this.setState({open : false})
            // document.getElementsByClassName("navbar-mobile-div")[0].style.display = "none"
            
            // document.getElementsByClassName("navbar-mobile-div")[0].classList.remove("show-nav")
            document.getElementsByClassName("navbar-mobile-div")[0].style.display = "none"
            
           
        }
        else{
            document.getElementById("hamburger-1").classList.add("is-active")
            this.setState({open : true})
            document.getElementsByClassName("navbar-mobile-div")[0].style.display = "flex"
            
            // document.getElementsByClassName("navbar-mobile-div")[0].classList.add("show-nav")
            
        }
    } 
 
    render() { 
        return (
            <div className="navbar-div">
                <div className="navbar-mobile-div">
                    <div className="navbar-mobile-links-div">
                        <Link to="/" className="navbar-mobile-link-item">About</Link>
                        <Link to="/" className="navbar-mobile-link-item">Benefits</Link>
                        <Link to="/" className="navbar-mobile-link-item">FAQ</Link>
                        <Link to="/" className="navbar-mobile-link-item">Partners</Link>
                        <Link to="/" className="navbar-mobile-link-item">Mentors</Link>
                    </div>
                    <a href="https://bit.ly/visionaryapplication" target="_blank"style={{marginLeft : "70px", marginTop : "10px", marginBottom : "50px"}}>
                        <Button type="primary" ghost={false} style={{height : "40px", fontSize : "14px"}}>Apply Now</Button>
                    </a>  
                    <div className="footer-icons-div" style={{marginLeft : "70px", justifyContent : "space-between"}}>
                        <a href="https://www.linkedin.com/company/visionary-development-studios/" target="_blank" className="social-icon linkedin">
                            <Linkedin className="hover-icon"></Linkedin>
                        </a>
                        <a href="https://www.instagram.com/visionary_app/" target="_blank" className="social-icon instagram">
                            <Instagram className="hover-icon"></Instagram>
                        </a>
                        <a href="mailto:markos@visionary.app" className="social-icon email">
                            <Email className="hover-icon"></Email>
                        </a>
                    </div>        
                </div>
                <div className="navbar-logo-div">
                    <Link to="/" className="navbar-logo"></Link>
                </div>
                <div className="navbar-links-div">
                    <Link to="/" className="navbar-link-item">About</Link>
                    <Link to="/" className="navbar-link-item">Benefits</Link>
                    <Link to="/" className="navbar-link-item">FAQ</Link>
                    <Link to="/" className="navbar-link-item">Partners</Link>
                    <Link to="/" className="navbar-link-item">Mentors</Link>
                </div>
                <div className="navbar-filler-div"></div>
                <div className="navbar-icons-div">
                    <a href="https://www.linkedin.com/company/visionary-development-studios/" target="_blank" className="social-icon linkedin">
                        <Linkedin className="hover-icon"></Linkedin>
                    </a>
                    <a href="https://www.instagram.com/visionary_app/" target="_blank" className="social-icon instagram">
                        <Instagram className="hover-icon"></Instagram>
                    </a>
                    <a href="mailto:markos@visionary.app" className="social-icon email">
                        <Email className="hover-icon"></Email>
                    </a>
                </div>
                <a href="https://bit.ly/visionaryapplication" target="_blank" className="navbar-action-div">
                    <Button type="primary" ghost={false} style={{height : "40px", fontSize : "14px"}}>Apply Now</Button>
                </a>
                <div class="hamburger" id="hamburger-1" onClick={() => this.handleClick()}>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                

                
            </div>
        );
    }}
 
export default PrivNav;