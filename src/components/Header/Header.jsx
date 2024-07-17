import React from 'react'
import classes from './Header.module.css'
import { MdOutlinePlaylistAdd } from "react-icons/md";

const Header = props => {
	return (
		<div className={classes.Header}>
			<h1>TODO REACT</h1>
			<div className={classes.Input}>
				<textarea placeholder='Add note...'></textarea>
				<button><MdOutlinePlaylistAdd /></button>
			</div>
		</div>
	)
}

export default Header
