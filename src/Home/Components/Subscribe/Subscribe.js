import React from 'react';

const Subscribe = () => {
    return (
        <div className=' flex mt-8 bg-amber-600 h-20 items-center justify-center mb-8'>
            <div className=' text-white'>
                <input className=' w-80 h-10 bg-amber-600 border border-white text-white' type="email" placeholder='Email ID' name="" id="" />
            </div>
            <div className='ml-8 bg-slate-100 h-8 w-24 text-amber-700 flex rounded-sm items-center justify-center'>Subscribe</div>
        </div>
    );
};

export default Subscribe;