import Layout from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'src/layout';
import HomePage from 'src/pages/home';

function RoutElements() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RoutElements;
