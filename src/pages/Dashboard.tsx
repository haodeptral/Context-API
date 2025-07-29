import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
                Xin chào, <strong>{user?.username}</strong>. Đây là trang quản lý cá nhân của bạn.
            </p>
        </div>
    );
};

export default Dashboard;
