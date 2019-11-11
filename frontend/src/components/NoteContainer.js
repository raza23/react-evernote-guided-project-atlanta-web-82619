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
      user_id: 1
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

    SaveEditNote = (editNoteID,editNotetitle,editNotebody,editorID) => {
      // debugger
      const note = {
        
        
        title: editNotetitle,
        body: editNotebody,
       
        user: editorID
        
        }
        fetch(`http://localhost:3001/api/v1/notes/${editNoteID}`, {
          
          method: 'PATCH',
          headers: {
            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          
          body: JSON.stringify(note)
        }).then(console.log('editted'))
        }
        

    //* Deletes a note, AND updates state.
  DeleteNote = () => {
    fetch(`http://localhost:3001/api/v1/notes/${this.state.selectedNote.id}`, {
       method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        alert('Note Deleted')

        this.setState({
          notes: this.state.notes.filter(note => note !== this.state.selectedNote),
          selectedNote: 'DELETED'
        })
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
      // selectedNote: note,
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
          deleteNote= {this.DeleteNote}
          />
          <Content note={this.state.selectedNote} 
          SaveEdit = {this.SaveEditNote}
          edit={this.state.edit}
          handleEdit={this.handleEdit}
          deleteNote = {this.DeleteNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
