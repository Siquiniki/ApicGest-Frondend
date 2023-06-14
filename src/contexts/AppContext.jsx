import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/Auth.service';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null)
  
  const contextData = {
    user,
    setUser,
    role,
    setRole,
    login: (route, params) => AuthService.login(route, params),
    logOut: () => {
      sessionStorage.removeItem('access_token')
      setUser(null)
      setRole(null)
    },
    isUserAuth: () => AuthService.isUserAuth(),
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.element,
};

export { AppContext, AppContextProvider };
