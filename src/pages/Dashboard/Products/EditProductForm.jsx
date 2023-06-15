import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmptyString from '../../../utils/isEmptyString';

const EditProductForm = ({ handleEdit, data }) => {
  const [idProd, setIdProd] = useState();
  const [nameProd, setNameProd] = useState();
  const [price, setPrice] = useState();
  const [capacity, setCapacity] = useState();
  const [lot, setLot] = useState();
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log(data);
    if(data){
        setIdProd(data.idProd)
        setNameProd(data.nameProd)
        setPrice(data.price)
        setCapacity(data.capacity)
        setLot(data.lot)
        setEnable(data.enable)
    }
  }, [data])
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nameProd':
        setNameProd(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'capacity':
        setCapacity(value);
        break;
      case 'lot':
        setLot(value);
        break;
      case 'enable':
        setEnable(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (isEmptyString([nameProd, price, capacity, lot]))
      return setError('No pueden haber campos vacíos');
    handleEdit({ nameProd, price, capacity, lot, enable, idProd });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="nameProd">Nombre del producto:</label>
            <input
              type="text"
              className="form-control"
              id="nameProd"
              name="nameProd"
              value={nameProd}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="capacity">Capacidad:</label>
            <input
              type="text"
              className="form-control"
              id="capacity"
              name="capacity"
              value={capacity}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lot">Lote:</label>
            <input
              type="text"
              className="form-control"
              id="lot"
              name="lot"
              value={lot}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-2">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enable"
            name="enable"
            checked={enable}
            onChange={handleOnChange}
          />
          <label className="form-check-label" htmlFor="enable">
            Disponible
          </label>
        </div>
      </div>
      {error && (
        <div className="text-danger text-center fw-bold">***{error}***</div>
      )}
      <button
        onClick={handleSubmit}
        className="btn btn-success bg_secondary w-100 text-white mt-4 fw-bold"
      >
        Guardar
      </button>
    </div>
  );
};

EditProductForm.propTypes = {
  handleEdit: PropTypes.func,
  data: PropTypes.object,
};

export default EditProductForm;
