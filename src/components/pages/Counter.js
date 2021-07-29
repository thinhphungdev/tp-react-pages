import React from 'react';
import Button from '../UI/Button.js';

import {increment, reset} from '../../store/counterSlice.js';

import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    
    const dispatch = useDispatch();
    const counterValue = useSelector(state => state.counter.value);

    return (
        <div className="counter">
            <div className="counter__container">
                <div className="counter__container--title"> 
                    <h3>Count:</h3>
                    <h1>{counterValue}</h1>
                </div>

                <div className="counter__container--buttons">
                    <Button onClick={() => dispatch(increment())}>➕</Button> 
                    <Button onClick={() => dispatch(reset())}>🔃</Button> 
                </div>
            </div>
        </div>
    )
}

export default Counter
