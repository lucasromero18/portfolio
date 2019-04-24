import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'
import { Button } from 'reactstrap';
import Header from './components/Header.js'
import { Row, Col } from 'reactstrap';




class App extends Component {


  render() {
    if(window.screen && window.screen.width < 750){
      return (
        <>
          <div style={{textAlign: "center", fontFamily: 'Montserrat, sans-serif', backgroundColor: "#f8f8ff", minHeight: "100vh"}}>
            <h1 style={{paddingTop: "2.5em", color: "#808080"}}>Hello!</h1>
            <p style={{marginTop: "1em", color: "#808080", paddingLeft: "3em", paddingRight: "3em"}}>Thank you for taking the time to visit my portfolio website. Unfortunately, it does not support mobile devices (just yet).</p>
            <i style={{fontSize: "2em", color: "#add8e6"}}class="fas fa-arrow-down"></i>
            <p style={{marginTop: "1em", color: "#808080", paddingLeft: "3em", paddingRight: "3em"}}>Please feel free to view my portfolio website on a laptop or desktop.</p>
            <i style={{fontSize: "2em", color: "#add8e6"}}class="fas fa-arrow-down"></i>
            <p style={{marginTop: "1em", color: "#808080", paddingLeft: "3em", paddingRight: "3em"}}>If not feasible, please feel free to contact me below!</p>
            <a style={{marginRight:"5px"}} href="https://www.linkedin.com/in/lucasjulianromero/"><i style={{color: "#add8e6", fontSize: "3em"}} class="fab fa-linkedin"></i></a>
            <a style={{marginLeft:"5px"}} href="mailto:lucasjulromero@gmail.com"><i style={{color: "#add8e6", fontSize: "3em"}} class="far fa-envelope"></i></a>
          </div>
        </>
      )
    }
    return (
      <>
      <Header />
      <Home />
      </>
    );
  }
}

export default App;
