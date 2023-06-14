import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../constants/routesName';
import { AppContext } from '../../contexts/AppContext';
import { useContext } from 'react';
import SideBar from './SideBar';
const loggedOutRoutes = routes.loggedOut;
const loggedinRoutes = routes.loggedIn;


const UserMenuDropdown = ({ user }) => {
  return (
    <>
      <ul className="dropdown-menu position-absolute" data-bs-theme="light">
        <span className="text-secondary w-100 ms-3">{user}</span>
        <li>
          <Link to={'/'} className="dropdown-item">
            Inicio
          </Link>
        </li>
        <li>
          <Link to={'/'} className="dropdown-item">
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </>
  );
};

const DashboardLayout = ({ children }) => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <>
        <header
          className="navbar fixed-top bg-dark p-0 shadow d-grid align-items-center justify-content-between"
          style={{ height: '58px', gridTemplateColumns: 'auto 1fr' }}
          data-bs-theme="dark"
        >
          <Link
            to={'/'}
            className="navbar-brand fw-bold me-0 px-3 fs-6 text-white text-uppercase"
          >
            <img src="/img/Panal.png" width={'50px'} alt="" />
            Apicgest
          </Link>
          <ul className="navbar-nav flex flex-row align-items-center justify-content-end">
            <div className="nav-item dropstart me-0 me-md-3">
              <a
                className="text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="bi bi-person-circle me-1"
                  style={{ fontSize: '1.5em' }}
                ></i>
                <i className="bi bi-chevron-down"></i>
              </a>
              <UserMenuDropdown user={user} />
            </div>
            <li className="nav-item text-nowrap">
              <button
                className="nav-link px-3 text-white d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list"></i>
              </button>
            </li>
          </ul>
        </header>
        <div className="container-fluid">
          <div className="row" style={{ height: '100vh', overflowY: 'hidden' }}>
            <SideBar />
            {/* //TODO hacer el router para las secciones */}
            <main
              className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3 pb-4"
              style={{
                overflowY: 'auto',
                maxHeight: '100%',
                paddingTop: '58px',
              }}
            >
              {children}
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.array,
};

export default DashboardLayout;
