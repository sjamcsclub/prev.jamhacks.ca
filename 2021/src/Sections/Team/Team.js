import React from "react";
import { motion } from "framer-motion";
import "./Team.css";

import Placeholder from "../../Assets/Placeholder.png";

import Cristian from "../../Assets/Headshots/Cristian.png";
import Michelle from "../../Assets/Headshots/Michelle.png";
import Yina from "../../Assets/Headshots/Yina.png";
import Rohan from "../../Assets/Headshots/Rohan.png";
import Kegan from "../../Assets/Headshots/Kegan.png";
import Kevin from "../../Assets/Headshots/Kevin.png";
import Daniel from "../../Assets/Headshots/Daniel.png";
import Trevor from "../../Assets/Headshots/Trevor.png";
import Aditiya from "../../Assets/Headshots/Aditiya.png";
import Fred from "../../Assets/Headshots/Fred.png";
import Qianxu from "../../Assets/Headshots/Qianxu.png";
//import Arnav from "../../Assets/Headshots/Arnav";

const MemberData = [
  {
    name: "Cristian Bicheru",
    role: "Lead Organizer",
    headshot: Cristian,
    link: "https://github.com/cristian-bicheru",
  },
  {
    name: "Michelle Ma",
    role: "Vice Lead",
    headshot: Michelle,
    link: "https://www.linkedin.com/in/michelle-ma-a8b9031a1",
  },
  {
    name: "Yina Gao",
    role: "Vice Lead",
    headshot: Yina,
    link: null,
  },
  {
    name: "Rohan Shetty",
    role: "Logistics",
    headshot: Rohan,
    link: "rohanshetty.me",
  },
  {
    name: "Kegan Allen",
    role: "Logistics",
    headshot: Kegan,
    link: "https://github.com/allek6496",
  },
  {
    name: "Kevin Gao",
    role: "Website and Design",
    headshot: Kevin,
    link: "https://kevinboxugao.github.io/",
  },
  {
    name: "Daniel Yu",
    role: "Website",
    headshot: Daniel,
    link: "https://danielyu2004.github.io/",
  },
  {
    name: "Trevor Du",
    role: "Workshops",
    headshot: Trevor,
    link: "github.com/tdude92",
  },
  {
    name: "Aditiya Keerthi",
    role: "Workshops",
    headshot: Aditiya,
    link: "https://www.linkedin.com/in/aditya-keerthi-b93726197/",
  },
  {
    name: "Fred Yang",
    role: "Activity Lead",
    headshot: Fred,
    link: null,
  },
  {
    name: "Qianxu Guo",
    role: "Marketing",
    headshot: Qianxu,
    link: "https://www.linkedin.com/in/qianxu-guo-319808187/",
  },
  {
    name: "Arnav Tripathi",
    role: "Finance",
    headshot: Placeholder,
    link: null,
  },
];

const Team = () => {
  return (
    <div className="team-display-div">
      <div className="team-display-title-div large-title" data-aos="fade-up">
        Meet the Team
      </div>

      <div className="team-display-content-div" data-aos="fade-up">
        {MemberData.map((member) => {
          return (
            <div className="team-display-content-item">
              <motion.a
                whileHover={{ scale: member.link ? 1.1 : 1 }}
                href={member.link}
                style={{ cursor: member.link ? "pointer" : "default" }}
              >
                <img className="team-display-headshot" src={member.headshot} />
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
