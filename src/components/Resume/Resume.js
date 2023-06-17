
import React, { useEffect} from "react";
import Footer from "../Common/footer";
import myResume from "../../assests/adamPilatoResume.pdf";
import "./Resume.css";
import NavBar from "../Common/navBar";

import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {

  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <>
    <div className="page-content">
        <NavBar active="resume" />
        
          <div>
            <Document file={myResume} className="pdf">
              <Page pageNumber={1} />
            </Document>
   
          </div>

          <div className="page-footer" >
						<Footer />
				  </div>
      </div>
        
      
  </>

  );
};

export default Resume;