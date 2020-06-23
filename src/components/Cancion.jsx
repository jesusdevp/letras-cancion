import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Cancion = ({ letra, busquedaletra }) => {
  if (letra.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra canción</h2>
      <h3 className="mb-4">
        {" "}
        {busquedaletra.cancion.charAt(0).toUpperCase() +
          busquedaletra.cancion.slice(1)}{" "}
      </h3>
      <p className="letra"> {letra} </p>
    </Fragment>
  );
};

Cancion.propTypes = {
  letra: PropTypes.string.isRequired,
};

export default Cancion;
