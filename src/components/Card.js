import React from "react";
import { Link } from "react-router-dom";

function Card({ elem }) {
  return (
    <>
      <div className="perso-card">
        <div className="perso-card-picture">
          <img
            src={elem.thumbnail.path + "." + elem.thumbnail.extension}
            alt="Perso picture"
          ></img>
        </div>
        <div className="perso-name-desc">
          <h2 className="perso-name"> {elem.name}</h2>
          <p>{elem.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
