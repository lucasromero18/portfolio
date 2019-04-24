import React, { Component } from 'react';
import myImmy from '../lucas_port_immy.jpg';
import { IncomingMessage } from 'http';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



let test = require('progressbar.js');

console.log(test);
 
const aboutMeHeader = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#808080',
    fontSize: "3em",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "2em"
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
    marginTop: "2em",
    display: "block",
    color: "#add8e6"
  }
}

const aboutMeText = {
  styles: {
    fontSize: "1.1em",
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "2em",
    marginRight: "2em"
  }
}

const myImage = {
  styles: {
    width: "20em",
    height: "25em",
    marginLeft: "2em",
    borderRadius: "90%",
    marginTop: "0 auto"
  }
}

const ihdContainer = {
  styles: {
    display: "flex",
    marginTop: "2em",
    paddingBottom: "2em"
  }
}

const icon = {
  styles: {
    fontSize: "2.4em",
    color: "#add8e6"
    }
}

const itemContainer = {
  styles: {
    flex: '1',
    textAlign: 'center'
  }
}






class AboutMe extends Component {

  

    render() {
      return (
        <div id="aboutme" style={{backgroundColor: "#F0F8FF", marginTop: "0"}}>
          <h1 style={aboutMeHeader.styles}>Who's <h1 style={{color: "#add8e6", fontSize: "1em", fontWeight: "bold", display: "inline", borderBottom: "2px solid #808080"}}>this</h1> guy?</h1>
            <div style={picImageContainer.styles}>
              <img style={myImage.styles} src={myImmy} />
              <p style={aboutMeText.styles}><h1 style={getToKnowMe.styles}>Get to know me</h1>My name is Lucas Romero, and I develop with a 
              purpose. I am a full-stack web developer, with an extra sprinkle of passion for front-end web development, and UI / UX design. 
              Passion, and continuously feeding my curiosity are both the main reasons I love to write code. I am attached to throwing all 
              of my creativity and drive into the applications I create, and I push towards targeting every individual in terms of being application use. 
              The "how", is what keeps me going. I believe that technology lies within a never ending passage that consists of learning, and having
              the opportunity to expand my horizon on different technologies and frame works effectively is what I continue to execute everyday. On my free time, I
              find myself in the gym, or outdoors exploring! Becoming the best Lucas I can become, is the mission I am currently on. 
              I view enhancing both of my physical and programming abilities to the fullest as a priority, but most importantly making sure I have as 
              much fun as I can throuhgout the process!</p>
          </div>
          <div style={ihdContainer.styles}>
          <div style={itemContainer.styles}>
            <h1><i style={icon.styles} class="fas fa-globe-americas"></i></h1>
            <h2 style={{fontFamily: 'Montserrat, sans-serif', paddingLeft: "1em", color: "#2a2a2a", fontSize: "2.4em", color: "#add8e6"}}>Communication</h2>
            <p style={{fontFamily: 'Montserrat, sans-serif', paddingLeft: "3em"}}>Along with executing everything I do effeciently, having the ability to communicate 
            is what I do best. I love working in teams, and passing information as effectively as possible!</p>
          </div>
          <div style={itemContainer.styles}>
            <h1><i style={icon.styles} class="fas fa-eye"></i></h1>
            <h2 style={{fontFamily: 'Montserrat, sans-serif', marginLeft: "0.3em", color: "#2a2a2a", fontSize: "2.4em", color: "#add8e6"}}>Detail</h2>
            <p style={{fontFamily: 'Montserrat, sans-serif', paddingLeft: "2em"}}>In relation to my love for front-end web development and UI / UX design, detail is priority. Creating interfaces that are more
              than appealing to the users eye, is my goal.</p>
          </div>
          <div style={itemContainer.styles}>
            <h1><i style={icon.styles} class="fas fa-clock"></i></h1>
            <h2 style={{fontFamily: 'Montserrat, sans-serif', marginLeft: "0.4em", color: "#2a2a2a", fontSize: "2.4em", color: "#add8e6"}}>Efficiency</h2>
            <p style={{fontFamily: 'Montserrat, sans-serif', paddingLeft: "1.5em"}}>Getting the job done is great, but was the process as efficient as possible? Working 
            efficiently provides more room for opportunity. Work smarter, not harder.</p>
          </div>
          <div style={itemContainer.styles}>
            <h1><i style={icon.styles} class="fas fa-brain"></i></h1>
            <h2 style={{fontFamily: 'Montserrat, sans-serif', paddingRight: ".5em", color: "#2a2a2a", fontSize: "2.4em", color: "#add8e6"}}>Determined</h2>
            <p style={{fontFamily: 'Montserrat, sans-serif', paddingRight: "2em"}}>I am always eager to learn new approaches to real world problems, and continue to
            put all of my effort into striving into the individual i desire to be.</p>
          </div>
          </div>
        </div>
      );
    }
  }

  export default AboutMe;