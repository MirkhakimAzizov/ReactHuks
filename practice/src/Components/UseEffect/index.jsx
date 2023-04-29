import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';

const index = () => {
    const [data, setData] = useState([]);
    const [nav, setNav] = useState('posts');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${nav}`).then((res) => {
            setData(res.data);
            // console.log(res.data);
        })
    }, [nav]);

    return (
        <>
            <div className="w-50 mx-auto">
                <div className="d-flex gap-1 w-100 mx-auto my-5 justify-content-around">
                    <button className="btn btn-primary" onClick={() => setNav('posts')}>Posts</button>
                    <button className="btn btn-primary" onClick={() => setNav('comments')}>Comments</button>
                    <button className="btn btn-primary" onClick={() => setNav('todos')}>Todos</button>
                </div>
                <div className="d-flex w-100 mx-auto justify-content-around text-center px-3">
                    <h2 className="w-100 bg-info text-light rounded-pill py-1">{nav}</h2>
                </div>
                <ul className="list-unstyled my-5 d-flex flex-column gap-2">
                    {
                        data.map((post) => {
                            return(
                                <li className="card" key={post.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.id}: {post.title ? post.title : post?.email}</h5>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default index;