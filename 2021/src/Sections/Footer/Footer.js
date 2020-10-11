import React, { Component } from "react";
import { Button } from "antd";

import { ReactComponent as LinkedinS } from "../../Assets/linkedinS.svg";
import { ReactComponent as InstagramS } from "../../Assets/instagramS.svg";
import { ReactComponent as TwitterS } from "../../Assets/twitterS.svg";
import { ReactComponent as FacebookS } from "../../Assets/facebookS.svg";

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
  }
  render() {
    return (
      <div className="footer-div">
        <div className="footer-content-div">
          <div className="footer-title-content">Follow us on social media</div>
          {this.props.register === "close" ? (
            ""
          ) : (
            <a href="" target="_blank">
              <Button
                disabled={this.props.register === "finished"}
                type="primary"
                style={{ width: "180px", height: "40px" }}
              >
                {this.props.register === "finished"
                  ? "Applications Closed"
                  : "Apply Now"}
              </Button>
            </a>
          )}
          <div className="footer-icons-div" style={{ marginBottom: "20px" }}>
            <a
              href={socialURLS.linkedin}
              target="_blank"
              className="social-icon"
            >
              <LinkedinS></LinkedinS>
            </a>
            <a
              href={socialURLS.instagram}
              target="_blank"
              className="social-icon"
            >
              <InstagramS></InstagramS>
            </a>
            <a
              href={socialURLS.twitter}
              target="_blank"
              className="social-icon"
            >
              <TwitterS></TwitterS>
            </a>
            <a
              href={socialURLS.facebook}
              target="_blank"
              className="social-icon"
            >
              <FacebookS></FacebookS>
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
              target="_blank"
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
