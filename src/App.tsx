import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<Notes />
		</div>
	)
}

export default App
