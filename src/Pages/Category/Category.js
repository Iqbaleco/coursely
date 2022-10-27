import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourseCard from './CategoryCourseCard/CategoryCourseCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <h4>Total Course under this category {categoryCourses.length}</h4>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-3 m-8'>
                {
                    categoryCourses.map(course => <CategoryCourseCard
                        key={course._id}
                        course={course}
                    ></CategoryCourseCard>)
                }
            </div>
        </div>
    );
};

export default Category;