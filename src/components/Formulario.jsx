import React, { useState } from "react";

const Formulario = () => {
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

    if (artista.trim === "" || artista.trim === "") {
      guardarError(true);
    }
    guardarError(false);
  };

  return (
    <div className="bg-info">
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
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
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

export default Formulario;
