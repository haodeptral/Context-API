import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

// UserProfileWithContext (Level 1)
// ├── UserInfo (Level 2)
// │   ├── UserAvatar (Level 3)
// │   │   ├── UsernameBadge (Level 4) - tự lấy user từ Context
// │   │   └── StatusIndicator (Level 4) - tự lấy user từ Context  
// │   └── UserDetails (Level 3) - tự lấy user từ Context
// └── UserActions (Level 2)
//     ├── QuickStats (Level 3) - tự lấy user từ Context
//     └── ActionButtons (Level 3)
//         ├── LogoutButton (Level 4) - tự lấy logout từ Context
//         └── ThemeToggleButton (Level 4) - tự lấy theme từ Context

// Level 4: Component sâu nhất - tự lấy username từ Context
const UsernameBadge = () => {
    const { user } = useAuth();
    
    return (
        <span className="inline-block bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
            @{user?.username}
        </span>
    );
};

// Level 4: Component hiển thị status - tự lấy từ Context
const StatusIndicator = () => {
    const { user } = useAuth();
    const isLoggedIn = !!user;
    
    return (
        <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLoggedIn ? 'bg-blue-500' : 'bg-red-500'}`}></div>
            <span className="text-sm">
                {isLoggedIn ? 'Online' : 'Offline'}
            </span>
        </div>
    );
};

// Level 3: Component chứa avatar và basic info
const UserAvatar = () => {
    const { user } = useAuth();
    
    return (
        <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-blue-300 dark:bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-blue-800 dark:text-blue-200 font-bold text-lg">
                    {user?.username?.charAt(0).toUpperCase()}
                </span>
            </div>
            <div>
                <UsernameBadge />
                <StatusIndicator />
            </div>
        </div>
    );
};

// Level 3: Component hiển thị thông tin chi tiết
const UserDetails = () => {
    const { user } = useAuth();
    
    return (
        <div className="space-y-2 text-sm">
            <p className="text-blue-600 dark:text-blue-300">
                <strong>Username:</strong> {user?.username}
            </p>
            <p className="text-blue-600 dark:text-blue-300">
                <strong>Trạng thái:</strong> {user ? 'Đã đăng nhập' : 'Chưa đăng nhập'}
            </p>
            <p className="text-blue-600 dark:text-blue-300">
                <strong>Thời gian:</strong> {new Date().toLocaleTimeString()}
            </p>
        </div>
    );
};

// Level 2: Component chứa thông tin user
const UserInfo = () => {
    return (
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Thông tin người dùng</h4>
            <UserAvatar />
            <UserDetails />
        </div>
    );
};

// Level 4: Button component - tự lấy logout từ Context
const LogoutButton = () => {
    const { logout } = useAuth();
    
    return (
        <button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
            Đăng xuất (Context)
        </button>
    );
};

// Level 4: Theme toggle button - tự lấy theme từ Context
const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <button 
            onClick={toggleTheme}
            className="bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded transition-colors"
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

// Level 3: Action buttons container
const ActionButtons = () => {
    return (
        <div className="flex space-x-2 mt-3">
            <LogoutButton />
            <ThemeToggleButton />
        </div>
    );
};

// Level 3: Quick stats - tự lấy user từ Context
const QuickStats = () => {
    const { user } = useAuth();
    
    return (
        <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded text-center">
                <div className="text-lg font-bold text-blue-700 dark:text-blue-200">42</div>
                <div className="text-xs text-blue-600 dark:text-blue-300">Posts</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded text-center">
                <div className="text-lg font-bold text-blue-700 dark:text-blue-200">{user?.username?.length || 0}</div>
                <div className="text-xs text-blue-600 dark:text-blue-300">Chars</div>
            </div>
        </div>
    );
};

// Level 2: Component chứa các actions
const UserActions = () => {
    return (
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Hành động</h4>
            <QuickStats />
            <ActionButtons />
        </div>
    );
};

// Component cha - các component con tự lấy data từ Context
const UserProfileWithContext = () => {
    return (
        <div className="border border-blue-300 dark:border-blue-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                📘 Component SỬ DỤNG Context
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Các component con tự lấy data từ Context, không cần truyền props
            </p>
            
            <UserInfo />
            <UserActions />
        </div>
    );
};

export default UserProfileWithContext;
