import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = info;

  return (
    <div className="card border-ligth">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="img artista" />
        <p className="card-text">Genero: {strGenre}</p>
        <h2 className="card-text">Biografia: </h2>
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

export default Info;
