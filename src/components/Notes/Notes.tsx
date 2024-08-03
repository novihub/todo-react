import React, { useState } from 'react'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import Note from './Note/Note'
import classes from './Notes.module.css'

export interface INote {
	id: number
	text: string
	isChecked: boolean
}

interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
	const [notes, setNotes] = useState<INote[]>([])
	const [noteText, setNoteText] = useState<string>('')

	const addNoteHandler = () => {
		if (noteText.trim() === '') return
			setNotes(prevNotes => [
				{ id: Date.now(), text: noteText, isChecked: false },
				...prevNotes
			])
		setNoteText('')
	}

	const isCheckedHandler = (id: number) => {
		setNotes(prevNotes =>
			prevNotes.map(n => (n.id === id ? { ...n, isChecked: !n.isChecked } : n))
		)
	}

	const deleteNoteHandler = (id: number) => {
		setNotes(prevNotes => prevNotes.filter(n => n.id !== id))
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
					className={noteText.trim() ? classes.IsActive : ''}
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
