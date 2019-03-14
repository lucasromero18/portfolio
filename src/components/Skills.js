import React, { Component } from 'react';
import TroyBar from './utils/TroyBar';


class Skills extends Component {
    render() {
      return (
        <div>
          <TroyBar skill={"HTML"} color={'#add8e6'} val={0.90} widthHeight={150}/>
          <TroyBar skill={"CSS"} color={'#add8e6'} val={0.90} widthHeight={150}/>
          <TroyBar skill={"javascript"} color={'#add8e6'} val={0.80} widthHeight={150}/>
          <TroyBar skill={"React"} color={'#add8e6'} val={0.75} widthHeight={150}/>
          <TroyBar skill={"Vue"} color={'#add8e6'} val={0.65} widthHeight={150}/>
          <TroyBar skill={"State Management"} color={'#add8e6'} val={0.50} widthHeight={150}/>
          <TroyBar skill={"Node"} color={'#add8e6'} val={0.65} widthHeight={150}/>
          <TroyBar skill={"SQL"} color={'#add8e6'} val={0.75} widthHeight={150}/>
          <TroyBar skill={"MVC"} color={'#add8e6'} val={0.80} widthHeight={150}/>
          <TroyBar skill={"Version Control"} color={'#add8e6'} val={0.90} widthHeight={150}/>
        </div>
      );
    }
  }
  
  export default Skills;