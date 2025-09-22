import { Routes, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login/login';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;