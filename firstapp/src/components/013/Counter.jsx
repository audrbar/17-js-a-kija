import { useState, useRef } from 'react';
import Fenix from './Fenix';

function Counter() {

    console.log('Counter function');

    const a = useRef(1);

    const [count, setCount] = useState(10);

    const add = _ => {
        setCount(c => c + 1);
    }

    const rem = _ => {
        setCount(c => c - 1);
    }

    const addToVar = _ => {
        console.log(++a.current);
    }

  return (
    <div>
        <h1>{count}</h1>
        { count > 15 ? <Fenix /> : null }
        <>
        <h1>Count</h1>
        <button className="blue" onClick={add} >+1</button>
        <button className="red" onClick={rem} >-1</button>
        <button className="coral" onClick={addToVar} >Var</button>

        </>
    </div>
  )
}

export default Counter;