import React from "react";

function Card({ elem }) {
  return (
    <>
      <div className="comic-card">
        <div className="comic-card-picture">
          <img
            src={elem.thumbnail.path + "." + elem.thumbnail.extension}
            alt="Comic picture"
          ></img>
        </div>
        <div className="comic-name-desc">
          <h4 className="comic-name"> {elem.name}</h4>
          <p className="comic-desc">{elem.description}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
