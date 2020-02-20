import React, { useState } from "react";

function Searchbarre(props) {
  return (
    <>
      <div className="wrapper searchbarre">
        <input
          className="searchname"
          placeholder="Que recherchez vous?"
          value={props.search}
          onChange={event => {
            const value = event.target.value;
            props.setSearch(value);
          }}
        />
        <button className="button-searchname">Valider</button>
      </div>
    </>
  );
}

export default Searchbarre;
