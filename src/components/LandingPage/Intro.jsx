import Lottie from 'react-lottie';
import lottieBee from '../../assets/lotties/66723-bee-lieve.json';

import { Link } from 'react-router-dom';
import routesName from '../../constants/routesName';

const Intro = () => {
  return (
    <div>
      {
        <div className="p-5 mb-4 bg_secondary text-white rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 text_primary fw-bold">
              Encuentra productos de abejas naturales y orgánicos
            </h1>
            <p className="col-md-12 fs-4">
              ¡Bienvenidos a nuestra plataforma en línea para pequeños
              apicultores! Somos una comunidad dedicada a reunir a los pequeños
              productores de miel y otros productos de abejas de todo el país en
              un solo sitio digital y puedan gestionar sus ventas y ofrecer sus
              productos de manera sencilla y efectiva. Te invitamos a unirte a
              nuestra comunidad y a descubrir los beneficios de los productos de
              abejas en tu vida diaria. ¡Gracias por apoyar a nuestros pequeños
              productores!
            </p>
            <Link to={routesName.auth.signUp}>
              <button className="btn btn-warning bg_primary btn-lg" type="button">
                Solicitar incorporación
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Intro;
