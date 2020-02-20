import React from "react";

function Comic({ elem }) {
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
          <h2 className="comic-name"> {elem.title}</h2>
          <p className="comic-desc">{elem.description}</p>
        </div>
      </div>
    </>
  );
}
export default Comic;
