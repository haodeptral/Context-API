import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4 text-lg font-semibold">
                <Link to="/" className='font-bold text-2xl'>Context API Demo</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <span>Xin chào, <strong>{user.username}</strong></span>
                        <button
                            onClick={logout}
                            className="bg-white dark:bg-gray-800 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
                        >
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="bg-white dark:bg-gray-800 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
                    >
                        Đăng nhập
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
