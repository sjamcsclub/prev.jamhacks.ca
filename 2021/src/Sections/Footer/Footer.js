import React, { Component } from "react";
import { Button } from "antd";

import { ReactComponent as Linkedin } from "../../Assets/Icons/Social/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/Icons/Social/instagram.svg";
import { ReactComponent as Twitter } from "../../Assets/Icons/Social/twitter.svg";
import { ReactComponent as Facebook } from "../../Assets/Icons/Social/facebook.svg";

import "./Footer.css";

const socialURLS = {
  instagram: "https://www.instagram.com/jamhacks",
  facebook: "https://www.facebook.com/JAMHacks",
  linkedin: "https://www.linkedin.com/company/jamhacks/",
  twitter: "https://twitter.com/jam_hacks?lang=en",
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.register = props.register;
  }
  render() {
    return (
      <div className="footer-div">
        <div className="footer-content-div">
          <div className="footer-title-content">Follow us on social media</div>
          {this.register === "close" ? (
            ""
          ) : (
            <a href="/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">
              <Button
                disabled={this.register === "finished"}
                type="primary"
                style={{ width: "180px", height: "40px" }}
              >
                {this.register === "finished"
                  ? "Applications Closed"
                  : "Apply Now"}
              </Button>
            </a>
          )}
          <div className="footer-icons-div" style={{ marginBottom: "20px" }}>
            <a
              href={socialURLS.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="social-icon white linkedin"
            >
              <Linkedin fill="white"></Linkedin>
            </a>
            <a
              href={socialURLS.instagram}
              target="_blank" rel="noopener noreferrer"
              className="social-icon white instagram"
            >
              <Instagram></Instagram>
            </a>
            <a
              href={socialURLS.twitter}
              target="_blank" rel="noopener noreferrer"
              className="social-icon white twitter"
            >
              <Twitter></Twitter>
            </a>
            <a
              href={socialURLS.facebook}
              target="_blank" rel="noopener noreferrer"
              className="social-icon white facebook"
            >
              <Facebook></Facebook>
            </a>
          </div>
        </div>
        <div className="footer-bottom-div">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
              height: "fit-content",
            }}
          >
            <a href="/">
              <div className="footer-logo"></div>
            </a>
            <div className="footer-copyright">
              Copyright © 2020 JAMHacks.{" "}
              <br className="footer-copyright-linebreak"></br> All rights
              reserved.
            </div>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://jamhacks.ca/2020/"
              className="footer-link"
            >
              2020 Site
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="\privacy-policy"
              className="footer-privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
