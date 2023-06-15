import ProptTypes from 'prop-types';
import { useState } from 'react';

const ProductsTable = ({ products, setProducts, setEditData, idEditModal }) => {
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const handleCheck = (index) => {
    const newData = [...products];
    newData[index].checked = !newData[index].checked;
    setProducts(newData);
  };

  const handleSelectAll = () => {
    // const newData = [...products];
    // newData[index].checked = !newData[index].checked;
    // setProducts(newData);
    setIsSelectedAll(!isSelectedAll);
    const newData = [...products];
    newData.forEach((item) => {
      item.checked = !isSelectedAll;
    });
    setProducts(newData);
  };

  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">
            {' '}
            <input
              className="form-check"
              onChange={handleSelectAll}
              checked={isSelectedAll}
              type="checkbox"
            />
          </th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Capacidad</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Disponible</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, key) => (
          <tr key={key}>
            <td>
              <input
                className="form-check"
                onChange={() => handleCheck(key)}
                checked={item.checked}
                type="checkbox"
              />
            </td>
            <td>{item.nameProd}</td>
            <td>{item.price}</td>
            <td>{item.capacity}</td>
            <td>{item.lot}</td>
            <td>{item.enable == 1 ? 'Si' : 'No'}</td>
            <td>
              <i
                className="bi bi-pencil-square"
                style={{ fontSize: '1.3rem', cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target={'#' + idEditModal}
                onClick={()=>setEditData(products[key])}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ProductsTable.propTypes = {
  products: ProptTypes.array,
  setProducts: ProptTypes.func,
  idEditModal: ProptTypes.string,
  setEditData: ProptTypes.func,
};

export default ProductsTable;
