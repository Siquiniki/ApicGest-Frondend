import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import roles from '../constants/roles';
import { createBrowserRouter } from 'react-router-dom';
import routesName from '../constants/routesName';
const logInRoutes = routesName.loggedIn;
const logOutRoutes = routesName.loggedOut;
const beekeeperRoutes = logInRoutes.dashboard.beekeeper;
const adminRoutes = logInRoutes.dashboard.admin;
const clientRoutes = logInRoutes.dashboard.client;
import LandingPage from '../pages/LandingPage';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Dashboard/Products';
import Users from '../components/Dashboard/Admin/Users';
import Requests from '../components/Dashboard/Admin/Requests';
import SignUp from '../pages/SignUp';
import Client from '../components/Dashboard/Client';

const getRoleSections = (role) => {
  const sections = [];
  switch (role?.trim()) {
    case roles.admin:
      sections.push({ path: adminRoutes.users, element: <Users /> });
      sections.push({ path: adminRoutes.requests, element: <Requests /> });
      break;
    case roles.beekeeper:
      sections.push({ path: beekeeperRoutes.offers, element: <Products /> });
      break;
    case roles.client:
      sections.push({ path: clientRoutes.products, element: <Client /> });
      break;
    default:
      break;
  }

  return sections;
};

const useRoutesByRole = () => {
  const { role } = useContext(AppContext);

  const LoggetInRoutes = createBrowserRouter([
    {
      path: logInRoutes.home,
      element: <LandingPage />,
    },
    {
      path: logInRoutes.dashboard.root,
      element: <Dashboard />,
      children: [
        { path: '', element: <div>Root</div> },
        ...getRoleSections(role),
      ],
    },
    {
      path: logInRoutes.dashboard.root + '/*',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <LandingPage />,
    },
  ]);

  const LoggetOutRoutes = createBrowserRouter([
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
      element: <SignUp/>,
    },
    {
      path: '*',
      element: <LandingPage />,
    },
  ]);

  return { LoggetInRoutes, LoggetOutRoutes };
};

export default useRoutesByRole;
