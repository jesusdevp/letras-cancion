import React from "react";
import PropTypes from "prop-types";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {
    strArtist,
    strArtistThumb,
    strGenre,
    strCountry,
    intFormedYear,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = info;

  return (
    <div className="card border-ligth">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información Artista
      </div>
      <div className="card-body">
        <h2 className="card-text">{strArtist} </h2>
        <img src={strArtistThumb} alt="img artista" />
        <p className="card-text">
          <strong>Origen:</strong> {strCountry} ({intFormedYear})
        </p>

        <p className="card-text">
          {" "}
          <strong>Género:</strong> {strGenre}
        </p>
        <h2 className="card-text">Biografía: </h2>
        <p className="card-text">{strBiographyES} </p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Info;
