import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import sampleResume from '../Pdf/AnocibarResume2020-Google Docs.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function Resume() {
    return (
      <>
      <ReactBootstrap.Accordion>
        <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button}  variant="link" className="resumeBtn" eventKey="0">
              View Resume
        </ReactBootstrap.Accordion.Toggle>
      <ReactBootstrap.Accordion.Collapse eventKey="0">
        <>
        <Document file={sampleResume}>
        <Page pageNumber={1} />
      </Document>
      </>
      </ReactBootstrap.Accordion.Collapse>
  </ReactBootstrap.Accordion>
      </>
  
    );
  }