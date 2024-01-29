import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


const ClientePofile = () => {
  const { id } = useParams();

  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    fechaRegistro: "",
  });

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

  return (
    <section className="shadow m-5" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${cliente.nombre} ${cliente.apellido}`}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Call
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning ms-1">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Nombre</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{cliente.nombre}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Apellido</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{cliente.apellido}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{cliente.correo}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Telefono</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{cliente.telefono}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Fecha Registro</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{cliente.fechaRegistro}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientePofile
