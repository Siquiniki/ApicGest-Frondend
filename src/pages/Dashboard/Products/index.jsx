import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import ProductsTable from '../../../components/Dashboard/Beekeeper/Products/ProductsTable';
import Modal from '../../../components/Modal';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

const Products = () => {
  const {
    products: BackendProducts,
    getProducts,
    addProduct,
    setInfo,
    setProducts: BackendsetProducts,
    deleteProducts,
    editProduct
  } = useContext(AppContext);
  const idAddModal = 'addModal';
  const idDeleteModal = 'deleteModal';
  const idEditModal = 'editModal';
  const [products, setProducts] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (BackendProducts) {
      const newData = [...BackendProducts];
      newData.forEach((item) => {
        item.checked = false;
      });

      setProducts(newData);
    }
  }, [BackendProducts]);

  const handleAdd = (params) => {
    addProduct(params)
      .then((res) => {
        BackendsetProducts(res.data)
        setInfo({ type: 'success', msg: 'Producto agregado con éxito'})
      })
      .catch((e) => setInfo({ type: 'danger', msg: e.message }));
  };

  const handleDelete = () => {
    const dataToDelete = [];
    products.forEach((item) => {
      if (item.checked) dataToDelete.push(item.idProd);
    });
    deleteProducts(dataToDelete)
    .then(() => {
      getProducts()
      setInfo({ type: 'success', msg: 'Información eliminada con éxito'})
    })
      .catch((e) => setInfo({ type: 'danger', msg: e.message }));
  };
  
  const handleEdit = (params) => {
    editProduct(params)
    .then((res) => {
      console.log(res);
      setInfo({ type: 'success', msg: 'Información eliminada con éxito'})
    })
      .catch((e) => setInfo({ type: 'danger', msg: e.message }));
  };

  return (
    <div>
      <>
        <div className="d-flex justify-content-between">
          <h2>Productos</h2>
          <div>
            <button
              className="btn btn-warning bg_secondary text-white me-2"
              data-bs-toggle="modal"
              data-bs-target={'#' + idAddModal}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
            <button
              className={`btn btn-danger ${
                products && products.filter((item) => item.checked).length === 0 && 'disabled'
              }`}
              data-bs-toggle="modal"
              data-bs-target={'#' + idDeleteModal}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
        <div className="table-responsive small">
          {products && (
            <ProductsTable products={products} setProducts={setProducts} setEditData={setEditData} idEditModal={idEditModal}/>
          )}
        </div>
      </>

      <Modal idModal={idAddModal} title={'Añadir producto'} >
        <AddProductForm handleAdd={handleAdd} />
      </Modal>

      <Modal
        idModal={idDeleteModal}
        title={'Borrar'}
        actionButtonTitle={'Borrar'}
        action={handleDelete}
      >
        <div className="text-danger">
          ¿Desea borrar la información seleccionada?
        </div>
      </Modal>
      
      <Modal
        idModal={idEditModal}
        title={'Editar'}
      >
        <EditProductForm data={editData} handleEdit={handleEdit}/>
      </Modal>
    </div>
  );
};

export default Products;
