import { Link } from 'react-router-dom';
import routesName from '../../../../constants/routesName';
const { dashboard: routes } = routesName.loggedIn;

const AdminSections = () => {
  return (
    <div>
      <ul className="nav flex-column mb-auto mt-4">
        <Link to={routes.admin.users}>
          <li className="nav-item">
            <span className="nav-link d-flex align-items-center gap-2">
              Usuarios
            </span>
          </li>
        </Link>
        <Link to={routes.admin.requests}>
          <li className="nav-item">
            <span className="nav-link d-flex align-items-center gap-2">
              Solicitudes de registro
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSections;
