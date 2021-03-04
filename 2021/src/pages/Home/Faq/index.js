import React, { Component } from 'react';
import './Faq.css';
import { Collapse } from 'antd';

import { ReactComponent as Arrow } from '../../../assets/Icons/RightArrow.svg';
const { Panel } = Collapse;

import Questions from '../../../data/faq';

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq-div" id="faq-section">
        <div className="sponsor-display-title-div" data-aos="fade-up">
          Frequently Asked Questions
        </div>
        <div className="faq-content-div" data-aos="fade-up">
          <Collapse
            expandIcon={({ isActive }) => (
              <Arrow
                style={
                  isActive
                    ? {
                        fill: '#7b0ff7',
                        transform: 'rotate(90deg)',
                        transformOrigin: '75% 25%',
                      }
                    : { fill: '#7b0ff7' }
                }
                rotate={isActive ? 90 : 0}
              />
            )}
          >
            {Questions.map((question, index) => (
              <Panel header={question.question} key={index}>
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
