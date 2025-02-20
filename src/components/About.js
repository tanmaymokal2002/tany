import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am a recent graduate and an aspiring{" "}
        <a href="#">
          <b>Data Analytics Engineer</b>
        </a>{" "}
        with a passion for transforming raw data into meaningful insights. I
        have a strong foundation in{" "}
        <a href="#">
          <b>SQL</b>
        </a>
        ,{" "}
        <a href="#">
          <b>Python </b>
        </a>
        and{" "}
        <a href="#">
          <b>Tableau </b>
        </a>{" "}
        and I am continuously expanding my knowledge in data analytics, machine
        learning, and cloud technologies. I am looking for opportunities to work
        on impactful projects.
      </p>
    );
    const two = (
      <p>
        Outside of work, I follow AI advancements and enjoy reading — currently
        reading <b>Fundamentals of Data Engineering</b> and{" "}
        <b>Norwegian Wood</b>.
      </p>
    );

    const tech_stack = ["SQL", "Python", "Tableau", "Excel", "ETL", "Azure"];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/me2.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
