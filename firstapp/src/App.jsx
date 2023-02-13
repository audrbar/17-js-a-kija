import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnimalLi from './components/008/AnimalLi';
import Click from './components/008/Click';

function App() {

  const data = [
    {id: 1, animal: 'racoon', color: 'grey', bold: true},
    {id: 5, animal: 'fox', color: 'yellow', bold: true},
    {id: 3, animal: 'rabit', color: 'red', bold: true},
    {id: 6, animal: 'moose', color: 'green', bold: false}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h2>Animals list</h2>
        </div>
      {data.map(a => <AnimalLi key={a.id} animal={a} />)}
      </header>
      <button>Submit</button>
      <Click />
    </div>
  );
}

export default App;