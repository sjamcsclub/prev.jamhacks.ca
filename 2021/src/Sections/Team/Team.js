import React from "react";

import "./Team.css";

import Placeholder from "../../Assets/Placeholder.png"

const Team = () => {
  return (
    <div className="team-display-div">
      <div className="team-display-title-div large-title" data-aos="fade-up">
        Meet the Team
      </div>
      <div className="team-display-content-div">
        {
          ["","","","","","","","","","","",""].map(() => {
            return (
              <div className="team-display-content-item">
                <img className="team-display-headshot" src={Placeholder} ></img>
                <div className="team-display-content-item-main">Cristian Bicheru</div>  
                <div className="team-display-content-item-second">Lead Organizer</div>
              </div>
            )
          })
        }
        
        





      </div>
    </div>
  );
};

export default Team;
