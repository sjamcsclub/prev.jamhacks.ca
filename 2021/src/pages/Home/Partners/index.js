import React, { Component } from 'react';

import Header from '../../../components/Typography/Header';

import { partners } from '../../../data/sponsors';

class SponsorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sponsor-display-div" id="sponsors-section">
        <Header
          className="sponsor-display-title-div large-title"
          data-aos="fade-up"
        >
          Partners
        </Header>
        <div
          className="sponsor-display-content-div"
          data-aos="fade-up"
          style={{ marginBottom: '60px' }}
        >
          {partners.map((val) => {
            return (
              <a
                href={val.link}
                target="_blank"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '0px',
                }}
                className="peach-container"
              >
                <img
                  src={val.logo}
                  className="sponsor-display-item peach"
                  style={{ marginBottom: '0px' }}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SponsorDisplay;
