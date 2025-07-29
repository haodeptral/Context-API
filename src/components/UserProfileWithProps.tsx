import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

// UserProfileWithProps (Level 1) - Lấy data từ Context
// ├── UserDisplay (Level 2) - Nhận props từ Level 1
// │   ├── UserAvatar (Level 3) - Nhận props từ Level 2
// │   │   ├── UsernameBadge (Level 4) - Nhận props từ Level 3
// │   │   └── StatusIndicator (Level 4) - Nhận props từ Level 3
// │   └── UserDetails (Level 3) - Nhận props từ Level 2
// └── UserControls (Level 2) - Nhận props từ Level 1
//     ├── QuickStats (Level 3) - Nhận props từ Level 2
//     └── ActionButtons (Level 3) - Nhận props từ Level 2
//         ├── LogoutButton (Level 4) - Nhận props từ Level 3
//         └── ThemeToggleButton (Level 4) - Nhận props từ Level 3

// Level 4: Component sâu nhất - chỉ hiển thị username
const UsernameBadge = ({ username }: { username: string }) => {
    return (
        <span className="inline-block bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
            @{username}
        </span>
    );
};

// Level 4: Component hiển thị status
const StatusIndicator = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLoggedIn ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm">
                {isLoggedIn ? 'Online' : 'Offline'}
            </span>
        </div>
    );
};

// Level 3: Component chứa avatar và basic info
const UserAvatar = ({ username, isLoggedIn }: { username: string; isLoggedIn: boolean }) => {
    return (
        <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-green-300 dark:bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-green-800 dark:text-green-200 font-bold text-lg">
                    {username.charAt(0).toUpperCase()}
                </span>
            </div>
            <div>
                <UsernameBadge username={username} />
                <StatusIndicator isLoggedIn={isLoggedIn} />
            </div>
        </div>
    );
};

// Level 3: Component hiển thị thông tin chi tiết
const UserDetails = ({ username, isLoggedIn }: { username: string; isLoggedIn: boolean }) => {
    return (
        <div className="space-y-2 text-sm">
            <p className="text-green-600 dark:text-green-300">
                <strong>Username:</strong> {username}
            </p>
            <p className="text-green-600 dark:text-green-300">
                <strong>Trạng thái:</strong> {isLoggedIn ? 'Đã đăng nhập' : 'Chưa đăng nhập'}
            </p>
            <p className="text-green-600 dark:text-green-300">
                <strong>Thời gian:</strong> {new Date().toLocaleTimeString()}
            </p>
        </div>
    );
};

// Level 2: Component chứa thông tin user
const UserDisplay = ({ username, isLoggedIn }: { username: string; isLoggedIn: boolean }) => {
    return (
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Thông tin hiển thị</h4>
            <UserAvatar username={username} isLoggedIn={isLoggedIn} />
            <UserDetails username={username} isLoggedIn={isLoggedIn} />
        </div>
    );
};

// Level 4: Button component
const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
    return (
        <button 
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
            Đăng xuất (qua Props)
        </button>
    );
};

// Level 4: Theme toggle button
const ThemeToggleButton = ({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) => {
    return (
        <button 
            onClick={onToggle}
            className="bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded transition-colors"
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

// Level 3: Action buttons container
const ActionButtons = ({ onLogout, theme, onToggleTheme }: { onLogout: () => void; theme: 'light' | 'dark'; onToggleTheme: () => void }) => {
    return (
        <div className="flex space-x-2 mt-3">
            <LogoutButton onLogout={onLogout} />
            <ThemeToggleButton theme={theme} onToggle={onToggleTheme} />
        </div>
    );
};

// Level 3: Quick stats
const QuickStats = ({ username }: { username: string }) => {
    return (
        <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-green-100 dark:bg-green-800 p-2 rounded text-center">
                <div className="text-lg font-bold text-green-700 dark:text-green-200">42</div>
                <div className="text-xs text-green-600 dark:text-green-300">Posts</div>
            </div>
            <div className="bg-green-100 dark:bg-green-800 p-2 rounded text-center">
                <div className="text-lg font-bold text-green-700 dark:text-green-200">{username.length}</div>
                <div className="text-xs text-green-600 dark:text-green-300">Chars</div>
            </div>
        </div>
    );
};

// Level 2: Component chứa các controls
const UserControls = ({ onLogout, username, theme, onToggleTheme }: { onLogout: () => void; username: string; theme: 'light' | 'dark'; onToggleTheme: () => void }) => {
    return (
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Điều khiển</h4>
            <QuickStats username={username} />
            <ActionButtons onLogout={onLogout} theme={theme} onToggleTheme={onToggleTheme} />
        </div>
    );
};

// Component cha - lấy data từ Context và truyền xuống các component con qua props
const UserProfileWithProps = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="border border-green-300 dark:border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">
                📗 Component KHÔNG SỬ DỤNG Context (Props Drilling)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Component cha lấy data từ Context và truyền xuống con qua props
            </p>
            
            <UserDisplay 
                username={user?.username || 'Unknown'} 
                isLoggedIn={!!user} 
            />
            <UserControls 
                onLogout={logout} 
                username={user?.username || 'Unknown'}
                theme={theme}
                onToggleTheme={toggleTheme}
            />
        </div>
    );
};

export default UserProfileWithProps;
