import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-iqbaleco.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>All categories</h3>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Categories;