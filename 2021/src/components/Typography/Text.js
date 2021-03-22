import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';

const Text = styled.p`
  color: ${(props) =>
    props.dark
      ? props.theme.colors.text.dark.text
      : props.theme.colors.text.light.text};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
  font-family: ${(props) => props.theme.fonts.secondary};
  ${media('md')`
    font-size: 1.1rem;
  `}
  ${media('sm')`
    font-size: 1rem;
  `}
`;

export default Text;
