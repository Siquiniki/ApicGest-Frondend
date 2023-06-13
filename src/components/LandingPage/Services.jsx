import styled from 'styled-components';

const ListBullet = styled.ul`
  list-style: none;

  & li {
    display: flex;
    align-items: center;
  }

  & li::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #5784d7;
    border: 2px solid #8fb3f5;
    display: block;
    margin-right: 1rem;
  }
`;

const Services = () => {
  return (
    <div id="actions" className="mt-5">
      <h1 className="text-center mb-4">Servicios</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="card shadow mb-4 w-100">
              <div className="card-body py-5 px-3 px-md-4 ">
                <h4 className="mb-4 text-center">Apicultor</h4>
                {/* List with bullets */}
                <ListBullet>
                  <li className="mb-2">
                    Hacerse miembro de la Asociación de Apicultores.
                  </li>
                  <li className="mb-2">
                    Publicar y gestionar sus productos en oferta.
                  </li>
                  <li className="mb-2">
                    Informar a las autoridades sanitarias sobre problemas con
                    sus abejas.
                  </li>
                  <li className="mb-2">Llevar un control sobre sus ventas.</li>
                  <li className="mb-2">Atender los pedidos de sus clientes.</li>
                </ListBullet>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="card shadow mb-4 w-100">
              <div className="card-body py-5 px-3 px-md-4">
                <h4 className="mb-4 text-center">Cliente</h4>
                {/* List with bullets */}
                <ListBullet>
                  <li className="mb-2">
                    Tener acceso a todas las ofertas disponibles.
                  </li>
                  <li className="mb-2">Realizar pedidos.</li>
                  <li className="mb-2">
                    Agregar productos a su carrito de compras.
                  </li>
                </ListBullet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
