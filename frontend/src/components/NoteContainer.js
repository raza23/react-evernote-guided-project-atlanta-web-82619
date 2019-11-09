import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
const notes = 'http://localhost:3001/api/v1/notes'

class NoteContainer extends Component {

  state = {
    notes: [],
    term: ''
  }

  componentDidMount(){
    fetch(notes)
    .then(res => res.json())
    .then(notes_fetch => 
      this.setState({notes: notes_fetch}))
    }

  handleSearch = (e) => {
    this.setState({term: e.target.value})
  }
   renderNote() {
     console.log('hey')
   }
      
  render() {
    // const notes = this.props.notes
    // const title = 'hey'
    // console.log(this.state)
    const filteredNotes = this.state.notes.filter(note => note.title.includes(this.state.term))
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch} />
        <div className='container'>
          <Sidebar notes={filteredNotes} />
          <Content onClick={this.renderNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
