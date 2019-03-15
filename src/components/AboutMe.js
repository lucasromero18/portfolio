import React, { Component } from 'react';
import myImmy from '../lucas_port_immy.jpg';
import { IncomingMessage } from 'http';

let test = require('progressbar.js');

console.log(test);
 
const aboutMeHeader = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#2a2a2a',
    borderBottom: "5px double #2a2a2a",
    fontSize: "40px",
    fontWeight: "bold",
    marginLeft: "44%",
    marginTop: "5%",
    width: "10%"
  }
}

const picImageContainer = {
  styles: {
    display: "flex"
  }
}

const getToKnowMe = { 
  styles: {
    fontSize: "1.7em",
    marginTop: "5%"
  }
}

const aboutMeText = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "5%",
    marginRight: "5%"
  }
}

const myImage = {
  styles: {
    width: "300px",
    height: "370px",
    marginLeft: "2%",
    borderRadius: "90%",
    marginTop: "0 auto"
  }
}

const ihdContainer = {
  styles: {
    display: "flex",
    marginLeft: "6%",
  }
}

const icon = {
  styles: {
    fontSize: "2em",
    color: "#add8e6"
    }
}

const skillLabel = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "2%",
    color: "#2a2a2a"
  }
}





class AboutMe extends Component {
    render() {
 
      return (
        <div>
          <h1 style={aboutMeHeader.styles}>About</h1>
            <div style={picImageContainer.styles}>
              <img style={myImage.styles} src={myImmy} />
              <p style={aboutMeText.styles}><h1 style={getToKnowMe.styles}>Get to know me</h1>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a 
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human 
              happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to 
              pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or 
              desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure 
              im some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some 
              advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
              or one who avoids a pain that produces no resultant pleasure?</p>
          </div>
          <div style={ihdContainer.styles}>
          <div>
            <h1><i style={icon.styles} class="fas fa-globe-americas"></i></h1>
            <h2 style={skillLabel.styles}>Communication</h2>
          </div>
          <div>
            <h1><i style={icon.styles} class="fas fa-eye"></i></h1>
            <h2 style={skillLabel.styles}>Detail</h2>
          </div>
          <div>
            <h1><i style={icon.styles} class="fas fa-clock"></i></h1>
            <h2 style={skillLabel.styles}>Efficiency</h2>
          </div>
          </div>
        </div>
      );
    }
  }

  export default AboutMe;