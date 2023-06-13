import { Link } from 'react-router-dom';
import routesName from '../../constants/routesName';
import { useState } from 'react';

const AppBar = () => {
  const sectionsLandingPage = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#actions' },
    { label: 'Productos', href: '#offers' },
    { label: 'Contacto', href: '#contact' },
    // { label: 'Inicio', href: '#test' },
  ];
  const [counter, setCounter] = useState(0);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow-sm"
      style={{ position: 'sticky', top: '-3px', zIndex: 100 }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between w-100 ">
          <div>
            <button
              className="btn m-0 p-0 d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a
              className="navbar-brand fw-bold"
              href="#"
              onClick={() => setCounter(counter + 1)}
            >
              <img src="/img/Panal.png" width={'50px'} alt="" />
              {counter > 7 ? 'ApiRest' : 'ApiGest'}
            </a>
          </div>
          <div className="nav-item dropstart me-2">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className="bi bi-person-circle text-dark me-1"
                style={{ fontSize: '1.5em' }}
              ></i>
              <i className="bi bi-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link
                  to={routesName.auth.login}
                  className="dropdown-item"
                  href="/auth/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to={routesName.auth.signUp} className="dropdown-item">
                  Registrarse
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Entrar como invitado
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ fontSize: '1.2rem' }}
          >
            {sectionsLandingPage.map((item, key) => (
              <li className="nav-item" key={key}>
                <a
                  className="nav-link d-flex"
                  aria-current="page"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;