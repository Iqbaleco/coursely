import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCourseCard = ({ course }) => {
    const { thumbnail_url, title, details, _id } = course
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`topics/courses/${_id}`}><button className="justify-end btn btn-primary">Details</button></Link></p>
                            :
                            <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryCourseCard;