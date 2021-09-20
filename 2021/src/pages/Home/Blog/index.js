import React from 'react';
import styled from 'styled-components';
import { Header, Text } from '../../../components/Typography';
import Socials from '../../../data/socials';
import { ReactComponent as BlogImage } from '../../../assets/undraw/Blog.svg';
import { media } from '../../../utils/media';

const Blog = () => {
  return (
    <Container id="blog-section">
      <TextContainer data-aos="fade-up">
        <Header>Blog</Header>
        <Text>
          Interested in learning more about hackathons? Check out our blog posts
          on the{' '}
          <a href={Socials.medium} target="_blank" rel="noopener noreferrer">
            JAMHacks Medium
          </a>
          , where you'll find articles written by our very own organizers,
          covering topics related to making your hackathon project stand out,
          frontend and backend development, impostor syndrome in the tech
          industry, organizing your own hackathon, coding success stories, and
          more!
        </Text>
      </TextContainer>
      <ImageContainer data-aos="fade-up">
        <StyledBlogImage>
          <BlogImage />
        </StyledBlogImage>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  padding: 0 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledBlogImage = styled.div`
  justify-content: center;
  display: flex;
  & svg {
    width: 80%;
    height: auto;
  }
`;

export default Blog;
