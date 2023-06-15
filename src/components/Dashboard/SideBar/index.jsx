import { styled } from 'styled-components';
import { AppContext } from '../../../contexts/AppContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import roles from '../../../constants/roles';
import routesName from '../../../constants/routesName';
const { dashboard: routes } = routesName.loggedIn;
import Modal from '../../Modal';
import BeekeperSections from './SectionsByRoles/BeekeperSections';
import AdminSections from './SectionsByRoles/AdminSections';
import ClientSections from './SectionsByRoles/ClientSections';

const SideBarContainer = styled.div`
  padding-top: 75px;

  @media (max-width: 767px) {
    & {
      padding-top: 0px;
    }
  }
`;
const SideBar = () => {
  const idReportProblems = 'reportProblem';
  const { role, setInfo } = useContext(AppContext);

  const handleSendProblem = () => {
    setInfo({type:'success', msg: 'Su mensaje ha sido entregado con éxito'})
  }

  //   TODO hacer las secciones por roles
  return (
    <div className=" border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary ">
      <SideBarContainer
        style={{ height: '100vh' }}
        className="offcanvas-md offcanvas-start bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 overflow-y-auto">
          <ul className="nav flex-column">
            <Link to={routes.root}>
              <li className="nav-item">
                <span className="nav-link d-flex align-items-center gap-2 active">
                  <i className="bi bi-house-fill"></i>
                  Dashboard
                </span>
              </li>
            </Link>
          </ul>
          {role === roles.beekeeper && (
            <BeekeperSections idReportProblems={idReportProblems} />
          )}
          {role === roles.admin && <AdminSections />}

          {role === roles.client && <ClientSections />}

          <hr className="my-3" />
        </div>
        <footer className="mt-5 mb-3 text-body-secondary text-center">
          © <span className="text-uppercase fw-bold">Apicgest.</span>
          SA
        </footer>
      </SideBarContainer>
      <Modal
        title={'Reportar problema'}
        idModal={idReportProblems}
        action={handleSendProblem}
        actionButtonTitle={'Enviar'}
      >
        <>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Problema
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Breve nombre del problema"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={''}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default SideBar;
