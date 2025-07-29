import { createContext, useContext, useState, type ReactNode } from 'react';

type User = {
    username: string;
};

type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string, password: string) => {
        // Giả lập đăng nhập (bỏ qua password)
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook để dễ sử dụng
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
