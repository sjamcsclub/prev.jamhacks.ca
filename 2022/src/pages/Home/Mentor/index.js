import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { ReactComponent as MentorImage } from '../../../assets/undraw/Brainstorming.svg';
import { ReactComponent as VolunteerImage } from '../../../assets/undraw/Volunteer.svg';
import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';
import { media } from '../../../utils/media';
import Env from '../../../data/env';

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
        <Container>
          <TextContainer data-aos="fade-up">
            <Header>Mentor Upcoming Talent</Header>
            <Text>
              Are you in university, or do you have experience in the tech
              industry? Do you want to make an impact on our high school
              hackers? We're looking for mentors and judges to answer our
              hackers' questions, help bring their ideas into reality, and
              witness the products of their hard work. We invite anyone
              enthusiastic to share their knowledge to apply to become a mentor
              at JAMHacks today!
            </Text>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSco9I1zhoZzZmaQt6qYYANLEn1AGEP1PBM_X8He9xn5FQaRFw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="primary"
                style={{ height: '40px' }}
                disabled={this.props.mentor === 'finished'}
              >
                {this.props.mentor === 'finished'
                  ? 'Applications Closed'
                  : 'Apply Now!'}
              </Button>
            </a>
          </TextContainer>
          <ImageContainer data-aos="fade-up">
            <SvgContainer>
              <MentorImage />
            </SvgContainer>
          </ImageContainer>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  background: #fbf9ff;
  padding: 0 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${Env.mentor ? 'padding-top: 300px;' : ''}
  ${media('md')`
    flex-direction: column-reverse;
  `}
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
`;

const SvgContainer = styled.div`
  justify-content: center;
  display: flex;
  & svg {
    width: 80%;
    height: auto;
  }
`;

export default Mentor;
