import React from 'react';
import Icon from '@ant-design/icons';
import styled from 'styled-components';
import { ReactComponent as LinkedinSvg } from '../../assets/icons/social/linkedin.svg';
import { ReactComponent as InstagramSvg } from '../../assets/icons/social/instagram.svg';
import { ReactComponent as TwitterSvg } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as FacebookSvg } from '../../assets/icons/social/facebook.svg';
import { ReactComponent as MediumSvg } from '../../assets/icons/social/medium.svg';

const Linkedin = (props) => <Icon component={LinkedinSvg} {...props} />;
const Instagram = (props) => <Icon component={InstagramSvg} {...props} />;
const Twitter = (props) => <Icon component={TwitterSvg} {...props} />;
const Facebook = (props) => <Icon component={FacebookSvg} {...props} />;
const Medium = (props) => <Icon component={MediumSvg} {...props} />;

const LinkedinIcon = styled(Linkedin)`
  color: ${(props) =>
    props.primary ? props.primary : props.theme.colors.primary.default};
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${(props) =>
      props.secondary ? props.secondary : props.theme.colors.secondary.default};
  }
`;
const InstagramIcon = styled(Instagram)`
  color: ${(props) =>
    props.primary ? props.primary : props.theme.colors.primary.default};
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary.default};
  }
`;
const TwitterIcon = styled(Twitter)`
  color: ${(props) =>
    props.primary ? props.primary : props.theme.colors.primary.default};
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary.default};
  }
`;
const FacebookIcon = styled(Facebook)`
  color: ${(props) =>
    props.primary ? props.primary : props.theme.colors.primary.default};
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary.default};
  }
`;
const MediumIcon = styled(Medium)`
  color: ${(props) =>
    props.primary ? props.primary : props.theme.colors.primary.default};
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary.default};
  }
`;

export { LinkedinIcon, InstagramIcon, TwitterIcon, FacebookIcon, MediumIcon };
