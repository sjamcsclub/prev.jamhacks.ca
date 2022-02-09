import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

import Daniel from '../../../assets/headshots/Daniel.png';
import Aditiya from '../../../assets/headshots/Aditya.png';
import Qianxu from '../../../assets/headshots/Qianxu.png';
import Andrew from '../../../assets/headshots/Andrew.png';
import Calvin from '../../../assets/headshots/Calvin.png';
import Evan from '../../../assets/headshots/Evan.png';
import Luke from '../../../assets/headshots/Luke.png';
import Angelina from '../../../assets/headshots/Angelina.png';
import Freda from '../../../assets/headshots/Freda.png';
import Nathan from '../../../assets/headshots/Nathan.png';
import Sohil from '../../../assets/headshots/Sohil.png';
import Jon from '../../../assets/headshots/Jon.png';

const MemberData = [
  {
    name: 'Aditya Keerthi',
    role: 'Co-Lead',
    headshot: Aditiya,
    link: 'https://www.linkedin.com/in/aditya-keerthi-b93726197/',
  },
  {
    name: 'Qianxu Guo',
    role: 'Co-Lead',
    headshot: Qianxu,
    link: 'https://www.linkedin.com/in/qianxu-guo-319808187/',
  },
  {
    name: 'Daniel Yu',
    role: 'Co-Lead',
    headshot: Daniel,
    link: 'https://www.linkedin.com/in/danielyu2004/',
  },
  {
    name: 'Andrew Yang',
    role: 'Web Developer',
    headshot: Andrew,
    link: 'https://www.linkedin.com/in/andytubeee',
  },
  {
    name: 'Calvin Salsali',
    role: 'Logistics',
    headshot: Calvin,
    link: '#',
  },
  {
    name: 'Evan Wang',
    role: 'Logistics',
    headshot: Evan,
    link: 'https://www.linkedin.com/in/evanwang04/',
  },
  {
    name: 'Luke Zhang',
    role: 'Logistics',
    headshot: Luke,
    link: 'https://www.linkedin.com/in/luke-zhang-1b8a89198/',
  },
  {
    name: 'Sohil Athare',
    role: 'Logistics',
    headshot: Sohil,
    link: 'https://www.linkedin.com/in/sohil-athare-450a9a1a9/',
  },
  {
    name: 'Jon Tang',
    role: 'Logistics',
    headshot: Jon,
    link: '#',
  },
  {
    name: 'Angelina Wang',
    role: 'Marketing',
    headshot: Angelina,
    link: '#',
  },
  {
    name: 'Freda Zhao',
    role: 'Marketing',
    headshot: Freda,
    link: 'https://www.linkedin.com/in/freda-zhao-984442210/',
  },
  {
    name: 'Nathan Wong',
    role: 'Finance',
    headshot: Nathan,
    link: 'https://www.linkedin.com/in/nathan-wong-03362696/',
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
                whileHover={{ scale: member.link ? 1.05 : 1 }}
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
