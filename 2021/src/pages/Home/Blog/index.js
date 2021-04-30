import React from 'react';
import styled from 'styled-components';
import { Header, Text } from '../../../components/Typography';
import Socials from '../../../data/socials';

const Blog = () => {
  return (
    <Container id="blog-section">
      <Header>Blog</Header>
      <Text>
        Check out our{' '}
        <a href={Socials.medium} target="_blank" rel="noopener noreferrer">
          blog posts on Medium,
        </a>{' '}
        written by our organizers for fun and insightful articles on hackathons,
        coding, success stories, and more! We will be posting every week,
        starting April 26th!
      </Text>
    </Container>
  );
};

const Container = styled.div`
  background: #fbf9ff;
  padding: 0 10%;
`;

export default Blog;
