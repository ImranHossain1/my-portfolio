import React from 'react';

const Certification = ({certification}) => {
    const {id,name, certifiedBy, Certificate, verifiedLink} = certification
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-gray-400 border border-gray-900 hover:bg-black shadow-xl rounded-lg py-8"
            
            >
            <h2 className="text-2xl font-bold font-two pt-4 text-red-500">{name}</h2>
            <div className='p-10 flex justify-center'>
                <img src={Certificate} alt="" className='h-3/4' />
            </div>
            <div>
            <h2 className="text-2xl font-bold font-two pt-4 text-red-500">Certified By: {certifiedBy}</h2>
            <a href={verifiedLink} target="_blank" rel="noreferrer">
                <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-red-700 text-white font-bold">
                    Verified Link
                </button>
            </a>
            </div>
        </div>
    );
};

export default Certification;