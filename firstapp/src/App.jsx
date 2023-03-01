import { useEffect, useState } from 'react';
import Create from './components/DicesServer/Create';
import List from './components/DicesServer/List';
import { create, destroy, edit, read } from './components/DicesServer/localStorage';
import Messages from './components/DicesServer/Messages';
import './components/DicesServer/style.scss';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

const KEY = 'FancyDices';

function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [list, setList] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editModal, setEditModal] = useState(null);
    const [editData, setEditData] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        axios.get(URL)
        .then(res => {
            setList(res.data);
        })
    }, [])


    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(URL, createData)
        .then(res => {
            console.log(res.data);
        })
    }, [createData]);

    
    return (
        <>
        <div className="dices">
            <div className="content">
                <div className="left">
                    <Create setCreateData={setCreateData}/>
                </div>
                <div className="right">
                    <List 
                    list={list}
                    setDeleteModal={setDeleteModal}
                    deleteModal={deleteModal}
                    setDeleteData={setDeleteData}
                    editModal={editModal}
                    setEditModal={setEditModal}
                    setEditData={setEditData}
                     />
                </div>
            </div>
        </div>
        {
            messages && <Messages messages={messages} />
        }
        </>
    );

}

export default App;