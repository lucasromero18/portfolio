import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    paddingTop: "8%",
    marginLeft: "38%",
    width: "20%",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#808080",
    borderBottom: "2px solid #add8e6"
  }
}


class Projects extends Component {
    render() {
      return (
      <div style={{backgroundColor: "#F5F5F5"}}>
        <div>
          <h1 style={header.styles}>Applications</h1>
        </div>
            <div>
          <Row>
          <Col sm="6">
            <Card body style={{marginTop: "8%", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Romero Fitness</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A Fitness Application that contains direction with various 
              training styles, accessibility to a body fat analyzer / chart to determine where the users health may lie.</CardText>
              <Button style={{color: "#add8e6"}}>Github</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{marginTop: "8%", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>techConnect</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button style={{color: "#add8e6"}}>Github</Button>
            </Card>
          </Col>
        </Row>
        <div>
        <Row>
          <Col sm="6">
            <Card body style={{marginTop: "5%", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>F.I.T.</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button style={{color: "#add8e6"}}>Github</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{marginTop: "5%", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Real Gaming Reviews</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button style={{color: "#add8e6"}}>Github</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body style={{marginTop: "5%", marginLeft: "46%", marginBottom: "5%", width: "55vw", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Yikers!</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button style={{color: "#add8e6"}}>GitHub</Button>
            </Card>
          </Col>
          </Row>
        </div>
        </div>
      </div>
      );
    }
  }
  
  export default Projects;