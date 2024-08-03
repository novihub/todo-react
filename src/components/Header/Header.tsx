import React from 'react'
import classes from './Header.module.css'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className={classes.Header}>
			<h1>TODO REACT</h1>
			<span className={classes.NoteAuthor}>by novikoff</span>
		</div>
	)
}

export default Header
