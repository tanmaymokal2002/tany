import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ExternalLinks from "./ExternalLinks";

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
    const projects = {
      "Car Sales Analysis": {
        desc:
          "An Interactive Dashboard providing real-time insights into KPI's related to Car Sales data for a company",
        techStack: "SQL, Tableau, Powerpoint",
        link: "https://github.com/gazijarin/TDSBHomeworkManagement",
        open:
          "https://public.tableau.com/views/CarSales_17393900655030/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      "Accenture Virtual Internship": {
        desc:
          "An End-To-End Analysis project focused on data cleaning, modeling, and visualization for content popularity insights of Social Buzz(client company)",
        techStack: "Excel, PowerPoint",
        link: "https://github.com/tanmaymokal2002/Accenture-Virtual-Internship",
      },

      "Netflix SQL Project": {
        desc:
          "A comprehensive data analysis project on Netflix Movies and TV Shows using SQL, focusing on content distribution, ratings, and trends.",
        techStack: "PostgreSQL",
        link: "https://github.com/tanmaymokal2002/Netflix-SQL-Project",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
