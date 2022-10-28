import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Access = () => {
    const courseData = useLoaderData();
    return (
        <div>
            <div className="card w-120 bg-base-100 shadow-xl">
                <figure><img src={courseData.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseData.title}</h2>
                    <p>{courseData.details}</p>
                    <input type="text" placeholder="Quantity" className="input w-full max-w-xs" />
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary"><Link to='/home'>Cancel</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Access;