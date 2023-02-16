import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import Sq from "./components/010/Sq";
import AddButton from './components/010/Buttons/AddButton';
import ClearButton from './components/010/Buttons/ClearButton';
import ColorButton from './components/010/Buttons/ColorButton';

function App() {

    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {
                        sq.map((s, i) => <Sq key={i} s={s} i={i} setSq={setSq} />)
                    }
                </div>
                <div className="sq-bin">
                    <AddButton setSq={setSq} classes="blue" />
                    <ClearButton classes="red" setSq={setSq} />
                    <ColorButton classes="coral" setSq={setSq} />
                </div>


            </header>
        </div>
    );

}

export default App;