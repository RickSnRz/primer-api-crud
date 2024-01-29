import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddClientes = () => {

    let navigate = useNavigate();

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        fechaRegistro: ''
    });
    const { nombre, apellido, correo, telefono, fechaRegistro } = cliente;

    const handleInputChange = (e) => {
       setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const saveCliente = async (e) => {
        e.preventDefault();
        await axios.post(
            'http://localhost:8092/api/v1/cliente', cliente);
        navigate('/view-clients');
    };


  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="contanier col-sm-8 py-2 px-5 shadow ">
    <h2 className='text-center mb-5'>Add new client</h2>
      <form onSubmit={(e)=> saveCliente(e)}>
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
            onChange={(e) => handleInputChange(e)} />
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
          value={fechaRegistro}
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

export default AddClientes
