import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import axios from "axios";

function App() {
  //state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});
  const [cargando, guardarCargando] = useState(false);
  const [error, guardarError] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarAPI = async () => {
      const { artista, cancion } = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      try {
        const [
          {
            data: { lyrics },
          },
          {
            data: { artists },
          },
        ] = await Promise.all([axios.get(url), axios.get(url2)]);

        guardarError(false);
        guardarCargando(false);

        guardarLetra(lyrics);
        guardarInfo(artists[0]);
      } catch (error) {
        guardarError(true);
        guardarCargando(false);
      }
    };

    consultarAPI();
  }, [busquedaletra, info]);

  return (
    <Fragment>
      <Formulario
        guardarCargando={guardarCargando}
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {cargando ? null : error ? (
            <Error message="Artista o cancion no encontrado, Intente de nuevo" />
          ) : null}
        </div>

        <div className="row">
          {cargando ? (
            <Spinner />
          ) : !error ? (
            <Fragment>
              <div className="col-md-6">
                <Info info={info} />
              </div>
              <div className="col-md-6">
                <Cancion letra={letra} busquedaletra={busquedaletra} />
              </div>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
