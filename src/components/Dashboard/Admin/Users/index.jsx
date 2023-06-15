import { useContext, useEffect, useState } from 'react';
import Table from '../../../Table';
import { AppContext } from '../../../../contexts/AppContext';

const Users = () => {
  const { getUsers } = useContext(AppContext);
  const [clients, setclients] = useState([])
  const [users, setUsers] = useState([])
  const headClient = [
    { label: 'Correo', key: 'email' },
  ];
  const headUser = [
    { label: 'Usuario', key: 'user' },
  ];

  useEffect(() => {
    getUsers().then(res =>{
      setUsers(res.data.users)
      setclients(res.data.clients)
    }).catch(e => console.log(e))
  }, []);

  return (
    <div>
      <h1 className="display-4">Lista de usuarios</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <h5>Apicultores</h5>
          <Table bodyData={users} head={headUser} />
        </div>
        <div className="col-12 col-md-6">
          <h5 className="mt-5 mt-md-0">Clientes</h5>
          <Table bodyData={clients} head={headClient} />
        </div>
      </div>
    </div>
  );
};

export default Users;
