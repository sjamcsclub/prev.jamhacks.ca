import React, { Component } from "react";
import "./Faq.css";
import { Collapse } from "antd";

import { ReactComponent as Arrow } from "../../Assets/right.svg";
const { Panel } = Collapse;

const questions = [
  {
    question: "What is a hackathon?",
    answer: "",
  },
  {
    question: "How do I get to JAMHacks?",
    answer: "",
  },
  {
    question: "Who can participate?",
    answer: "",
  },
  {
    question: "Will JAMHacks be running in-person or online?",
    answer: "",
  },
  {
    question: "What if I don’t know how to code?",
    answer:
      "That’s okay! At JAMHacks, learning is just as important as building and creating. We’ve got live workshops where you can learn brand new skills and our mentors will be happy to help you bring your ideas into reality. Also, hackathons aren’t all about coding; robotics, hardware, business, and design skills can be invaluable!",
  },
  {
    question: "What kind of workshops, talks, and activities will there be?",
    answer: "",
  },
  {
    question: "What kind of workshops, talks, and activities will there be?",
    answer: "",
  },
  {
    question: "How will we communicate during the event?",
    answer: "",
  },
];

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq-div">
        <div className="sponsor-display-title-div" data-aos="fade-up">
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
