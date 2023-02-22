'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Counter from './components/013/Counter';
import Fenix from './components/013/Fenix';
import Users from './components/013/Users';


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <Counter />
                <Fenix />
                <Users />
            </header>
        </div>
    );
}

export default App;