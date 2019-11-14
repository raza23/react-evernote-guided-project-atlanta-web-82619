import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import CreateForm from './CreateForm'
import NavBar from './NavBar'
import {BrowserRouter, Route,Switch} from "react-router-dom"
// import Toggle from './Toggle'

class App extends Component {
 
  

  render() {

   

    return (
      
      <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar />
        <Switch >

        <Route path="/" component = {NoteContainer} exact />
        <Route path="/create" component = {CreateForm} exact />

        
        
        </Switch>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;