import React, { Component } from 'react';
import './Faq.css';
import { Collapse } from 'antd';
import { Header } from '../../../components/Typography';

import { ReactComponent as Arrow } from '../../../assets/icons/RightArrow.svg';

import Questions from '../../../data/faq';

const { Panel } = Collapse;

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq-div" id="faq-section">
        <Header>Frequently Asked Questions</Header>
        <div className="faq-content-div" data-aos="fade-up">
          <Collapse>
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
