import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to the coursly world</h1>
                    <p className="mb-5">You are at the right platform to Learn. You will get all the best courses related Web Development here</p>
                    <button className="btn btn-primary"><Link to='/category/05'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;