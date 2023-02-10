import './App.css';
import Animal from './components/jb/Animal';

function App() {
  // const fox = <u>Fox No: {rand(100, 150)}</u>;
  // const laba = <i>Labas</i>;

  return (
    <div className="App">
      <header className="App-header">
      <Animal animalName="Racoon" color="coral"/>
      <Animal animalName="Fox"color="red"/>
      </header>
    </div>
  );
}

export default App;