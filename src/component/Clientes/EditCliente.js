import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const EditCliente = () => {
    let navigate = useNavigate();

    const { id } = useParams();

    const [cliente, setCliente] = useState({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      fechaRegistro: "",
    });
    const { nombre, apellido, correo, telefono, fechaRegistro } = cliente;

    useEffect(() => {
      obtenerCliente();
    }, []);

    const obtenerCliente = async () => {
      const res = await axios.get(`http://localhost:8092/api/v1/cliente/${id}`);
      const fechaRegistro = new Date(res.data.object.fechaRegistro).toISOString().split('T')[0];
      setCliente({
        ...res.data.object,
        fechaRegistro: fechaRegistro,
      });
    };

    const handleInputChange = (e) => {
      setCliente({
        ...cliente,
        [e.target.name]: e.target.value,
      });
    };

    const updateCliente = async (e) => {
        e.preventDefault();
        await axios.put(
            `http://localhost:8092/api/v1/cliente/${id}`, cliente);
        navigate('/view-clients');
    };


  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="col-sm-8 py-2 px-5 shadow">
    <h2 className='text-center mb-5'>Edit Client</h2>
      <form onSubmit={(e)=> updateCliente(e)}>
        <div className="input-group mb-5">
          <label htmlFor="nombre" className="input-group-text">
            Name
          </label>
          <input type="text" 
          className="form-control col-sm-6" 
          id="nombre" 
          name='nombre'
          required
          value={nombre}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="input-group mb-5">
          <label htmlFor="apellido" className="input-group-text">
            Last Name
          </label>
          <input type="text" 
          className="form-control col-sm-6" 
          id="apellido" 
          name='apellido'
          required
          value={apellido}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="input-group mb-5">
          <label htmlFor="correo" className="input-group-text">
            Email
          </label>
          <input type="email" 
          className="form-control col-sm-6" 
          id="correo" 
          name='correo'
          required
          value={correo}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="input-group mb-5">
          <label htmlFor="telefono" className="input-group-text">
            Phone
          </label>
          <input type="text"
            className="form-control col-sm-6"
            id="telefono"
            name='telefono'
            required
            value={telefono}
            onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="input-group mb-5">
          <label htmlFor="fechaRegistro" className="input-group-text">
            Date
          </label>
          <input type="date" 
          className="form-control col-sm-6" 
          id="fechaRegistro" 
          name='fechaRegistro'
          required
          value={cliente.fechaRegistro || ''}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className='row mb-5'>
        <div className='col-sm-2'>
            <button type="submit" 
            className='btn btn-outline-success btn-lg'>
                Save
            </button>
        </div>
        <div className='col-sm-2'>
            <Link to={"/view-clients"}
            type="submit" 
            className='btn btn-outline-warning btn-lg'>
                Cancel
            </Link>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditCliente
