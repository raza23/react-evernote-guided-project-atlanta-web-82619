import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
const notes = 'http://localhost:3001/api/v1/notes'

class NoteContainer extends Component {

  state = {
    notes: [],
    term: '',
    selectedNote: {},
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

    SaveEditNote = (editNote) => {
      const note = {
        
        title: editNote.title,
        body: editNote.body,
        user: {
          id: 1,
          name: "razashareef"
        }
        }
        fetch(`${notes}/${note.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(note)
        })
        }
      
    handleEdit = () => {
      this.setState(state => ({
        edit: !state.edit
      }))
    }
      

  detail = (id) => {
    this.setState({
      selectedNote: this.state.notes.find(note => note.id === id),
      edit: false
    })
  }
      
  render() {
    // const notes = this.props.notes
    // const title = 'hey'
    // console.log(this.state)
    const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.term.toLowerCase()))
    console.log(this.state.selectedNote)
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch} />
        <div className='container'>
          <Sidebar notes={filteredNotes} 
          detail={this.detail}
          newNote = {this.newNote} 
          />
          <Content note={this.state.selectedNote} 
          saved_edit = {this.SaveEditNote}
          edit={this.state.edit}
          handleEdit={this.state.handleEdit}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
