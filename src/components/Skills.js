import React, { Component } from 'react';
import TroyBar from './utils/TroyBar';

const headerContainer = {
  styles: {
    paddingTop: "7%"
  }
}

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#808080',
    fontSize: "3em",
    fontWeight: "bold",
    marginLeft: "28%",
    display: "inline"
  }
}

const technical = {
  styles: {
    color: '#add8e6',
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "20%"
  }
}

const soft = {
  styles: {
    color: '#808080',
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: "50%"
  }
}


class Skills extends Component {
    render() {
      return (
        <div style={{backgroundColor: "#F8F8FF"}}>
          <div style={headerContainer.styles}>
            <h1 style={header.styles}>I utilize <h1 style={{color: "#add8e6", fontSize: "1em", fontWeight: "bold", display: "inline", borderBottom: "2px solid #808080"}}>two</h1> types of skills..</h1>
              </div>
                <div style={{marginTop: "5%"}}>
                <div style={{display: "inline-block"}}>
                  <h1 style={technical.styles}>Technical Skills</h1>
                    <div style={{marginTop: "5%", paddingBottom: "4%"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"HTML"} color={'#add8e6'} val={0.90} widthHeight={7.5} size={1.3}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"CSS"} color={'#add8e6'} val={0.90} widthHeight={7.5} size={1.3}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"javascript"} color={'#add8e6'} val={0.80} widthHeight={7.5} size={1.3}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"React"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={1.3}/>
                    </div>
                    <div style={{marginTop: "5%", paddingBottom: "4%"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"Vue"} color={'#add8e6'} val={0.65} widthHeight={7.5}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"State Management"} color={'#add8e6'} val={0.50} widthHeight={7.5} size={0.9}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"Node"} color={'#add8e6'} val={0.65} widthHeight={7.5} size={1.3}/>
                      <TroyBar percentageColor={'#add8e6'} skill={"SQL"} color={'#add8e6'} val={0.75} widthHeight={7.5} size={1.3}/>
                    </div>
                    <div style={{marginTop: "5%", paddingBottom: "4%"}}>
                      <TroyBar percentageColor={'#add8e6'} skill={"MVC"} color={'#add8e6'} val={0.80} widthHeight={7.5} size={1.3}/>
                      <TroyBar percentageColor={'#add8e6'}skill={"Version Control"} color={'#add8e6'} val={0.90} widthHeight={7.5} size={0.9}/>
                    </div>
                    </div>
                    <div style={{display: "inline-block", position: "absolute"}}>
                      <h1 style={soft.styles}>Soft Skills</h1>
                        <div style={{marginTop: "5%", paddingBottom: "4%", paddingLeft: "30%"}}>
                        <TroyBar percentageColor={'#808080'} skill={"Problem Solving"} color={'#808080'} val={0.80} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Creativity"} color={'#808080'} val={0.90} widthHeight={7.5} size={1.3}/>
                        <TroyBar percentageColor={'#808080'} skill={"Leadership"} color={'#808080'} val={0.90} widthHeight={7.5} size={1.3}/>
                        <TroyBar percentageColor={'#808080'} skill={"Public Speaking"} color={'#808080'} val={1} widthHeight={7.5} size={0.9}/>
                      </div>
                      <div style={{marginTop: "5%", paddingBottom: "4%", paddingLeft: "30%"}}>
                        <TroyBar percentageColor={'#808080'} skill={"Team Work"} color={'#808080'} val={1} widthHeight={7.5} size={1}/>
                        <TroyBar percentageColor={'#808080'} skill={"Conflict Resolution"} color={'#808080'} val={0.85} widthHeight={7.5} size={0.8}/>
                        <TroyBar percentageColor={'#808080'} skill={"Research"} color={'#808080'} val={0.80} widthHeight={7.5} size={1.3}/>
                        <TroyBar percentageColor={'#808080'} skill={"Communication"} color={'#808080'} val={1} widthHeight={7.5} size={1.3}/>
                      </div>
                  </div>
              </div>
        </div>
      );
    }
  }
  
  export default Skills;