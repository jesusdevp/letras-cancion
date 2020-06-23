import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => (
  <div className="alert alert-primary text-center">
    <p>{message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
