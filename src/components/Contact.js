import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends Component {

    render() {
      return (
        <>
        <div style={{backgroundColor: "#2a2a2a"}}>
         <h1 style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', fontSize: "40px", fontWeight: "bold", paddingTop: "7%", color: "#add8e6" }}>Let's get in touch!</h1>
         <div>
         <Form>
           <div style={{justifyContent: "center"}}>
            <FormGroup>
              <Input style={{width: "30%", margin: "0 auto", fontFamily: 'Montserrat, sans-serif'}} type="name" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Input style={{width: "30%",  margin: "0 auto", fontFamily: 'Montserrat, sans-serif'}} type="email" name="email" id="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Input style={{width: "30%", height: "90%",  margin: "0 auto", fontFamily: 'Montserrat, sans-serif'}} type="textarea" name="text" id="exampleText" placeholder="Your Message" />
            </FormGroup>
            <Button style={{color: "#add8e6", marginLeft: "45%", width: "10%", marginBottom: "3%" }} outline>Submit</Button>{' '}
          </div>
        </Form>
          </div>
        </div>
        </>
      );
    }
  }
  
  export default Contact;