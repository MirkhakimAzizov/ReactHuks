import React, { useReducer, useState } from 'react';
import './index.scss';

const index = () => {
    const reduser = (state, action) => {
        switch (action.type) {
            case 'plus':
                return state + 1;
            default: return state;
        }
    }
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reduser, 0);
    return (
        <>
            <h1>{todos}</h1>
            <button className="btn btn-primary" onClick={() => { dispatch({ type: 'plus', payload: { num: 'a' }, completed: false }) }} >Plus</button>
        </>
    );
};

export default index;