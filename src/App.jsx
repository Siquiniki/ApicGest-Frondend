import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './contexts/AppContext';
import { LoggetInRoutes, LoggetOutRoutes } from './constants/browserRouter';

function App() {
  const { user, setUser, setRole, isUserAuth } = useContext(AppContext);

  useEffect(() => {
    isUserAuth()
      .then((resp) => {
        setUser(resp.data.user);
        setRole(resp.data.role);
      })
      .catch((e) => {
        setUser(null);
        setRole(null);
        console.error(e);
      })
    // setUser('Rengoku')
    // setRole('Invitado')
  }, []);


  return (
    <>
      <RouterProvider router={user ? LoggetInRoutes : LoggetOutRoutes} />
    </>
  );
}

export default App;
