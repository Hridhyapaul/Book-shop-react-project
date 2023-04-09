import React from 'react';
import Lottie from 'lottie-react'
import reader from '../assets/error-404.json'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section>
            <div className='w-full lg:w-1/3 lg:mx-auto h-56 sm:h-96'>
                <Lottie animationData={reader} loop={true} />
                <h2 className='text-5xl text-center font-semibold'>
                    {error?.message}
                </h2>
                <div className='flex justify-center'>
                    <Link to='/'><button className='btn mt-5'>Back to Homepage</button></Link>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;