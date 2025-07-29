import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
