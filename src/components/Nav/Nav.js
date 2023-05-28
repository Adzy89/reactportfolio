import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navi = () => {
  const [showNavi, setShowNavi] = useState(false);

  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/" onClick={() => setShowNavi(false)}>
              Home
            </Link>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/"
              onClick={() => setShowNavi(false)}
            ></NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={showNavi ? "mobile-show" : ""}>
          <Nav.Link>
            <NavLink
              activeclassname="active"
              className="about-link"
              to="/about"
              onClick={() => setShowNavi(false)}
            >
              About Me
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact"
              onClick={() => setShowNavi(false)}
            >
              Contact
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
          <NavLink
              activeclassname="active"
              className="projects-link"
              to="/projects"
              onClick={() => setShowNavi(false)}
            >
              Projects
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >
          <NavLink
              activeclassname="active"
              className="resume-link"
              to="/resume"
              onClick={() => setShowNavi(false)}
            >
              Resume
            </NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default Navi;
