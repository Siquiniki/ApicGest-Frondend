import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import routesName from './constants/routesName';
import { AppContextProvider } from './contexts/AppContext';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: routesName.home,
      element: <LandingPage />,
    },
    {
      path: routesName.auth.login,
      element: <Login />,
    },
    {
      path: routesName.auth.signUp,
      element: <div>register</div>,
    },
  ]);

  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;

