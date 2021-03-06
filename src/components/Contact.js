import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Contact extends Component {
  
    render() {
      return (
        <>
        <div id="contactInfo" style={{backgroundColor: "#2a2a2a", marginTop: "-15px"}}>
        <div>
          <h1 style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', fontSize: "3em", fontWeight: "bold", paddingTop: "3%", color: "#add8e6" }}>Let's get in touch <i style={{fontSize: ".8em"}}class="fas fa-arrow-down"></i></h1>
        </div>
          <div style={{paddingBottom: "2em"}}>
          <Row style={{justifyContent: "center", paddingTop: "2em"}}>
          <Col sm="1">
            <div>
              <a href="https://www.linkedin.com/in/lucasjulianromero/"><i style={{color: "#add8e6", fontSize: "4em"}} class="fab fa-linkedin"></i></a>
            </div>
          </Col>
          <Col sm="1">
            <div>
              <a href="mailto:lucasjulromero@gmail.com"><i style={{color: "#add8e6", fontSize: "4em"}} class="far fa-envelope"></i></a>
            </div>
          </Col>
          </Row>
        </div>
      </div>
        </>
      );
    }
  }
  
  export default Contact;