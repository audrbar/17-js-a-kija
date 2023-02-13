function Click() {

    const doSomething = () => {
        return function() {
        console.log('Yes');
        }
    }

    const go = () => {
        console.log('Go Red!');
    }

    return (
        <div>
            <button className="btn" onClick={doSomething()}>ClickMe</button>
            <button className="btn" onClick={() => console.log('Yes Blue!')}>ClickMe</button>
            <button className="btn" onClick={go}>ClickMe</button>
        </div>
    )
}
export default Click;