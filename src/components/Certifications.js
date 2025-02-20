import React from "react";
import "../styles/Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Data Analyst Bootcamp": {
        link:
          "https://www.udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/?couponCode=ST9MT120225A",
        image: "/assets/data_analyst_bootcamp.jpg",
      },
      "SQL - MySQL for Data Analytics and Business Intelligence": {
        link:
          "https://www.udemy.com/course/sql-mysql-for-data-analytics-and-business-intelligence/?couponCode=ST9MT120225A",
        image: "/assets/sql_udemy.jpg",
      },
      Excel: {
        link:
          "https://www.udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/?couponCode=ST9MT120225A",
        image: "/assets/excel.jpg",
      },
      "SQL Hackerank Advanced": {
        link:
          "https://www.udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/?couponCode=ST9MT120225A",
        image: "/assets/sql_hackerank_advanced.jpg",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ certifications</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Projects;
