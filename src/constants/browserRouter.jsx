import { createBrowserRouter } from 'react-router-dom';
import routesName from './routesName';
const logInRoutes = routesName.loggedIn
const logOutRoutes = routesName.loggedOut
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';

export const LoggetInRoutes = createBrowserRouter([
  {
    path: logInRoutes.home,
    element: <LandingPage />,
  },
  {
    path: logInRoutes.dashboard.root,
    element: <Dashboard/>,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export const LoggetOutRoutes = createBrowserRouter([
  {
    path: logOutRoutes.home,
    element: <LandingPage />,
  },
  {
    path: logOutRoutes.auth.login,
    element: <Login />,
  },
  {
      path: logOutRoutes.auth.signUp,
      element: <div>register</div>,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
