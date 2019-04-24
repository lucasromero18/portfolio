import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    paddingTop: "2em",
    textAlign: "center",
    fontSize: "3.5em",
    fontWeight: "bold",
    color: "#808080",
    marginBottom: "1em"
  }
}


class Projects extends Component {
    render() {
      return (
      <div id="applications" style={{backgroundColor: "#F5F5F5"}}>
        <div>
          <h1 style={header.styles}>Applications<i style={{marginLeft: ".5em", color: "#add8e6"}} class="fas fa-laptop"></i></h1>
        </div>
            <div>
            <Row>
          <Col style={{paddingLeft: "2.5em"}}  sm="6">
            <Card body style={{marginTop: "3em", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Romero Fitness</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A Fitness Application (built with 
              HTML, CSS, Bootstrap, and javascript) that contains direction with various training styles, accessibility to a body fat analyzer / 
              chart to determine where the users health may lie.</CardText>
              <h1 style={{fontSize: ".9em", textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>(4 day timeline)</h1>
              <a href="https://github.com/lucasromero18/q1-project-romero-fitness"><Button style={{color: "#add8e6", marginLeft: "42%"}}>Github</Button></a>
            </Card>
          </Col>
          <Col style={{paddingRight: "2.5em"}} sm="6">
            <Card body style={{marginTop: "3em", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>techConnect</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A tech-industry dating 
              application (built with Node.js, Knex, Express, PostgreSQL, EJS, and Materialize) that brings users together based off of tech
              related interests, such as languages and frameworks. Swipe away with techConnect!</CardText>
              <h1 style={{fontSize: ".9em", textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>(4 day timeline / Team Project)</h1>
              <a href="https://github.com/lucasromero18/techConnect"><Button style={{color: "#add8e6", marginLeft: "43%"}}>Github</Button></a>
            </Card>
          </Col>
        </Row>
        <div>
        <Row>
          <Col style={{paddingLeft: "2.5em"}} sm="6">
            <Card body style={{marginTop: "2em", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>F.I.T.</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A Fitness Inventory Application
              (built with React, Materialize, Node.js, Knex, Express, PostgreSQL) that allows one to construct their "dream" at home gym with
              various items, and checkout items in their cart.</CardText>
              <h1 style={{fontSize: ".9em", textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>(4 day timeline)</h1>
              <a href="https://github.com/lucasromero18/q3project-frontend"><Button style={{color: "#add8e6", marginLeft: "42%"}}>Github</Button></a>
            </Card>
          </Col>
          <Col style={{paddingRight: "2.5em"}}  sm="6">
            <Card body style={{marginTop: "2em", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Real Gaming Reviews</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A video game review application 
              (built with React, MDBootstrap, Node.js, Knex, Express, PostgreSQL) that allows users to view the latest video games, and 
              leave reviews to inform others about that game.</CardText>
              <h1 style={{fontSize: ".9em", textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>(4 day timeline / Team Project)</h1>
              <a href="https://github.com/mpecicUSA/realGamingReviewsq4"><Button style={{color: "#add8e6", marginLeft: "42%"}}>Github</Button></a>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body style={{marginTop: "3em", marginLeft: "17em", marginBottom: "4em", width: "55vw", backgroundColor: "#808080"}}>
              <CardTitle style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2em"}}>Yikers!</CardTitle>
              <CardText style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>A Social Media Application (built
              with Vue.js, VueX, Vuetify, Node.js, Express, Knex, PostgreSQL) That allows users to view situations others have been in, create
              situations, rate others solutions, and comment on situations to give advice.</CardText>
              <h1 style={{fontSize: ".9em", textAlign: "center", fontFamily: 'Montserrat, sans-serif', color: "#add8e6"}}>(2 week timeline)</h1>
              <a href="https://github.com/lucasromero18/yikers_frontend"><Button style={{color: "#add8e6", marginLeft: "44%"}}>GitHub</Button></a>
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