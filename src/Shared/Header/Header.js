import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/'>Topics</Link></li>
                            <li><Link to='/faq'>Faq</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><input type="checkbox" className="toggle" checked /></li>

                        </ul>
                    </div>
                    <p className='w-15'>
                        <Link to='/home'><img src="./Coursly logo.png" alt="" /></Link></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/category/05'>Topics</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><input type="checkbox" className="toggle" checked /></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <div className='flex justify-between mr-6'>
                                <p onClick={logOut} className="btn mr-4"><Link to='/home'>Log Out</Link></p>
                                <p className='w-12 rounded-full ring-4 mr-4'>
                                    {user?.photoURL ? <img className='rounded-full' title={user.displayName} src={user.photoURL} alt="" /> : <p>No image</p>
                                    }</p>
                            </div>
                            :
                            <p className="btn mr-8"><Link to='/login'>Login</Link></p>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;