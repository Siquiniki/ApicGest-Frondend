import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './contexts/AppContext';
import LoadingPage from './pages/LoadingPage';
import useRoutesByRole from './hooks/useRoutesByRole';

function App() {
  const { user, setUser, setRole, isUserAuth } = useContext(AppContext);
  const [loading, setloading] = useState(true)
  const {LoggetInRoutes, LoggetOutRoutes} = useRoutesByRole()

  useEffect(() => {
    isUserAuth()
      .then((resp) => {
        console.log(resp);
        setUser(resp.data.user || resp.data.email);
        setRole(resp.data.role);
      })
      .catch((e) => {
        setUser(null);
        setRole(null);
        console.error(e);
      }).finally(() => setloading(false))
    // setUser('Rengoku')
    // setRole('Administrador')
    // setloading(false)
    // setRole('Apicultor')
  }, []);

  if(loading) return <LoadingPage/>

  return (
    <>
      <RouterProvider router={user ? LoggetInRoutes : LoggetOutRoutes} />
    </>
  );
}

export default App;
