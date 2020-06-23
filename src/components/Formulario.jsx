import React, { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({ guardarBusquedaLetra, guardarCargando }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  //Funcion a los input para leer el contenido
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //consultar las apis
  const buscarInformacion = (e) => {
    e.preventDefault();

    guardarCargando(true);

    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //pasar state al compoente principal
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-gruop">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-gruop">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right mt-4"
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarBusquedaLetra: PropTypes.func.isRequired,
};

export default Formulario;
