import { Link } from "react-router-dom";
import routesName from '../../../../constants/routesName';
const { dashboard: routes } = routesName.loggedIn;

const ClientSections = () => {
  return (
    <div>
      <ul className="nav flex-column mb-auto mt-4">
        <Link to={routes.client.products}>
          <li className="nav-item">
            <span className="nav-link d-flex align-items-center gap-2">
              Ofertas
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ClientSections;
