import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const ClientesView = () => {

const [clientes, setClientes] = useState([]);
const [search, setSearch] = useState("");

    useEffect(() => {
        obtenerClientes();
    }, []);

const obtenerClientes = async () => {
    const res = await axios.get(
        'http://localhost:8092/api/v1/clientes', {
            validateStatus: (status) => {
                return true;
            }
        });
    if (res.status === 200) {
        setClientes(res.data.object);
    }
  };

const deleteCliente = async (id) => {
    await axios.delete(
        `http://localhost:8092/api/v1/cliente/${id}`);
    obtenerClientes();
  };

  return (
    <section className='m-5'>
    <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow ">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>FechaRegistro</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {clientes
          .filter((cliente)=>
          cliente.nombre
              .toLowerCase()
              .includes(search.toLowerCase()))
            .map((cliente, index) => (
              <tr key={cliente.idCliente}>
                <th scope="row">{index + 1}</th>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.fechaRegistro}</td>
                <td className="mx-2">
                  <Link
                    to={`/cliente-perfil/${cliente.idCliente}`}
                    className="btn btn-info">
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-cliente/${cliente.idCliente}`}
                    className="btn btn-warning">
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button className="btn btn-danger"
                  onClick={()=> deleteCliente(cliente.idCliente)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default ClientesView
