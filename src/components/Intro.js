import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import AnimatedComputer from "./AnimatedComputer";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <AnimatedComputer></AnimatedComputer>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"tanmay"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I can Analyze You :)</div>
          <div className="intro-desc">
            Aspiring Data Analytics Engineer passionate about transforming raw
            data into actionable insights. Proficient in SQL and Python, with
            experience in building interactive dashboards to visualize key
            metrics
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&to=tanmaymokal2002@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
