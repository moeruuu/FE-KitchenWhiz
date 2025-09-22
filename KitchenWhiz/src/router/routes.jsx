import { Routes, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;