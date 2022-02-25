import React, { Component } from 'react';
import { Button } from 'antd';

import styled from 'styled-components';
import { ReactComponent as SponsorImage } from '../../../assets/undraw/Business.svg';
import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';
import { media } from '../../../utils/media';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <ContentContainer id="sponsor-section">
          <TextContainer>
            <Header>Sponsor the Next Generation</Header>

            <Text>
              Want to make a lasting impression on our future innovators,
              coders, and entrepreneurs? Consider sponsoring JAMHacks! By doing
              so, you can connect with our hackers, gain exposure among those
              interested in tech, and even seek out potential recruits!
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
              <a href="mailto:sponsor@jamhacks.ca">sponsor@jamhacks.ca</a>.
            </Text>
            <a
              href="mailto:sponsor@jamhacks.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" style={{ width: '260px', height: '40px' }}>
                Become a Sponsor
              </Button>
            </a>
          </TextContainer>
          <ImageContainer data-aos="fade-up">
            <SvgContainer>
              <SponsorImage />
            </SvgContainer>
          </ImageContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  background: #fbf9ff;
  padding: 0 10%;
  width: 100%;
  z-index: 1;
  // padding-top: 350px;
  // ${media('md')`
  //   padding-top: 350px;
  // `}
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  z-index: 1;
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
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
  margin-top: 50px;
`;

const SvgContainer = styled.div`
  justify-content: center;
  display: flex;
  & svg {
    width: 80%;
    height: 50%;
    margin-right: 15%;
  }
`;

export default Sponsor;
