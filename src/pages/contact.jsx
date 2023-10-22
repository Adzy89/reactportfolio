import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/Common/navBar";
import Footer from "../components/Common/footer";
import Logo from "../components/Common/logo";
import Socials from "../components/About/Socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact-subtitle">
              I appreciate your desire to establish contact with me. Your
              feedback, inquiries, and suggestions are warmly received. If
              there's a particular question or comment on your mind, please
              don't hesitate to reach out to me directly through email at &nbsp;{" "}
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I
              make an effort to respond to all messages within 24 hours,
              although it may take me longer during busy periods. Alternatively,
              you can use the contact form on my website to get in touch. Simply
              fill out the required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on social media, you
              can find me on{" "}
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                {INFO.socials.instagram}
              </a>
              . I consistently share updates and interact with my followers on
              that platform, so feel free to get in touch. Once more, thank you
              for your interest, and I anticipate receiving your messages!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
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

export default Contact;
