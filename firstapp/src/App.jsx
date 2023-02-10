import './App.css';

function App() {

  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // const fox = <u>Fox No: {rand(100, 150)}</u>;
  // const laba = <i>Labas</i>;
  const font = 'monospace';

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          color: 'crimson',
          backgroundColor: 'skyblue',
          padding: '8px 30px',
          fontSize: rand(20, 50) + 'px',
          letterSpacing: rand(0, 1) ? '5px' : 0,
          fontFamily: font
        }}>Racoon No: {

          rand(11, 15)
          
        }</h1>

      </header>
    </div>
  );
}

export default App;