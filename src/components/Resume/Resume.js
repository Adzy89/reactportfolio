
import React, { useEffect } from "react";
import Footer from "../Common/footer";
import "../../pages/styles/resume.css";

import myResume from "../../assests/adamPilatoResume.pdf";

const Resume = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


  return (
    <React.Fragment>
      <div>
        <div>
          <iframe
            id="fred"
            title="PDF in an i-Frame"
            src={myResume}
            frameborder="1"
            scrolling="auto"
            height="1100"
            width="100%"
            ></iframe>
        </div>

        <div className="page-footer">
							<Footer />
						</div>
			</div>
				
    </React.Fragment>
  );
}

export default Resume;