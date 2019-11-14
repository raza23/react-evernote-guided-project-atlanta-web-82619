import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
// import Toggle from './Toggle'

class App extends Component {
  // state = {
  //   textDisplay: 'Title'
  // }

  // //* 
  // filterToggle = () => {
  //   let search = this.state.textDisplay
  //   // console.log('hey')
  //   // debugger
  //   if (search === 'Title') {
  //     search = 'Body' }

  //     else (search = 'Title')
  //   this.setState({
  //     textDisplay: search
  //   })
  // } 

  // filterToggle = () => {
  // this.state.textDisplay === 'Title' ? 
  // this.setState({textDisplay: 'Body'}) : 
  // this.setState({textDisplay: 'Title'}) }
  

  render() {

    // debugger

    return (
      <div className="app">
        <Header />
        {/* <Toggle filterToggle={this.filterToggle} text={this.state.textDisplay} /> */}
        <NoteContainer  />
      </div>
    );
  }
}

export default App;