import React from 'react'
import classes from './Notes.module.css'

const Notes = props => {
	return (
		<div className={classes.Notes}>
			<div className={classes.NoteWrapper}>
				<div className={classes.Note}>
					<div className={classes.Input} />
					<span>The first note</span>
				</div>
				<div className={classes.tools}>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
			<span className={classes.underline}></span>
		</div>
	)
}

export default Notes
