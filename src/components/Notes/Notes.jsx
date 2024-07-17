import cn from 'classnames'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import classes from './Notes.module.css'

const Notes = props => {
	const [checked, setChecked] = useState(false)

	const toggleCheck = () => {
		setChecked(prevChecked => !prevChecked)
	}

	return (
		<div className={classes.Notes}>
			<div className={classes.NoteWrapper}>
				<div className={classes.Note}>
					<div
						className={cn(classes.Input, {
							[classes.checkedBackground]: checked
						})}
						onClick={() => toggleCheck()}
					>
						<div className={classes.CheckIconContainer}>
							{checked && <FaCheck className={classes.checkIcon} />}
						</div>
					</div>

					<span className={cn({ [classes.CheckedText]: checked })}>
						The first note
					</span>
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
