'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';


function App() {



    return (
        <div className="App">
            <header className="App-header">
                <h1>Wish</h1>
                <div className="input-bin red">
                    <label htmlFor="">Enter your Wish</label>
                    <input type="text" />
                    <button className="blue">Enter</button>
                </div>
            </header>
        </div>
    );

}

export default App;