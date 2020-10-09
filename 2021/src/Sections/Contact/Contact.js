import React, { Component } from "react";
import Newsletter from "../../Components/Newsletter";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact-div" id="contact-section">
        <div className="contact-content-div">
          <div className="contact-content-half" data-aos="fade-up">
            <div className="contact-title-div">Still got a question?</div>
            <div className="contact-content-text">
              Feel free to send us an email at
              <a href="mailto:contact@jamhacks.com"> contact@jamhacks.com</a>
            </div>
            <div className="contact-title-div">Subscribe to Newsletter</div>
            <Newsletter />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
