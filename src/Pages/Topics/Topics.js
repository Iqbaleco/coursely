import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from './Categories/Categories';

const Topics = () => {
    return (
        <div>
            <div className="flex ...">
                <div className="flex-auto w-24">
                    <Categories></Categories>
                </div>
                <div className="flex-auto w-80">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Topics;