import React, { Component } from 'react';
import TroyBar from './utils/TroyBar';

const headerContainer = {
  styles: {
    marginTop: "8%"
  }
}

const header = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#2a2a2a',
    borderBottom: "5px double #2a2a2a",
    fontSize: "40px",
    fontWeight: "bold",
    marginLeft: "46%",
    marginTop: "5%",
    width: "9%"
  }
}

const technical = {
  styles: {
    color: '#add8e6',
    fontFamily: 'Montserrat, sans-serif',
  }
}

const skillsContainer = {
  styles: {
    marginTop: "3%"
  }
}


class Skills extends Component {
    render() {
      return (
        <div>
          <div style={headerContainer.styles}>
            <h1 style={header.styles}>Skills</h1>
              </div>
                <div style={{display: "inline-block"}}>
                  <h1 style={technical.styles}>Technical Skills</h1>
                    <div style={skillsContainer.styles}>
                      <TroyBar percentageColor={'#808080'} skill={"HTML"} color={'#add8e6'} val={0.90} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"CSS"} color={'#add8e6'} val={0.90} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"javascript"} color={'#add8e6'} val={0.80} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"React"} color={'#add8e6'} val={0.75} widthHeight={150}/>
                    </div>
                    <div style={skillsContainer.styles}>
                      <TroyBar percentageColor={'#808080'} skill={"Vue"} color={'#add8e6'} val={0.65} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"State Management"} color={'#add8e6'} val={0.50} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"Node"} color={'#add8e6'} val={0.65} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'} skill={"SQL"} color={'#add8e6'} val={0.75} widthHeight={150}/>
                    </div>
                    <div style={skillsContainer.styles}>
                      <TroyBar percentageColor={'#808080'} skill={"MVC"} color={'#add8e6'} val={0.80} widthHeight={150}/>
                      <TroyBar percentageColor={'#808080'}skill={"Version Control"} color={'#add8e6'} val={0.90} widthHeight={150}/>
                    </div>
                    </div>
                    <div style={{display: "inline-block"}}>
                        <div style={skillsContainer.styles}>
                        <TroyBar percentageColor={'#add8e6'} skill={"Problem Solving"} color={'#808080'} val={0.90} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Creativity"} color={'#808080'} val={0.90} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Leadership"} color={'#808080'} val={0.80} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Public Speaking"} color={'#808080'} val={0.75} widthHeight={150}/>
                      </div>
                      <div style={skillsContainer.styles}>
                        <TroyBar percentageColor={'#add8e6'} skill={"Team Work"} color={'#808080'} val={0.90} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Conflict Resolution"} color={'#808080'} val={0.90} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Research"} color={'#808080'} val={0.80} widthHeight={150}/>
                        <TroyBar percentageColor={'#add8e6'} skill={"Communication"} color={'#808080'} val={0.75} widthHeight={150}/>
                    </div>
              </div>
        </div>
      );
    }
  }
  
  export default Skills;