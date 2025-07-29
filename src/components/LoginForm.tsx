import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
    const { user, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            login(username, password); // Gọi login từ context
            setUsername('');
            setPassword('');
        }
    };

    if (user) return null; // Nếu đã đăng nhập thì ẩn form

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-600 p-6 rounded shadow-md max-w-md mx-auto mt-8"
        >
            <h2 className="text-2xl font-semibold mb-4">Đăng nhập</h2>

            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Tên đăng nhập</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                    placeholder="Nhập tên đăng nhập"
                />
            </div>

            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">Mật khẩu</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                    placeholder="Mật khẩu (bất kỳ)"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Đăng nhập
            </button>
        </form>
    );
};

export default LoginForm;
