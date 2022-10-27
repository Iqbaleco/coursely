import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h4>Category Item here {courses.length}</h4>
        </div>
    );
};

export default Category;