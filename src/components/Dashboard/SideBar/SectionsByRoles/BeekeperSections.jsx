import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routesName from '../../../../constants/routesName';
const { dashboard: routes } = routesName.loggedIn;

const BeekeperSections = ({ idReportProblems }) => {
  return (
    <div>
      <ul className="nav flex-column mb-auto mt-4">
        <Link to={routes.beekeeper.offers}>
          <li className="nav-item">
            <span className="nav-link d-flex align-items-center gap-2">
              Mis Productos
            </span>
          </li>
        </Link>
        <Link to={routes.beekeeper.offers}>
          <li className="nav-item">
            <span className="nav-link d-flex align-items-center gap-2">
              Atender pedidos
            </span>
          </li>
        </Link>
      </ul>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
        <span>Reportar problemas</span>
        <span
          className="link-secondary"
          data-bs-toggle="modal"
          data-bs-target={'#' + idReportProblems}
        >
          <i className="bi bi-plus-circle"></i>
        </span>
      </h6>
    </div>
  );
};

BeekeperSections.propTypes = {
  idReportProblems: PropTypes.string,
};
export default BeekeperSections;
