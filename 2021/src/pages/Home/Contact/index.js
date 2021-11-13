import React, { Component } from 'react';
import Newsletter from '../../../components/Newsletter';

import './Contact.css';
import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';

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
            <Header>Still got a question?</Header>
            <Text>
              Feel free to send us an email at
              <a rel="noopener noreferrer" href="mailto:contact@jamhacks.ca">
                {' '}
                contact@jamhacks.ca
              </a>
            </Text>
            <Header>Subscribe to Newsletter</Header>
            <div style={{ width: '80%', maxWidth: '800px' }}>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
