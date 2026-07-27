import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from '../../components/layout/AppLayout';
import DashboardPage from '../../features/dashboard/DashboardPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
<AppLayout>
      <DashboardPage />
    </AppLayout>
  }
/> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;