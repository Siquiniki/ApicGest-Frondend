import { useState } from 'react';
import AuthPageLayout from '../components/AuthPageLayout';
import authRoutes from '../api/routes/auth.routes';
import roles from '../constants/roles';
import isEmptyString from '../utils/isEmptyString';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedOption, setSelectedOption] = useState(roles.client);
  const [nameApplic, setName] = useState('');
  const [lastNameApplic, setLastName] = useState('');
  const [ciApplic, setCi] = useState('');
  const [telefApplic, setTelef] = useState('');
  const [emailApplic, setEmail] = useState('');
  const [provApplic, setProv] = useState('');
  const [munApplic, setMun] = useState('');
  const [direction, setDirection] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (
      isEmptyString([
        nameApplic,
        lastNameApplic,
        ciApplic,
        telefApplic,
        emailApplic,
        provApplic,
        munApplic,
        direction,
      ])
    )
      return setErrorMsg('No pueden haber campos vacíos');

    const data = {
      nameApplic,
      lastNameApplic,
      ciApplic,
      certificApplic: true,
      telefApplic,
      emailApplic,
      provApplic,
      munApplic,
      direction,
    };

    console.log(data);
    // if (user.trim() === '' || password.trim() === '') {
    //   setErrorMsg('No pueden haber campos vacíos');
    //   return;
    // }
    // setLoading(true);
    // let route = radioButtons.filter((item) => item.value === selectedOption)[0]
    //   .route;
    // let params = {};
    // if (selectedOption === 'beekeeper' || selectedOption === 'admin')
    //   params = { user, password };
    // else if (selectedOption === 'client') params = { email: user, password };
    // login(route, params)
    //   .then((res) => {
    //     console.log(res);
    //     sessionStorage.setItem('access_token', res.data.token);
    //     setUserGlobal(res.data?.user);
    //     setRole(res.data.role);
    //     navigate('/');
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //     setErrorMsg(
    //       e.response?.data?.message ||
    //         'Ha habido un problema en la autenticación :( intentelo mas tarde...'
    //     );
    //   })
    //   .finally(() => setLoading(false));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioButtons = [
    { label: 'Cliente', route: authRoutes.signUp.client, value: roles.client },
    {
      label: 'Apicultor',
      route: authRoutes.signUp.beekeper,
      value: roles.beekeeper,
    },
  ];
  return (
    <AuthPageLayout loading={loading} errorMsg={errorMsg}>
      <h1 className="h3 mb-3 fw-bold mt-4 text-uppercase">ApicGest Registro</h1>
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

      {selectedOption === roles.beekeeper ? (
        <div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={nameApplic}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              value={lastNameApplic}
              onChange={(event) => setLastName(event.target.value)}
            />
            <label htmlFor="floatingInput">Apellido</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Cédula de Identidad"
              value={ciApplic}
              onChange={(event) => setCi(event.target.value)}
            />
            <label htmlFor="floatingInput">Cédula de Identidad</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono"
              value={telefApplic}
              onChange={(event) => setTelef(event.target.value)}
            />
            <label htmlFor="floatingInput">Teléfono</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Correo Electrónico"
              value={emailApplic}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Correo Electrónico</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Provincia"
              value={provApplic}
              onChange={(event) => setProv(event.target.value)}
            />
            <label htmlFor="floatingInput">Provincia</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Municipio"
              value={munApplic}
              onChange={(event) => setMun(event.target.value)}
            />
            <label htmlFor="floatingInput">Municipio</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              value={direction}
              onChange={(event) => setDirection(event.target.value)}
            />
            <label htmlFor="floatingInput">Dirección</label>
          </div>
        </div>
      ) : (
        <div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Correo</label>
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
        </div>
      )}
      <button
        className="btn btn-warning bg_secondary text_primary w-100 py-3"
        type="submit"
        onClick={handleSignUp}
      >
        {selectedOption === roles.beekeeper
          ? 'Solicitar Registro'
          : 'Registrarse'}
      </button>
    </AuthPageLayout>
  );
};

export default SignUp;
