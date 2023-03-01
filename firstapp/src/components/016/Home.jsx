import Menu from './Menu'

function Home({title, color}) {

    return (
        <>
            <h1 style={{color: color}}>{title}</h1>
            <h2>Nice Home</h2>
        </>
    )
}

export default Home;