import React, { useState, useEffect } from "react";
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







// class Contact extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         email: '',
//         message: ''
//       }
//     }
    
//       handleSubmit(e) {
//           e.preventDefault();
  
//           axios({
//             method: "POST", 
//             url:"http://localhost:3002/send", 
//             data:  this.state
//           }).then((response)=>{
//             if (response.data.status === 'success') {
//               alert("Message Sent."); 
//               this.resetForm()
//             } else if(response.data.status === 'fail') {
//               alert("Message failed to send.")
//             }
//           });
//       }
  
//       resetForm(){
//           this.setState({name: '', email: '', message: ''})
//         }
  
//     render() {
//       return(
//         <div className="Contact">
//           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       );
//     }

//     onNameChange(event) {
//         this.setState({name: event.target.value})
//       }
    
//       onEmailChange(event) {
//         this.setState({email: event.target.value})
//       }
    
//       onMessageChange(event) {
//         this.setState({message: event.target.value})
//       }
  
    
//   }
  
//   export default Contact;




