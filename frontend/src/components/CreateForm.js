import React from 'react'
const notes = 'http://localhost:3001/api/v1/notes'


class CreateForm extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: '',
      notes: []
      }
      this.baseState = this.state
  }

  componentDidMount(){
    fetch(notes)
    .then(res => res.json())
    .then(notes_fetch => 
      this.setState({notes: notes_fetch}))
    }

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
        this.setState({notes: [...this.state.notes,newNote]})
      })
    }

  handleClick = (e) => {
    e.preventDefault()
    this.newNote(this.state)
    this.resetForm()
    this.props.history.push('/')
  }


  resetForm = () => {
    this.setState(this.baseState)
  }


  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleBodyChange = (e) => {
    this.setState({body: e.target.value})
  }

  

  render() {
    // console.log(this.props)
    return (
      <form className="note-editor">
        <input type="text" name="title" placeholder='Title' value = {this.state.title} onChange={this.handleTitleChange}/>
        <textarea name="body" placeholder='Type...' value={this.state.body} onChange={this.handleBodyChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={this.handleClick} />
          <button type="button" onClick={this.resetForm}>Cancel</button>
          {/* <button type="button" onClick={this.props.deleteNote}>Delete</button> */}
          {/* <button type="button" onClick={this.props.newNote}>New Note</button> */}
        </div>
      </form>
    );
  }
}

export default CreateForm