import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Access from './Access/Access';

const Courses = () => {
    const courses = useLoaderData();
    const { title, author, total_view, rating, image_url, details } = courses;

    const [access, setAccess] = useState([]);

    // const handleAccessPage = (courses) => {
    //     const newCourse = [...access, courses]
    //     setAccess(newCourse);
    // }

    return (
        <div>
            <div className="card w-fit bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="" /></figure>
                <div className="card-body">
                    <div className='gap-5'>
                        <div className='flex justify-between'>
                            <div className='flex gap-6 items-center'>
                                <p className='w-12 rounded-full ring-4'><img className='rounded-full' src={author?.img} alt="" /></p>
                                <p>{author?.name}</p>
                            </div>
                            <div>
                                <p>Date: {author?.published_date}</p>
                                <p>Rating: {rating?.number}</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/access'>Get Premium Access</Link></button>
                        {/* onClick={handleAccessPage(courses) */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;