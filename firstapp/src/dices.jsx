import { useEffect, useState } from 'react';
import Create from './components/Dices/Create';
import List from './components/Dices/List';
import { create, read } from './components/Dices/localStorage';
import './components/Dices/style.scss';

const KEY = 'FancyDices';

function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [list, setList] = useState(null);
    const [createData, setCreateData] = useState(null);

    useEffect(() => {

        setTimeout(() => setList(read(KEY)), 1000);

        // setList(read(KEY));

    }, [lastUpdate]);

    
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(KEY, createData);
        setLastUpdate(Date.now());
    }, [createData]);

    return (
        <div className="dices">
            <div className="content">
                <div className="left">
                    <Create setCreateData={setCreateData}/>
                </div>
                <div className="right">
                    <List list={list} />
                </div>
            </div>
        </div>
    );

}

export default App;