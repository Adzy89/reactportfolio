import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/Common/navBar";
import Footer from "../components/Common/footer";
import Logo from "../components/Common/logo";
import AllProjects from "../components/Projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Here are a few of the initiatives I've undertaken in an effort to
              make a significant impact on the world.
            </div>

            <div className="subtitle projects-subtitle">
              I've been engaged in a diverse array of projects and frameworks in
              the past half-year, and I take pride in the strides I've made.
              Many of these undertakings are open-source, accessible for anyone
              to delve into and participate in. If any of these projects
              intrigue you, please do explore the code and propose any
              enhancements or refinements you may envision. Collaborating with
              fellow individuals is a fantastic avenue for personal development,
              and I remain receptive to fresh ideas and constructive input.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
