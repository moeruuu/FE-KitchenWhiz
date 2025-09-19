import { Routes, Route, useLocation } from 'react-router-dom';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
    </Routes>
  );
}

export default AppRoutes;