import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import routes from '../../constants/routesName';
import { AppContext } from '../../contexts/AppContext';
import { useContext } from 'react';
import SideBar from './SideBar';

const UserMenuDropdown = ({ user, logOut }) => {
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
          <Link to={'/'} className="dropdown-item" onClick={logOut}>
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </>
  );
};

const DashboardLayout = ({ children }) => {
  const { user, logOut, info } = useContext(AppContext);
  return (
    <div>
      {info && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: 0,
            width: '100%',
            zIndex: 1000000,
          }}
          className={`alert alert-${info.type}`}
        >
          {info.msg}
        </div>
      )}

      <>
        <header
          className="navbar fixed-top bg-dark p-0  d-grid align-items-center justify-content-between"
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
              <UserMenuDropdown user={user} logOut={logOut} />
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
          <div className="row" style={{ overflowY: 'hidden' }}>
            <SideBar />
            <main
              className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3 pb-4"
              style={{
                overflowY: 'auto',
                maxHeight: '100%',
                paddingTop: '60px',
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

UserMenuDropdown.propTypes = {
  user: PropTypes.string,
  logOut: PropTypes.func,

};DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
