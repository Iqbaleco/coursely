import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from './Categories/Categories';

const Topics = () => {
    return (
        <div>
            <div className="grid grid-cols-8 gap-4 m-12">
                <div className="col-span-2">
                    <Categories></Categories>
                </div>
                <div className="col-span-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Topics;