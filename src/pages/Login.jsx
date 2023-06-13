import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Login = () => {
  const { data, setData, login } = useContext(AppContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      login
      <button onClick={handleLogin}>Dale</button>
    </div>
  );
};

export default Login;
