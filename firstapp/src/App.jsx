import { useState } from 'react';
import './App.scss';
import BoxLarge from './components/018/BoxLarge';
import Buttons from './components/018/Buttons';
import { GlobalSqContextProvider } from './components/018/GlobalSqContext';
import GlobalUserContext from './components/018/GlobalUserContext';
import rand from './Functions/rand';

const users = ['Bebras', 'Zebras', 'Ūdra'];

function App() {

    const [user, setUser] = useState(users[rand(0, 2)]);

    return (
        <GlobalUserContext.Provider value={{user}}>
            <GlobalSqContextProvider>
            <div className="App">
                <header className="App-header">
                    <BoxLarge />
                    <Buttons />
                    <button className="red" onClick={() => setUser(users[rand(0, 2)])}>user</button>
                </header>
            </div>
            </GlobalSqContextProvider>
        </GlobalUserContext.Provider>
    );

}

export default App;