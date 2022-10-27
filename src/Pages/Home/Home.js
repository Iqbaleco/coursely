import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-3 m-8'>
            {
                allCourses.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;