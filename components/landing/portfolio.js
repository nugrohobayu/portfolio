import React from 'react';

function Portfolio(props) {
    return (
        <div className='grid h-[100%] md:px-28 py-10 sm:px-4 lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-khaky-secondary '>
            
            <div className='text-white'>
                <div className=' lg:font-bold sm:font-semibold mb-16'>
                    <h2>Latest</h2>
                    <h2>Projects</h2>
                </div>
                <hr/>
                <h3 className='font-bold mt-2'>Carix</h3>
                <p>Application Website</p>
                <div className='bg-mint-secondary w-[100%] h-[100%]'>

                    
                </div>
            </div>
            
        </div>
    );
}

export default Portfolio;