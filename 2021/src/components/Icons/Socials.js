import React from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as LinkedinSvg } from '../../assets/icons/social/linkedin.svg';
import { ReactComponent as InstagramSvg } from '../../assets/icons/social/instagram.svg';
import { ReactComponent as TwitterSvg } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as FacebookSvg } from '../../assets/icons/social/facebook.svg';

const Linkedin = (props) => <Icon component={LinkedinSvg} {...props} />;
const Instagram = (props) => <Icon component={InstagramSvg} {...props} />;
const Twitter = (props) => <Icon component={TwitterSvg} {...props} />;
const Facebook = (props) => <Icon component={FacebookSvg} {...props} />;

export { Linkedin, Instagram, Twitter, Facebook };
