function Menu({setPage}) {

    return (
        <div className="meniu-links">
            <button onClick={() => setPage('home')}>home</button>
            <button onClick={() => setPage('racoon')}>racoon</button>
            <button onClick={() => setPage('fox')}>fox</button>
            <button onClick={() => setPage('volf')}>volf</button>
        </div>
    )
}

export default Menu;