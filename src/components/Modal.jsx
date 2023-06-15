import PropTypes from 'prop-types';

const Modal = ({
  idModal,
  title,
  children,
  actionButtonTitle,
  action,
}) => {
  return (
    <div
      className="modal fade"
      id={idModal}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">{children}</div>
          {actionButtonTitle && (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-warning bg_secondary text-white"
                onClick={() => action()}
                data-bs-dismiss="modal"
              >
                {actionButtonTitle}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  actionButtonTitle: PropTypes.string,
  idModal: PropTypes.string,
  action: PropTypes.func,
};

export default Modal;
