import Env from '../env.js';

const HomeNavData = [
  {
    label: 'About',
    id: 'about-section',
    enabled: true,
  },
  {
    label: 'Schedule',
    id: 'schedule-section',
    enabled: Env.schedule,
  },
  {
    label: 'Sponsors',
    id: 'sponsor-section',
    enabled: true,
  },
  {
    label: 'FAQ',
    id: 'faq-section',
    enabled: true,
  },
  {
    label: 'Team',
    id: 'team-section',
    enabled: true,
  },
  {
    label: 'Blog',
    id: 'blog-section',
    enabled: true,
  },
  {
    label: 'Contact',
    id: 'contact-section',
    enabled: true,
  },
];

export default HomeNavData;
