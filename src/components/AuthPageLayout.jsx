import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthPageLayout = ({ children, loading, errorMsg }) => {
  return (
    <div className="container">
      <main className="form-signin row m-auto">
        <div className="d-flex justify-content-center">
          <Link to={'/'}>
            <img src="/img/Panal.png" alt="" width={200} />
          </Link>
        </div>
        <div className="bg-light-subtle shadow-lg p-5 py-3 border_primary border-top border-5 position-relative">
          {loading && (
            <div
              className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.7)',
                left: 0,
                zIndex: 10,
              }}
            >
              <div
                className="spinner-border"
                style={{ width: '3rem', height: '3rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {children}
          {errorMsg && (
            <h4 className="text-danger mt-3 text-center fw-bold">{errorMsg}</h4>
          )}
          <p className="mt-5 mb-3 text-body-secondary text-center">
            © <span className="text-uppercase fw-bold">Apicgest.</span>
            SA
          </p>
        </div>
      </main>
    </div>
  );
};

AuthPageLayout.propTypes = {
  children: PropTypes.array,
  loading: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default AuthPageLayout;
