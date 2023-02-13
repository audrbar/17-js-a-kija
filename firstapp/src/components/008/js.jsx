import './App.scss';
import Animal from '../jb/Animal';

const obj = ['racoon', 'fox'];

function App() {
  // const fox = <u>Fox No: {rand(100, 150)}</u>;
  // const laba = <i>Labas</i>;

  return (
    <div className="App">
      <header className="App-header">

      <h1>{obj}</h1>

      <Animal animalName="Racoon" color="coral" h1Class="blue" />
      <Animal animalName="Fox"color="red" h1Class="green" />
      <Animal animalName="Rabbit"color="black" h1Class="yellow" />
      </header>
    </div>
  );
}

export default App;