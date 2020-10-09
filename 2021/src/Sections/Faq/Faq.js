import React, { Component } from "react";
import "./Faq.css";
import { Collapse } from "antd";

import { ReactComponent as Arrow } from "../../Assets/right.svg";
const { Panel } = Collapse;

const questions = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a 24 hour long event where aspiring programmers, graphic designers, and entrepreneurs gather to create a tech-based project that solves a problem of your choosing! After the 24 hours is up, you’ll be able to present your project to a judge and compete for prizes. Along the way, you’ll also have opportunities to learn more about the industry and have fun with your fellow hackers!",
  },
  {
    question: "Who can participate?",
    answer:
      "As long as you’re a high school student, or even a very motivated middle school student in North America, you can participate in JAMHacks! We want you to gain something from JAMHacks regardless of your skill level, your location, background or anything else. Other students and individuals can apply as mentors or judges. ",
  },
  {
    question: "Will JAMHacks be running in-person or online?",
    answer:
      "Due to the COVID-19 pandemic, JAMHacks will be running virtually. Everything can be done from the comfort of your own bedroom, and we’ll be using Discord to communicate during the event!",
  },
  {
    question: "What if I don’t know how to code?",
    answer:
      "That’s okay! At JAMHacks, learning is just as important as building and creating. We’ve got live workshops where you can learn brand new skills, and our mentors will be happy to help you bring your ideas to reality. Also, hackathons aren’t all about coding; robotics, hardware, business, and design skills are also very valuable! So if you’re not interested in coding, you can find a team and be in charge of business or design instead!",
  },
  {
    question: "What kind of workshops, talks, and activities will there be?",
    answer:
      "Our events are designed to fit everyone’s needs, so there will be everything from programming, to hardware, even to business and marketing. We know how to have fun, too—expect tons of games and contests!",
  },
  {
    question: "How big can my team be?",
    answer: "Teams of up to four are allowed to participate in the event.",
  },
  {
    question: "How will we communicate during the event?",
    answer:
      "We will be mainly using discord to communicate any announcements and will be using twitch to bring you our events. We also have social media account that will provide you with the latest including instagram and twitter.",
  },
  {
    question: "What can my project be about?",
    answer:
      "Your project can be about anything you can dream of—as long as it involves technology in some manner.",
  },
  {
    question: "Have a question that isn’t listed here?",
    answer:
      "Feel free to email us at hello@jamhacks.ca or send us a direct message on Instagram @jamhacks.",
  },
];

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq-div" id="faq-section">
        <div
          className="sponsor-display-title-div large-title"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up">
          <Collapse
            expandIcon={({ isActive }) => (
              <Arrow
                style={
                  isActive
                    ? { transform: "rotate(90deg)", transformOrigin: "75% 25%" }
                    : {}
                }
                rotate={isActive ? 90 : 0}
              />
            )}
          >
            {questions.map((question, index) => (
              <Panel
                header={question.question}
                key={index}
                className="site-collapse-custom-panel"
              >
                <p>{question.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Faq;

/*{
              questions.map((question, index) => (
                <Panel
                  header={{question.question}}
                  key={{index}}
                  className="site-collapse-custom-panel"
                >
                  <p>{{question.answer}}</p>
                </Panel>
              )
            }*/
