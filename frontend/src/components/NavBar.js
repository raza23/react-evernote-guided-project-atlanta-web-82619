import React, { Component } from 'react';
// import Header from './Header';
// import NoteContainer from './NoteContainer';
// import CreateForm from './CreateForm'
// import {BrowserRouter, Route} from "react-router-dom"
import {NavLink} from 'react-router-dom'
// import Toggle from './Toggle'

class NavBar extends Component {
 
  

  render() {

   

    return (
     <div>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/create'> Create Form</NavLink>
     </div>
      
    );
  }
}

export default NavBar;