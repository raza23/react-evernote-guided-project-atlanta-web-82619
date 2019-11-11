import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.note.title,
    body: this.props.note.body

  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleBodyChange = (e) => {
    
    this.setState({body: e.target.value})
  }




  render() {
    console.log(this.props)
    return (
      <form className="note-editor">
        <input type="text" name="title" value = {this.state.title} onChange={this.handleTitleChange}/>
        <textarea name="body" value={this.state.body} onChange={this.handleBodyChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={() => this.props.SaveEdit(this.props.note.id,this.state.title,this.state.body,this.props.note.user.id)} />
          <button type="button" onClick={this.props.handleEdit}>Cancel</button>
          <button type="button" onClick={this.props.deleteNote}>Delete</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
