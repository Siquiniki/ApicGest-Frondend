import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import AuthPageLayout from '../components/AuthPageLayout';
import authRoutes from '../api/routes/auth.routes';
import { useNavigate } from 'react-router-dom';
import routesName from '../constants/routesName';

const Login = () => {
  const { login, setUser:setUserGlobal, setRole } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState('usuario1');
  const [password, setPassword] = useState('@M4y4D3v3');
  const [selectedOption, setSelectedOption] = useState('client');

  const handleLogin = () => {
    if (user.trim() === '' || password.trim() === '') {
      setErrorMsg('No pueden haber campos vacíos');
      return;
    }
    setLoading(true);
    let route = radioButtons.filter((item) => item.value === selectedOption)[0]
      .route;
    let params = {};

    if (selectedOption === 'beekeeper' || selectedOption === 'admin')
      params = { user, password };
    else if (selectedOption === 'client') params = { email: user, password };

    login(route, params)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem('access_token', res.data.token);
        setUserGlobal(res.data?.user)
        setRole(res.data.role)
        navigate('/')
      })
      .catch((e) => {
        console.error(e);
        setErrorMsg(e.response?.data?.message || 'Ha habido un problema en la autenticación :( intentelo mas tarde...');
      })
      .finally(() => setLoading(false));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioButtons = [
    { label: 'Cliente', route: authRoutes.login.client, value: 'client' },
    {
      label: 'Apicultor',
      route: authRoutes.login.beekeper,
      value: 'beekeeper',
    },
    { label: 'Administrador', route: authRoutes.login.admin, value: 'admin' },
  ];

  return (
    <AuthPageLayout loading={loading} errorMsg={errorMsg}>
      <h1 className="h3 mb-3 fw-bold mt-4 text-uppercase">ApicGest Login</h1>
      <div className="d-flex justify-content-center mb-3">
        {radioButtons.map((item, key) => (
          <div key={key} className="form-check me-3">
            <input
              className="form-check-input border_primary border-2"
              type="radio"
              value={item.value}
              checked={selectedOption === item.value}
              onChange={handleOptionChange}
            />
            <label className="form-check-label">{item.label}</label>
          </div>
        ))}
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="floatingInput">Correo o Usuario</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Contraseña</label>
      </div>
      <button
        className="btn btn-warning bg_secondary text_primary w-100 py-3"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
    </AuthPageLayout>
  );
};

export default Login;
