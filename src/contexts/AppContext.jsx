import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/Auth.service';
import BeekeeperService from '../services/Beekeeper.service';
import AdminService from '../services/Admin.service';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [info, setInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [requests, setRequests] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setInfo(null);
    }, [5000]);
  }, [info]);

  const contextData = {
    requests,
    setRequests,
    info,
    setInfo,
    user,
    setUser,
    role,
    setRole,
    products,
    setProducts,
    login: (route, params) => AuthService.login(route, params),
    logOut: () => {
      sessionStorage.removeItem('access_token');
      setUser(null);
      setRole(null);
    },
    isUserAuth: () => AuthService.isUserAuth(),
    getProducts: () => {
      BeekeeperService.getProducts()
        .then((resp) => setProducts(resp.data))
        .catch((e) => console.log(e));
    },
    getRequests: () => {
      AdminService.getRequests()
        .then((resp) => setRequests(resp.data))
        .catch((e) => console.log(e));
    },
    getUsers: () => AdminService.getUsers(),
    addProduct: (params) => BeekeeperService.addProduct(params),
    deleteProducts: (params) => BeekeeperService.deleteProducts(params),
    editProduct: (params) => BeekeeperService.editProduct(params),
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.element,
};

export { AppContext, AppContextProvider };
