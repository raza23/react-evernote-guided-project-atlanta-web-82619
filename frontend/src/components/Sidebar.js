import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    // console.log(this.props)
    // const notes=this.props 
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} 
        
        detail={this.props.detail} />
        <button onClick={this.props.newNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
