import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import CreateForm from './CreateForm';
import Toggle from './Toggle'
const notes = 'http://localhost:3001/api/v1/notes'

class NoteContainer extends Component {

  state = {
    notes: [],
    term: '',
    selectedNote: {},
    edit:false,
    search: 'Title'
  }


  //* Fetches the data and alters the state to include all notes
  componentDidMount(){
    fetch(notes)
    .then(res => res.json())
    .then(notes_fetch => 
      this.setState({notes: notes_fetch}))
    }


    //* Get the search term from the search bar and allows for the filter to happen
  handleSearch = (e) => {
    this.setState({term: e.target.value})
    console.log(this.state.term)
  }

  filterToggle = () => {
    let search = this.state.search
  
    // console.log('hey')
    // debugger
    if (search === 'Title') {
      search = 'Body' }

      else (search = 'Title')
    this.setState({
      search: search
    })
  } 


  // * creates a new note and fetches that note and persists it to the backend
  newNote = (newNote) => {
    
    const note = {
      
      title: newNote.title,
      body: newNote.body,
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
        this.setState({notes: [newNote,...this.state.notes]})
      })
    }

    //* Patch request. Allows for the specific note to be ediited
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
          
          //* based of the toggle allows the notes to be filteres between title/body
      filteredNotes = () => {
        let noteCopy = [...this.state.notes]
        if (this.state.search === 'Title') {
          noteCopy = noteCopy.filter(note => note.title.toLowerCase().includes(this.state.term.toLowerCase())) 
        } else   {
          noteCopy = noteCopy.filter(note => note.body.toLowerCase().includes(this.state.term.toLowerCase())) 
        // debugger
      }
    return noteCopy
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
    
    // const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.term.toLowerCase())) 
    // const filteredNotes = this.state.notes.filter(note => note.body.toLowerCase().includes(this.state.term.toLowerCase()))
    // this.state.

    console.log(this.state.search)
    return (
      <Fragment>
        <Toggle filterToggle={this.filterToggle} text={this.state.search} />
        <Search searchby={this.state.search} handleSearch={this.handleSearch} />
        <div className='container'>
          <CreateForm newNote={this.newNote} />
          <Sidebar notes={this.filteredNotes()} 
          detail={this.detail}
          // newNote = {this.newNote} 
          // deleteNote= {this.DeleteNote}
          />
          <Content note={this.state.selectedNote} 
          // newNote = {this.newNote}
          SaveEdit = {this.SaveEditNote}
          edit={this.state.edit}
          handleEdit={this.handleEdit}
          deleteNote = {this.DeleteNote}
          newNote={this.newNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
