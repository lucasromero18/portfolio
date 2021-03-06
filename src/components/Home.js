import React, { Component } from 'react';
import AboutMe from './AboutMe.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Education from './Education.js'
import Contact from './Contact.js'
import Particles from 'react-particles-js'
import { Animate } from "react-simple-animate"
import { Button } from 'reactstrap';
const jumbo = {
  styles: {
    position: 'absolute', 
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    top: "42%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
}

const fullStack = {
  styles: {
    position: 'absolute', 
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
     
  }
}

const viewButton = {
  styles: {
    position: 'absolute',
    color: "white",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: 'Montserrat, sans-serif',
    height: "10%",
    width: "20%"
  }
}

const viewWorkArrow = {
  styles: {
    marginLeft: "5%",
    marginTop: "3%"
  }
}




class Home extends Component {

  
    render() {
      return (
        <div id="home">
          <h1 style={jumbo.styles}>Hello, I'm <h1 style={{fontFamily: "Montserrat, sans-serif", display: "inline", fontSize: "1em", color: "#cd5c5c"}}>Lucas Romero.</h1></h1>
            <h1 style={fullStack.styles}>I'm a Full Stack Web Developer.</h1>
           <a href="#aboutme"><Button style={viewButton.styles} outline>View my work <i style={viewWorkArrow.styles} className="fas fa-arrow-circle-down"></i></Button></a>   
            <Particles 
                params={
                  {
                    "particles": {
                      "number": {
                        "value": 231,
                        "density": {
                          "enable": true,
                          "value_area": 1441.5568814319463
                        }
                      },
                      "color": {
                        "value": "#add8e6"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#add8e6"
                        },
                        "polygon": {
                          "nb_sides": 9
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.11212109077804028,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 0.5678085025267481,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 4.004324670644295,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 12.167325054144603,
                          "size_min": 59.21431526350373,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 256.2767789212349,
                        "color": "#00ffff",
                        "opacity": 0.32034597365154366,
                        "width": 1.4415568814319464
                      },
                      "move": {
                        "enable": true,
                        "speed": 1.6017298682577181,
                        "direction": "bottom",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 1441.5568814319463,
                          "rotateY": 1441.5568814319463
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "grab"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 340.68510151604886,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }
                }
                style={{
                  width: '100%',
                  height: '100vh',
                  backgroundColor: '#2a2a2a',
                  borderBottom: "2px solid #add8e6"
                }} />
          <AboutMe />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      );
    }
  }
  
  export default Home;


