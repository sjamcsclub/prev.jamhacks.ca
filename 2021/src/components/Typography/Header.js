import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';

const Header = styled.h2`
  color: ${(props) =>
    props.dark
      ? props.theme.colors.text.dark.header
      : props.theme.colors.text.light.header};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin: 1em 0;
  font-family: ${(props) => props.theme.fonts.primary};
  ${media('md')`
    font-size: 1.75rem;
  `}
  ${media('sm')`
    font-size: 1.5rem;
  `}
`;

export default Header;
