import React from 'react'
import classes from './Header.module.css'
import { CiSearch } from "react-icons/ci";

const Header = props => {
	return (
		<div className={classes.Header}>
			<h1>TODO REACT</h1>
			<div className={classes.Input}>
				<textarea placeholder='Search note...'></textarea>
				<button><CiSearch /></button>
			</div>
		</div>
	)
}

export default Header
