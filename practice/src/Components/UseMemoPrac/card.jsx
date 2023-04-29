import React from 'react';
import { memo } from 'react';

const card = (props) => {
    console.log('child rendered');
    return (
        <>
            <div className="card my-2 mx-4">
                <div className="card-body">
                    <h2 className="card-title text-center">{props.obj1.title} && {props.obj2("Hi").title}</h2>
                </div>
            </div>
        </>
    );
};

export default memo(card);