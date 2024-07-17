import cn from 'classnames';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import classes from '../Notes.module.css';

const Note = ({ note, toggleCheck, deleteNote }) => {
  return (
    <div className={classes.NoteWrapper}>
      <div className={classes.Note}>
        <div
          className={cn(classes.Input, {
            [classes.checkedBackground]: note.isChecked,
          })}
          onClick={toggleCheck}
        >
          <div className={classes.CheckIconContainer}>
            {note.isChecked && <FaCheck className={classes.checkIcon} />}
          </div>
        </div>

        <span className={cn({ [classes.CheckedText]: note.isChecked })}>
          {note.typedText || 'The first note'}
        </span>
      </div>
      <div className={classes.tools}>
        <button>Edit</button>
        <button onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
