import React from 'react';

const Blog = ({blog}) => {
    const {id, name, description, report, code} = blog
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-gray-400 border border-gray-900 hover:bg-black shadow-xl rounded-lg py-8"
            
            >
            <h2 className="text-2xl font-bold font-two pt-4 text-red-500">{name}</h2>
            <p className="text-lg font-one mt-4 text-justify px-5 lg:px-10 ">{description}</p>
            <div>
            <a href={report} target="_blank" rel="noreferrer">
                <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-red-700 text-white font-bold">
                    Report
                </button>
            </a>
            </div>
        </div>
    );
};

export default Blog;