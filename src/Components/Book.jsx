import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { title, image, isbn13, price, subtitle, url } = book;
    return (
        <Link to={`../book/${isbn13}`}>
            <div className='overflow-hidden relative transition duration-300 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img
                    src={image}
                    alt="book cover"
                    className='object-cover w-full h-56 md:h-64 lg:h-80'
                />

                <div className='bg-black px-6 py-6 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-400 text-gray-300 absolute inset-0 flex flex-col'>
                    <p><span className='font-bold tracking-wide'>Title:</span> {title}</p>
                    <br />
                    <p>{subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto text-center'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;