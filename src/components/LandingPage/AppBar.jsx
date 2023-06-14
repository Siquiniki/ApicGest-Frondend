import { Link } from 'react-router-dom';
import routes from '../../constants/routesName';
const loggedOutRoutes = routes.loggedOut;
const loggedinRoutes = routes.loggedIn;
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import routesName from '../../constants/routesName';

const UserMenuDropdown = ({ user, logOut }) => {
  return (
    <>
      {user ? (
        <ul className="dropdown-menu">
          <span className='text-secondary w-100 ms-3'>{user}</span>
          <li>
            <Link to={loggedinRoutes.dashboard.root} className="dropdown-item">
              Dashboard
            </Link>
          </li>
          <li className="dropdown-item" onClick={logOut}>
              Cerrar sesión
          </li>
        </ul>
      ) : (
        <ul className="dropdown-menu">
          <li>
            <Link
              to={loggedOutRoutes.auth.login}
              className="dropdown-item"
              href={routesName.loggedOut.auth.login}
            >
              Login
            </Link>
          </li>
          <li>
            <Link to={loggedOutRoutes.auth.signUp} className="dropdown-item">
              Registrarse
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Entrar como invitado
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

const AppBar = () => {
  const { user, logOut } = useContext(AppContext);
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
              className="navbar-brand fw-bold text-uppercase"
              href="#"
              onClick={() => setCounter(counter + 1)}
            >
              <img src="/img/Panal.png" width={'50px'} alt="" />
              {counter > 7 ? 'ApiRest' : 'ApicGest'}
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
            <UserMenuDropdown user={user} logOut={logOut}/>
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
