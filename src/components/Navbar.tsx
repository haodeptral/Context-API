import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4 text-lg font-semibold">
                <Link to="/" className='font-bold text-2xl'>Context API Demo</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-2 w-10 h-10 justify-center"
                >
                    {theme === 'light' ? (
                        <i className="fa-solid fa-sun"></i>
                    ) : (
                        <i className="fa-solid fa-moon"></i>
                    )}
                </button>
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
