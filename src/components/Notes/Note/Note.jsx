import React from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa6'

import classes from './Note.module.css'

const Note = ({ note, isChecked, onDelete }) => {
	return (
		<div className={classes.NoteContainer}>
			<div className={classes.Note}>
				<div className={classes.NoteLeft}>
					<div
						className={`${classes.CustomCheckbox} ${
							note.isChecked ? classes.Checked : ''
						}`}
						onClick={isChecked}
					>
						<div className={classes.CustomCheck}>
							{note.isChecked && <FaCheck />}
						</div>
					</div>
					<p className={`${note.isChecked ? classes.textChecked : ''}`}>{note.text}</p>
				</div>
				<div className={classes.NoteTools}>
					<div className={classes.NoteEdit}>
						<CiEdit />
					</div>
					<div onClick={onDelete} className={classes.NoteDelete}>
						<CiTrash />
					</div>
				</div>
			</div>
			<span className={classes.NoteUnderline}></span>
		</div>
	)
}

export default Note
