import React, { Component } from 'react';
import TroyBar from './utils/TroyBar';

const headerContainer = {
  styles: {
    paddingTop: "6em",
    width: "100vw",
    textAlign: "center"
  }
}

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#808080',
    fontSize: "3em",
    fontWeight: "bold",
    display: "inline"
  }
}

const technical = {
  styles: {
    color: '#add8e6',
    fontFamily: 'Montserrat, sans-serif'
  }
}

const soft = {
  styles: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat, sans-serif'
  }
}


class Skills extends Component {
    render() {
      return (
        <div id="tsSkills" style={{backgroundColor: "#2a2a2a"}}>
          <div style={headerContainer.styles}>
            <h1 style={header.styles}>I utilize <h1 style={{color: "#add8e6", fontSize: "1em", fontWeight: "bold", display: "inline", borderBottom: "2px solid #808080"}}>two</h1> types of skills..</h1>
              </div>
                <div style={{marginTop: "4em"}}>
                <div style={{display: "inline-block", width: "50%", textAlign: "center"}}>
                  <h1 style={technical.styles}>Technical Skills</h1>
                    <div style={{marginTop: "2em", paddingBottom: "2em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"HTML"} color={'#add8e6'} val={1} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"CSS"} color={'#add8e6'} val={1} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Version Control"} color={'#add8e6'} val={0.90} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Javascript"} color={'#add8e6'} val={0.85} widthHeight={7.5} size={0.8}/>
                    </div>
                    <div style={{marginTop: "1em", paddingBottom: "2em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"MVC"} color={'#add8e6'} val={0.80} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"React"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"SQL"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Vue"} color={'#add8e6'} val={0.70} widthHeight={7.5} size={0.8}/>
                    </div>
                    <div style={{marginTop: "1em", paddingBottom: "5em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"Node"} color={'#add8e6'} val={0.65} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"State Management"} color={'#add8e6'} val={0.60} widthHeight={7.5} size={0.8}/>
                    </div>
                    </div>
                    <div style={{display: "inline-block", width: "50%", textAlign: "center"}}>
                      <h1 style={soft.styles}>Soft Skills</h1>
                        <div style={{marginTop: "2em", paddingBottom: "2em"}}>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Public Speaking"} color={'#FFFFFF'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Team Work"} color={'#FFFFFF'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Communication"} color={'#FFFFFF'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Flexibility"} color={'#FFFFFF'} val={1} widthHeight={7.5} size={0.8}/>
                      </div>
                      <div style={{marginTop: "1em", paddingBottom: "2em"}}>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Presentation"} color={'#FFFFFF'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Creativity"} color={'#FFFFFF'} val={0.90} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Leadership"} color={'#FFFFFF'} val={0.90} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Personal Productivity"} color={'#FFFFFF'} val={0.90} widthHeight={7.5} size={0.8}/>
                      </div>
                      <div style={{marginTop: "1em", paddingBottom: "3em"}}>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Adaptability"} color={'#FFFFFF'} val={0.85} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Conflict Resolution"} color={'#FFFFFF'} val={0.85} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Problem Solving"} color={'#FFFFFF'} val={0.80} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#FFFFFF'} skill={"Research"} color={'#FFFFFF'} val={0.80} widthHeight={7.5} size={0.8}/>
                      </div>
                  </div>
              </div>
        </div>
      );
    }
  }
  
  export default Skills;