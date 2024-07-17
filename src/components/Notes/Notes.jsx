import React, { useState } from 'react';
import Note from './Note/Note';
import classes from './Notes.module.css';

const Notes = () => {
  const getRandomID = () => {
    let x = Math.random() * 10 ** 10;
    let id = Math.round(x).toString(36);
    return id;
  };

  const initialNotes = [
    {
      _id: getRandomID(),
      isChecked: false,
      typedText: '',
    },
    {
      _id: getRandomID(),
      isChecked: false,
      typedText: '',
    },
    {
      _id: getRandomID(),
      isChecked: false,
      typedText: '',
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  const toggleCheck = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n._id === id ? { ...n, isChecked: !n.isChecked } : n
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id));
  };

  return (
    <div className={classes.Notes}>
      {notes.map((n) => (
        <Note
          key={n._id}
          note={n}
          toggleCheck={() => toggleCheck(n._id)}
          deleteNote={() => deleteNote(n._id)}
        />
      ))}
      <span className={classes.underline}></span>
    </div>
  );
};

export default Notes;
