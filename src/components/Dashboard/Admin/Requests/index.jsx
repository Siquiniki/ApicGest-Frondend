import { useContext } from 'react';
import { useEffect } from 'react';
import { AppContext } from '../../../../contexts/AppContext';
import Table from '../../../Table';

const Requests = () => {
  const head = [
    { label: 'Nombre', key: 'nameApplic' },
    { label: 'Apellidos', key: 'lastNameApplic' },
    { label: 'Correo', key: 'emailApplic' },
    { label: 'Teléfono', key: 'telefApplic' },
    { label: 'CI', key: 'ciApplic' },
  ];
  const { getRequests, requests } = useContext(AppContext);

  //   certificApplic
  // ciApplic
  // direction
  // emailApplic
  // idUser
  // lastNameApplic
  // munApplic
  // nameApplic
  // provApplic
  // rol
  // state
  // telefApplic

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div>
      <h1 className="display-4">Solicitudes para apicultor</h1>
      <div>{requests && <Table head={head} bodyData={requests} />}</div>
    </div>
  );
};

export default Requests;
