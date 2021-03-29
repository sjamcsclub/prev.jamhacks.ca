import React, { Component } from 'react';
import { Button } from 'antd';
import './Mentor.css';

import { ReactComponent as MentorImage } from '../../../assets/undraw/Brainstorming.svg';
import { ReactComponent as VolunteerImage } from '../../../assets/undraw/Volunteer.svg';
import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.mentor === 'close' && this.props.volunteer === 'close') {
      return '';
    } else {
      return (
        <div className="mentor-div">
          <div className="sponsor-content-div">
            <div className="sponsor-content-half" data-aos="fade-up">
              <Header>Mentor Upcoming Talent</Header>
              <Text>
                Are you in university, or do you have experience in the tech
                industry? Do you want to make an impact on our high school
                hackers? We're looking for mentors and judges to answer our
                hackers' questions, help bring their ideas into reality, and
                witness the products of their hard work. We invite anyone
                enthusiastic to share their knowledge to apply to become a
                mentor at JAMHacks today!
              </Text>
              <a
                href="https://wvmzd7k3wc0.typeform.com/to/qALh2BUY"
                target="_blank"
              >
                <Button
                  type="primary"
                  style={{ height: '40px' }}
                  disabled={this.props.mentor === 'finished'}
                >
                  {this.props.mentor === 'finished'
                    ? 'Applications Closed'
                    : 'Apply to be a Mentor'}
                </Button>
              </a>
            </div>
            <div
              className="sponsor-content-half"
              style={{ alignItems: 'center' }}
              data-aos="fade-up"
            >
              <div className="mentor-section-image-container">
                <MentorImage />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Mentor;
