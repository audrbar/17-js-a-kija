import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import './App.scss';
import Sq from "./components/009/Sq";
import AddButton from './components/010/Buttons/AddButton';

function App() {

    const [sq, setSq] = useContext

    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {
                        sq.map((s, i) => <Sq key={i} s={s} i={i} />)
                    }
                </div>
                <div className="sq-bin">
                    <AddButton />
                </div>


            </header>
        </div>
    );

}

export default App;