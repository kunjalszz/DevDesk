import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from '../../features/dashboard/DashboardPage';
import { ROUTES } from './routes';
import AppLayout from '../../components/layout/AppLayout';



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path={ROUTES.HOME}
  element={<AppLayout>
    <DashboardPage />
</AppLayout>
  }
/> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;