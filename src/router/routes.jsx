import { Routes, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import Home from '../pages/home/home';
import FoodPage from '../pages/food/food';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Home />} />
      <Route path="/food" element={<FoodPage />} />
    </Routes>
  );
}

export default AppRoutes;