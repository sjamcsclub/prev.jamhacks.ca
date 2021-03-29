import React, { Component } from 'react';
import { Button } from 'antd';

import './Sponsor.css';

import { ReactComponent as SponsorImage } from '../../../assets/undraw/Business.svg';
import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sponsor-div" id="sponsor-section">
        <div className="sponsor-content-div">
          <div className="sponsor-content-half" data-aos="fade-up">
            {/*<div className="sponsor-title-div">Sponsor the Next Generation</div>*/}
            <Header>Sponsor the Next Generation</Header>
            <div className="sponsor-content-text">
              <Text>
                Want to make a lasting impression on our future innovators,
                coders, and entrepreneurs? Consider sponsoring JAMHacks! By
                doing so, you can connect with our hackers, gain exposure among
                those interested in tech, and even seek out potential recruits!
                <br></br>
                <br></br>
                Interested in sponsoring? Check out our{' '}
                <a
                  href="/files/sponsorship.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prospectus
                </a>{' '}
                or contact us at{' '}
                <a href="mailto:sponsor@jamhacks.ca">sponsor@jamhacks.ca</a>
              </Text>
            </div>
            <a
              href="mailto:sponsor@jamhacks.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" style={{ width: '260px', height: '40px' }}>
                Become a Sponsor
              </Button>
            </a>
          </div>
          <div
            className="sponsor-content-half"
            style={{ alignItems: 'center' }}
            data-aos="fade-up"
          >
            <div className="sponsor-image-container">
              <SponsorImage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
