import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/Auth.service';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [data, setData] = useState('initial data');
  
  const contextData = {
    data,
    setData,
    login: (route, params) => AuthService.login(route, params),
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.element,
};

export { AppContext, AppContextProvider };
