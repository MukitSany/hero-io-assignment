import React from 'react';
import errorpage from '../assets/error-404.png'
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div>
            <div className='flex justify-center p-20'>
            <img className='w-200 h-150' src={errorpage} alt="" />
        </div>
        <div>
                <h1 className='font-bold text-5xl text-center'>Oops, page not found!</h1>
                <p className='text-center text-gray-500 m-4'>The page you are looking for is not available.</p>
            </div>
            <div className='text-center m-4'>
                <Link to={"/"}>
                <button className="btn btn-soft btn-primary">Go Home</button>
            </Link>
            </div>
        </div>
        
    );
};

export default Errorpage;