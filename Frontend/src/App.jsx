
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Login } from './pages/Login';
import { Dashboard} from './pages/Dashboard.';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { SignupForm } from './pages/SignupForm';
import { Users } from './pages/Users';

import { BrowserRouter ,Routes,Router, Route,Navigate } from 'react-router-dom';

function App() {


  return (
    <>

    <Routes>
      {/* ADD THIS LINE FOR YOUR LOGIN FORM */}
      <Route path="/" element={<Login />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

      {/* YOU ALREADY HAVE THIS ONE FOR SIGNUP */}
      <Route path="/signup" element={<SignupForm />} />
    </Routes>




    </>
  )
}

export default App
