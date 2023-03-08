import React, { useContext, useState } from 'react';
import { Global } from './Global';

const Create = () => {

    const [number, setNumber] = useState(0);
    const { setCreate } = useContext(Global);

    const add = _ => {
        setCreate({
            number: parseInt(number)
        })
        setNumber(0);
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                Please Select Your Lucky Numeber
            </div>
            <div className="card-body">
                <h5 className="card-title">Your Number is {number}</h5>
                <div className="mb-3">
                    <label for="customRange1" className="form-label">Slide your number</label>
                    <input type="range" min="0" max="99" className="form-range"
                        value={number} onChange={event => setNumber(event.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={add} >Add</button>
            </div>
        </div>
    )
}

export default Create;
