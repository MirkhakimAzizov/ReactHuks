import React, { useRef, useState } from 'react';
import './index.scss';

const index = () => {
    const [num, setNum] = useState(0);
    const [effect, setEffect] = useState(null);
    const elHide = useRef(null);
    function funHide() {
        effect == null ? setEffect('hide') ?? (elHide.current.textContent = 'See') : setEffect(null) ?? (elHide.current.textContent = 'Hide');
    }
    return (
        <>
            <div className="my-3 d-flex justify-content-around">
                <button ref={elHide} className="btn btn-primary hide-btn" onClick={() => funHide()}>Hide</button>
            </div>
            <div id={effect} className="toggle-hide w-50 my-5 mx-auto d-flex justify-content-around flex-column border shadow bg-secondary bg-opacity-10">
                <div className="w-100 d-flex justify-content-around mt-5 mx-auto text-center">
                    <p className='text-center bg-primary text-light px-3 py-1 rounded-pill'>Count: {num}</p>
                </div>
                <div className="d-flex justify-content-between flex-1 w-50 my-5 mx-auto">
                    <button className="btn btn-primary" onClick={() => { setNum(num + 1) }}>Plus</button>
                    <button className="btn btn-success" onClick={() => { setNum(0) }}>Null</button>
                    <button className="btn btn-danger" onClick={() => { setNum(num - 1) }}>Minus</button>
                </div>
            </div>
        </>
    );
};

export default index;