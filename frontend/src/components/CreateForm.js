import React from 'react'


class CreateForm extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: '',
      }
      this.baseState = this.state
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.newNote(this.state)
    this.resetForm()
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