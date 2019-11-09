import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const notes = props.notes.map(note => (
     <NoteItem key={note.id} {...note} />
  ))
  // console.log(notes)
  // console.log(props.notes)
  return (
    <ul>
      {notes}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
