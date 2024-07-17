import classes from './App.module.css'
import Header from './components/Header/Header';
import Notes from './components/Notes/Notes'

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Notes />
    </div>
  );
}

export default App;
