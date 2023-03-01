import React, { useState, useEffect } from "react";
import './App.scss'
import Menu from "./components/016/Menu";
import Fox from "./components/016/Fox";
import Home from "./components/016/Home";
import Racoon from "./components/016/Racoon";
import Volf from "./components/016/Volf";
import axios from 'axios'

function App() {

    const [page, setPage] = useState('home')
    const [content, setContent] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3003/api/' + page)
        .then(res => {
            setContent(res.data)
        })
    }, [page]);

    return (
        <div className="App">
            <div className="App-header">
                <Menu setPage={setPage} />
                {
                    page === 'home' && null !== content ? <Home style={{color: content.color}} title={content.title} /> : null
                }
                                {
                    page === 'racoon' ? <Racoon style={{color: content.color}} title={content.title} /> : null
                }
                                {
                    page === 'fox' ? <Fox style={{color: content.color}} title={content.title} /> : null
                }
                                {
                    page === 'volf' ? <Volf style={{color: content.color}} title={content.title} /> : null
                }
                {
                    null == content ? <h1>Loading...</h1> : null
                }
            </div>

        </div>
    )
}

export default App