import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
const notes = 'http://localhost:3001/api/v1/notes'

class NoteContainer extends Component {

  state = {
    notes: [],
    term: '',
    oneNote: 0,
    edit:false
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

  newNote = (newNote) => {
    const note = {
      
      title: 'title',
      body: 'body',
      user: {
        id: 1,
        name: "razashareef"
      }
      }
      fetch(notes, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(note)
      }).then(res => res.json())
      .then(newNote => {
        this.setState({notes: [...this.state.notes,newNote]})
      })
    }

  detail = (id) => {
    this.setState({
      oneNote: this.state.notes.find(note => note.id === id),
      edit: false
    })
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
          <Sidebar notes={filteredNotes} 
          detail={this.detail}
          newNote = {this.newNote} 
          />
          <Content note={this.state.oneNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
