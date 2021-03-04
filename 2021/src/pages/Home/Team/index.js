import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

import Cristian from '../../../assets/Headshots/Cristian.png';
import Michelle from '../../../assets/Headshots/Michelle.png';
import Yina from '../../../assets/Headshots/Yina.png';
import Rohan from '../../../assets/Headshots/Rohan.png';
import Kevin from '../../../assets/Headshots/Kevin.png';
import Daniel from '../../../assets/Headshots/Daniel.png';
import Trevor from '../../../assets/Headshots/Trevor.png';
import Aditiya from '../../../assets/Headshots/Aditiya.png';
import Fred from '../../../assets/Headshots/Fred.png';
import Qianxu from '../../../assets/Headshots/Qianxu.png';
import Arnav from '../../../assets/Headshots/Arnav.png';

const MemberData = [
  {
    name: 'Cristian Bicheru',
    role: 'Lead Organizer',
    headshot: Cristian,
    link: 'https://github.com/cristian-bicheru',
  },
  {
    name: 'Michelle Ma',
    role: 'Vice Lead',
    headshot: Michelle,
    link: 'https://www.linkedin.com/in/michelle-ma-a8b9031a1',
  },
  {
    name: 'Yina Gao',
    role: 'Vice Lead',
    headshot: Yina,
    link: null,
  },
  {
    name: 'Rohan Shetty',
    role: 'Logistics',
    headshot: Rohan,
    link: 'https://rohanshetty.me',
  },
  {
    name: 'Kevin Gao',
    role: 'Website and Design',
    headshot: Kevin,
    link: 'https://kevinboxugao.github.io/',
  },
  {
    name: 'Daniel Yu',
    role: 'Website',
    headshot: Daniel,
    link: 'https://www.linkedin.com/in/danielyu2004/',
  },
  {
    name: 'Trevor Du',
    role: 'Workshops',
    headshot: Trevor,
    link: 'https://github.com/tdude92',
  },
  {
    name: 'Aditya Keerthi',
    role: 'Workshops',
    headshot: Aditiya,
    link: 'https://www.linkedin.com/in/aditya-keerthi-b93726197/',
  },
  {
    name: 'Fred Yang',
    role: 'Activity Lead',
    headshot: Fred,
    link: null,
  },
  {
    name: 'Qianxu Guo',
    role: 'Marketing',
    headshot: Qianxu,
    link: 'https://www.linkedin.com/in/qianxu-guo-319808187/',
  },
  {
    name: 'Arnav Tripathi',
    role: 'Finance',
    headshot: Arnav,
    link: null,
  },
];

const Team = () => {
  return (
    <div className="team-display-div" id="team-section">
      <div className="team-display-title-div" data-aos="fade-up">
        Meet the Team
      </div>

      <div className="team-display-content-div" data-aos="fade-up">
        {MemberData.map((member) => {
          return (
            <div key={member.name} className="team-display-content-item">
              <motion.a
                whileHover={{ scale: member.link ? 1.1 : 1 }}
                href={member.link}
                style={{ cursor: member.link ? 'pointer' : 'default' }}
              >
                <img
                  alt={member.name + ' portrait'}
                  className="team-display-headshot"
                  src={member.headshot}
                />
              </motion.a>
              <div className="team-display-content-item-main">
                {member.name}
              </div>
              <div className="team-display-content-item-second">
                {member.role}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
