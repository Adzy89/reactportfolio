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
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
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
							Here are some of the projects I've made trying to put a dent in the Universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects and frameworks over the past 6 months
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
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