
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
// import Articles from "./pages/articles";
// import ReadArticle from "./pages/readArticle";
import Resume from "./components/Resume/Resume"
import Contact from "./pages/contact";
import Notfound from "./pages/404";

// import { TRACKING_ID } from "./data/tracking";
import "./App.css";

function App() {
	// useEffect(() => {
	// 	if (TRACKING_ID !== "") {
	// 		ReactGA.initialize(TRACKING_ID);
	// 	}
	// }, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/Resume" element={<Resume />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;