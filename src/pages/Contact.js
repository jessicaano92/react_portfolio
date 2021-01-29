import React, { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from 'axios';


function Contact () {
  const [ serverState, setServerState ] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios ({
      method: "post",
      url: "https://formspree.io/f/xeqpryja",
      data: new FormData(form)
    })
    .then(r => {
      handleServerResponse(true, "Thanks!", form);
    })
    .catch(r => {
      handleServerResponse(false, r.response.data.error, form);
    });
  };

  return (
    <div className="contactPage">
      <div className="container-fluid">
        <h2 className="contactH3">Feel free to contact me!</h2>
        <div className="contactImg">
          <a className="iconLink" href="https://www.github.com/jessicaano92" rel="noopener noreferrer" target="_blank">
            <FaGithub size={50} />
          </a>
          <a className="iconLink" href="https://www.linkedin.com/in/jessica-anocibar/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin size={50} />
          </a>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <form className="contactForm" onSubmit={handleOnSubmit}>

              <label className="formLabel" htmlFor="name">name</label>
              <br />
              <input className="formInput" id="name" type="name" name="name" required />
              <br />
              <label className="formLabel" htmlFor="email">email</label>
              <br />
              <input className="formInput" id="email" type="email" name="email" required />
              <br />
              <label className="formLabel" htmlFor="message">message</label>
              <br />
              <textarea className="formText" id="message" name="message"></textarea>
              <br />
              <ReactBootstrap.Button variant="link" className="contactBtn" type="submit" disabled={serverState.submitting}>
                Submit
              </ReactBootstrap.Button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}
            </form>
          </div>
          <div className="col-12 col-md-6 contactTop">
            <a className="iconLink" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:9cf474e6-b99d-4ec8-a04f-7ec28b5bd93c" rel="noopener noreferrer" target="_blank">
              <ReactBootstrap.Button variant="link" className="contactBtn">Download Resume</ReactBootstrap.Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )


}
export default Contact;




