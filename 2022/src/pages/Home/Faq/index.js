import React, { Component } from 'react';
import './Faq.css';
import { Collapse } from 'antd';
import { Header } from '../../../components/Typography';
import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../../assets/icons/RightArrow.svg';

import { QuestionsC1, QuestionsC2 } from '../../../data/faq';

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
          <div className="faq-content-div-col1">
            <Collapse>
              {QuestionsC1.map((question, index) => (
                <Panel header={question.question} key={index}>
                  <p style={{ marginBottom: '0px' }}>{question.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className="faq-content-div-col1">
            <Collapse>
              {QuestionsC2.map((question, index) => (
                <Panel header={question.question} key={index}>
                  <p style={{ marginBottom: '0px' }}>{question.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
          <div style={{ marginTop: '20px' }}>
            <span style={{ textAlign: 'center' }}>
              Still got a question? Feel free to send us an email at{' '}
              <a className="faq-action">contact@jamhacks.ca</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
