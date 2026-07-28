import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from '../../features/dashboard/DashboardPage';
import { ROUTES } from './routes';



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path={ROUTES.dashboard}
  element={<DashboardPage/>
  }
/> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;