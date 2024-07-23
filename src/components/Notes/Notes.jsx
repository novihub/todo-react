import React, { useState } from 'react'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import Note from './Note/Note'
import classes from './Notes.module.css'

const Notes = props => {
	const [notes, setNotes] = useState([])
	const [noteText, setNoteText] = useState('')

	const addNoteHandler = () => {
		if (noteText.trim() === '') return
		setNotes(prevNotes => [
			{ id: Date.now(), text: noteText, isChecked: false },
			...prevNotes
		])
		setNoteText('')
	}

	const isCheckedHandler = id => {
		setNotes(prevNotes =>
			prevNotes.map(n => (n.id === id ? { ...n, isChecked: !n.isChecked } : n))
		)
	}

	const deleteNoteHandler = id => {
		setNotes(prevNotes => prevNotes.filter(n => n.id !== id))
	}

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			addNoteHandler()
		}
	}

	return (
		<div className={classes.Notes}>
			<div className={classes.NotesInput}>
				<textarea
					value={noteText}
					onChange={e => setNoteText(e.target.value)}
					placeholder='Add note...'
					onKeyPress={handleKeyPress}
				></textarea>
				<button
					className={noteText.trim() !== '' ? classes.IsActive : ''}
					onClick={addNoteHandler}
				>
					<MdOutlinePlaylistAdd />
				</button>
			</div>
			{notes.map(n => (
				<Note
					key={n.id}
					note={n}
					isChecked={() => isCheckedHandler(n.id)}
					onDelete={() => deleteNoteHandler(n.id)}
				/>
			))}
		</div>
	)
}

export default Notes
