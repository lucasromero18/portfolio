import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'
import { Button } from 'reactstrap';
import Header from './components/Header.js'




class App extends Component {


  render() {
    return (
      <>
      <Header />
       <Home />
      </>
    );
  }
}

export default App;
