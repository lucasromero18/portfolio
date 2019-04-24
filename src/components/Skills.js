import React, { Component } from 'react';
import TroyBar from './utils/TroyBar';

const headerContainer = {
  styles: {
    paddingTop: "6em"
  }
}

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#808080',
    fontSize: "3em",
    fontWeight: "bold",
    marginLeft: "7em",
    display: "inline"
  }
}

const technical = {
  styles: {
    color: '#add8e6',
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "3em"
  }
}

const soft = {
  styles: {
    color: '#808080',
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "8em"
  }
}


class Skills extends Component {
    render() {
      return (
        <div id="tsSkills" style={{backgroundColor: "#F8F8FF"}}>
          <div style={headerContainer.styles}>
            <h1 style={header.styles}>I utilize <h1 style={{color: "#add8e6", fontSize: "1em", fontWeight: "bold", display: "inline", borderBottom: "2px solid #808080"}}>two</h1> types of skills..</h1>
              </div>
                <div style={{marginTop: "4em"}}>
                <div style={{display: "inline-block"}}>
                  <h1 style={technical.styles}>Technical Skills</h1>
                    <div style={{marginTop: "2em", paddingBottom: "2em", marginLeft: "2.5em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"HTML"} color={'#add8e6'} val={1} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"CSS"} color={'#add8e6'} val={1} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Version Control"} color={'#add8e6'} val={0.90} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Javascript"} color={'#add8e6'} val={0.85} widthHeight={7.5} size={0.8}/>
                    </div>
                    <div style={{marginTop: "1em", paddingBottom: "2em", marginLeft: "2.5em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"MVC"} color={'#add8e6'} val={0.80} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"React"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"SQL"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Vue"} color={'#add8e6'} val={0.70} widthHeight={7.5} size={0.8}/>
                    </div>
                    <div style={{marginTop: "1em", paddingBottom: "5em", marginLeft: "2.5em"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"Node"} color={'#add8e6'} val={0.65} widthHeight={7.5} size={0.8}/>
                      <TroyBar percentageColor={'#add8e6'}skill={"State Management"} color={'#add8e6'} val={0.50} widthHeight={7.5} size={0.8}/>
                    </div>
                    </div>
                    <div style={{display: "inline-block", position: "absolute"}}>
                      <h1 style={soft.styles}>Soft Skills</h1>
                        <div style={{marginTop: "2em", paddingBottom: "2em", paddingLeft: "12em", marginRight: "2em"}}>
                        <TroyBar percentageColor={'#808080'} skill={"Public Speaking"} color={'#808080'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Team Work"} color={'#808080'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Communication"} color={'#808080'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Flexibility"} color={'#808080'} val={1} widthHeight={7.5} size={0.8}/>
                      </div>
                      <div style={{marginTop: "1em", paddingBottom: "2em", paddingLeft: "12em", marginRight: "2em"}}>
                        <TroyBar percentageColor={'#808080'} skill={"Presentation"} color={'#808080'} val={1} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Creativity"} color={'#808080'} val={0.90} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Leadership"} color={'#808080'} val={0.90} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Personal Productivity"} color={'#808080'} val={0.90} widthHeight={7.5} size={0.8}/>
                      </div>
                      <div style={{marginTop: "1em", paddingBottom: "3em", paddingLeft: "12em", marginRight: "2em"}}>
                        <TroyBar percentageColor={'#808080'} skill={"Adaptability"} color={'#808080'} val={0.85} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Conflict Resolution"} color={'#808080'} val={0.85} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Problem Solving"} color={'#808080'} val={0.80} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Research"} color={'#808080'} val={0.80} widthHeight={7.5} size={0.8}/>
                      </div>
                  </div>
              </div>
        </div>
      );
    }
  }
  
  export default Skills;