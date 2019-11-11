import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  console.log(props)
  const notes = props.notes.map(note => (
     <NoteItem key={note.id} handleClick={props.detail} {...note} />
  ))
  // console.log(notes)
  // console.log(props.notes)
  return (
    <ul>
      {notes}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
