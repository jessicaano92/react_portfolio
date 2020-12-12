import React from "react";
import {Button, TextField} from "@material-ui/core";






const Contact = () => {
    

    return (  
        <>      
        <h2 className="text-center">Contact Me</h2>
        <div className="ContactMe">

          <form>
            <div className="form-group">
              <TextField fullWidth="true" id="filled-basic" label="Name" variant="filled" />
            </div>
            < hr />
            <div className="form-group">
              <TextField fullWidth="true" id="filled-basic" label="Email" variant="filled" />
            </div>
            <hr />
            <div className="form-group">
              <TextField fullWidth="true" id="filled-basic" label="Your Message" variant="filled" multiline="true" />
            </div>
            <Button variant="contained" color="primary">Send</Button>
          </form>
        </div>

      </>
    )
}


export default Contact;