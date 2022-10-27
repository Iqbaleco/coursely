import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h3>All categories here</h3>
        </div>
    );
};

export default Categories;