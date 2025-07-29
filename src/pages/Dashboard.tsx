import { useAuth } from '../context/AuthContext';
import UserProfileWithContext from '../components/UserProfileWithContext';
import UserProfileWithProps from '../components/UserProfileWithProps';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Xin chào, <strong>{user?.username}</strong>. Đây là trang quản lý cá nhân của bạn.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Component sử dụng Context trực tiếp */}
                <UserProfileWithContext />
                
                {/* Component sử dụng Props Drilling */}
                <UserProfileWithProps />
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    🔍 So sánh hai cách tiếp cận với Multiple Nested Components:
                </h3>
                <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                    <p><strong>Context (Xanh dương):</strong> Mỗi component ở mọi level đều có thể tự lấy data từ Context</p>
                    <p><strong>Props Drilling (Xanh lá):</strong> Data phải được truyền qua 4 levels: Parent → Level2 → Level3 → Level4</p>
                    <p><strong>Nested Structure:</strong></p>
                    <ul className="ml-4 space-y-1">
                        <li>• Level 1: UserProfile (Component chính)</li>
                        <li>• Level 2: UserInfo/UserDisplay & UserActions/UserControls</li>
                        <li>• Level 3: UserAvatar, UserDetails, QuickStats, ActionButtons</li>
                        <li>• Level 4: UsernameBadge, StatusIndicator, LogoutButton, ThemeToggleButton</li>
                    </ul>
                    <p><strong>Quan sát:</strong> Context giảm props drilling, nhưng tạo dependency. Props tăng boilerplate nhưng component độc lập hơn.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
