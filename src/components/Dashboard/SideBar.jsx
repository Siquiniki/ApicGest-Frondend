import { styled } from 'styled-components';
import { AppContext } from '../../contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import getRoleSections from '../../utils/getRoleSections';

const SideBarContainer = styled.div`
  padding-top: 75px;

  @media (max-width: 767px) {
    & {
      padding-top: 0px;
    }
  }
`;
const SideBar = () => {
  const { role } = useContext(AppContext);
  const [sections, setSections] = useState(getRoleSections(role));

  useEffect(() => {
    console.log(sections);
  }, [])
  

//   TODO hacer las secciones por roles
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <SideBarContainer
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
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="#"
              >
                <i className="bi bi-house-fill"></i>
                Dashboard
              </a>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <i className="bi bi-plus-circle"></i>
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-file-earmark"></i>
                Current month
              </a>
            </li>
          </ul>
          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-gear-wide-connected"></i>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-door-closed"></i>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
        <footer className="mt-5 mb-3 text-body-secondary text-center">
          © <span className="text-uppercase fw-bold">Apicgest.</span>
          SA
        </footer>
      </SideBarContainer>
    </div>
  );
};

export default SideBar;
