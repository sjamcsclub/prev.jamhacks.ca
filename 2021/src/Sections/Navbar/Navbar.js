import React, { Component } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

import "./Navbar.css";

import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/instagram.svg";

import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";

const navLinks = [
  {
    label: "About",
    id: "about-section",
  },
  // {
  //   label: "Schedule",
  //   id: "schedule-section",
  // },
  {
    label: "Sponsors",
    id: "sponsor-section",
  },
  {
    label: "FAQ",
    id: "faq-section",
  },
  {
    label: "Team",
    id: "team-section",
  },
  {
    label: "Contact",
    id: "contact-section",
  },
];

const socialURLS = {
  instagram: "https://www.instagram.com/jamhacks",
  facebook: "https://www.facebook.com/JAMHacks",
  linkedin: "https://www.linkedin.com/company/jamhacks/",
  twitter: "https://twitter.com/jam_hacks?lang=en",
};

//animation variants
const MobileVariants = {
  open: { height: "100vh" },
  closed: { height: 0 },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.register = props.register;
  }

  componentDidMount() {
    window.addEventListener("scroll", function (e) {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (scrollTop > 10) {
        document
          .getElementsByClassName("navbar-div")[0]
          .classList.add("scrolled-navbar");
        // for (item in document.getElementsByClassName("navbar-link-item")){
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-link-item").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-link-item")
            [i].classList.add("navbar-scrolled-link");
        }
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-social-icon").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-social-icon")
            [i].classList.add("navbar-social-icon-scrolled");
          if (
            document.getElementsByClassName("navbar-scrolled-social-icon")[i]
          ) {
            document.getElementsByClassName("navbar-scrolled-social-icon")[
              i
            ].style.display = "flex";
          }
        }
      } else {
        document
          .getElementsByClassName("navbar-div")[0]
          .classList.remove("scrolled-navbar");
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-link-item").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-link-item")
            [i].classList.remove("navbar-scrolled-link");
        }
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-social-icon").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-social-icon")
            [i].classList.remove("navbar-social-icon-scrolled");
          if (
            document.getElementsByClassName("navbar-scrolled-social-icon")[i]
          ) {
            document.getElementsByClassName("navbar-scrolled-social-icon")[
              i
            ].style.display = "none";
          }
        }
      }
    });
  }

  handleClick() {
    if (this.state.open) {
      document.getElementById("hamburger-1").classList.remove("is-active");
      this.setState({ open: false });
    } else {
      document.getElementById("hamburger-1").classList.add("is-active");
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <div className="navbar-div">
        <motion.div
          className="navbar-mobile-div"
          variants={MobileVariants}
          initial={"closed"}
          animate={this.state.open ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <div className="test-navbar">
            <div className="navbar-mobile-links-div">
              {navLinks.map((link) => (
                <div className="navbar-mobile-link-container">
                  <div
                    className="navbar-mobile-link-item"
                    onClick={() => {
                      this.handleClick();
                      window.scrollTo({
                        top: document.getElementById(link.id).offsetTop - 80,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    {link.label}
                  </div>
                </div>
              ))}
            </div>

            {this.props.register === "close" ? (
              ""
            ) : (
              <a
                href="/"
                target="_blank"
                style={{
                  marginLeft: "70px",
                  marginTop: "10px",
                }}
              >
                <Button
                  type="primary"
                  disabled={this.register === "finished"}
                  style={{ height: "40px", fontSize: "14px" }}
                >
                  {this.props.register === "finished"
                    ? "Applications Closed"
                    : "Register"}
                </Button>
              </a>
            )}

            <div
              className="footer-icons-div"
              style={{
                marginTop: "30px",
                marginLeft: "70px",
                justifyContent: "space-between",
              }}
            >
              <a
                href={socialURLS.linkedin}
                target="_blank"
                className="social-icon linkedin "
              >
                <Linkedin className="hover-icon"></Linkedin>
              </a>
              <a
                href={socialURLS.instagram}
                target="_blank"
                className="social-icon instagram "
              >
                <Instagram className="hover-icon"></Instagram>
              </a>
              <a
                target="_blank"
                href={socialURLS.twitter}
                className="social-icon twitter "
              >
                <Twitter className="hover-icon"></Twitter>
              </a>
              <a
                target="_blank"
                href={socialURLS.facebook}
                className="social-icon facebook "
              >
                <Facebook className="hover-icon"></Facebook>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="navbar-logo-div">
          <div
            className="navbar-logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          ></div>
        </div>

        <div className="navbar-links-div">
          {navLinks.map((link) => (
            <div
              className="navbar-link-item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById(link.id).offsetTop - 80,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className="navbar-filler-div"></div>
        <div className="navbar-icons-div">
          <a
            href={socialURLS.linkedin}
            target="_blank"
            className="social-icon linkedin navbar-social-icon"
          >
            <Linkedin className="hover-icon"></Linkedin>
          </a>
          <a
            href="https://www.instagram.com/jamhacks"
            target="_blank"
            className="social-icon instagram navbar-social-icon"
          >
            <Instagram className="hover-icon"></Instagram>
          </a>
          <a
            href={socialURLS.twitter}
            target="_blank"
            className="social-icon twitter navbar-social-icon"
          >
            <Twitter className="hover-icon"></Twitter>
          </a>
          <a
            href={socialURLS.facebook}
            target="_blank"
            className="social-icon facebook navbar-social-icon"
          >
            <Facebook className="hover-icon"></Facebook>
          </a>
        </div>
        {this.register === "close" ? (
          ""
        ) : (
          <a href="" target="_blank" className="navbar-action-div">
            <Button
              type="primary"
              disabled={this.register === "finished"}
              style={{ height: "40px", fontSize: "14px" }}
            >
              {this.props.register === "finished"
                ? "Register"
                : "Applications Closed"}
            </Button>
          </a>
        )}
        <div
          class="hamburger"
          id="hamburger-1"
          onClick={() => this.handleClick()}
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    );
  }
}

export default Navbar;
