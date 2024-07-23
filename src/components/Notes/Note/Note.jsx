import React, { useState } from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa6'

import classes from './Note.module.css'

const Note = ({ note, isChecked, onDelete }) => {
	const [isEdit, setIsEdit] = useState(false)
	const [noteText, setNoteText] = useState(note.text)

	const activateEditText = () => {
		setIsEdit(true)
	}

	const deactivateEditText = () => {
		setIsEdit(false)
		if (noteText === '') return onDelete()
	}

	const deactivateEditTextByKey = e => {
		if (e.key === 'Enter') return setIsEdit(false)
	}

	const handleNoteTextChange = e => {
		setNoteText(e.currentTarget.value)
	}

	return (
		<div className={classes.NoteContainer}>
			<div className={classes.Note}>
				<div className={classes.NoteLeft}>
					<div
						className={`${classes.CustomCheckbox} ${
							note.isChecked ? classes.Checked : ''
						} ${isEdit ? classes.IsEdit : ''}`}
						onClick={isChecked}
					>
						<div className={classes.CustomCheck}>
							{note.isChecked && <FaCheck />}
						</div>
					</div>
					{isEdit ? (
						<input
							className={classes.EditInput}
							autoFocus
							onChange={handleNoteTextChange}
							onKeyPress={deactivateEditTextByKey}
							onBlur={deactivateEditText}
							value={noteText}
						/>
					) : (
						<p
							className={`${note.isChecked ? classes.textChecked : ''}`}
							onClick={activateEditText}
						>
							{noteText}
						</p>
					)}
				</div>
				<div className={classes.NoteTools}>
					<div className={classes.NoteEdit}>
						<CiEdit onClick={activateEditText} />
					</div>
					<div onClick={onDelete} className={classes.NoteDelete}>
						<CiTrash />
					</div>
				</div>
			</div>
			<span
				className={`${classes.NoteUnderline} ${
					isEdit ? classes.IsEdit : ''
				}`}
			></span>
		</div>
	)
}

export default Note
