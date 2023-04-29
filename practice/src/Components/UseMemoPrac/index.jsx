import React, { useCallback } from 'react';
import './index.scss';
import Card from './card';
import { useMemo } from 'react';
import { useState } from 'react';
const index = () => {
    const [num, setNum] = useState(0);
    
    console.log('parent rendered');

    let obj1 = useMemo(() => {
        return { title: "Hello" };
    }, []);

    let obj2 = useCallback((title) => {
        return { title: title };
    }, []);

    return (
        <>
            <h2 className="text-center mt-3">Number: {num}</h2>
            <hr />
            <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={() => { setNum(num - 1) }}>Minus</button>
                <button className="btn btn-primary" onClick={() => { setNum(num + 1) }}>Plus</button>
            </div>
            <hr />
            <Card obj1={obj1} obj2={obj2} />
        </>
    );
};

export default index;