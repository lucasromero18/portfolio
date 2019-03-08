import React, { Component } from 'react';
import AboutMe from './AboutMe.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Education from './Education.js'
import Work from './Work.js'
import Navbar from './Navbar.js'
import Particles from 'react-particles-js'
import { Button } from 'reactstrap';

const jumbo = {
  styles: {
    position: 'absolute', 
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    marginTop: "20%",
    marginLeft: "27%",
    fontSize: "3em"
  }
}

const linkButtons = {
  styles: {
    position: 'absolute'
  }
}


class Home extends Component {
    render() {
      return (
        <div>
          <h1 style={jumbo.styles}>Hello, I'm Lucas Romero</h1>
          <Button style={linkButtons.styles} outline color="primary">primary</Button>
            <Particles 
                params={
                  {
                    "particles": {
                      "number": {
                        "value": 147,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#6ebaff"
                      },
                      "shape": {
                        "type": "hexagon",
                        "stroke": {
                          "width": 0,
                          "color": "#000"
                        },
                        "polygon": {
                          "nb_sides": 3
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 10,
                          "size_min": 40,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#6ebaff",
                        "opacity": 0.21306986324071361,
                        "width": 2.1
                      },
                      "move": {
                        "enable": true,
                        "speed": 2.3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
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
                  backgroundColor: '#2a2a2a'
                }} />
          <Navbar />
          <AboutMe />
          <Skills />
          <Projects />
          <Education />
          <Work />
        </div>
      );
    }
  }
  
  export default Home;