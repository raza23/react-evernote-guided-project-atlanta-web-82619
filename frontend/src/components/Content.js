import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';
// import CreateForm from './CreateForm'

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    // console.log(this.props)
    if (this.props.edit) {
      return <NoteEditor
      note={this.props.note}
      newNote = {this.props.newNote}
      handleEdit = {this.props.handleEdit}
      SaveEdit = {this.props.SaveEdit} 
      deleteNote={this.props.deleteNote}
      />;
    } else if (this.props.note) {
      return <NoteViewer 
      newNote = {this.props.newNote}
      note={this.props.note}
      handleEdit = {this.props.handleEdit}
      SaveEdit = {this.props.SaveEdit}
      deleteNote={this.props.deleteNote}
      />
      
      
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
