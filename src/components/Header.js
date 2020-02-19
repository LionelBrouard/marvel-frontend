import React from "react";
import Logo from "../assets/images/logo.png";
import { Link, useHistory } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="total-width">
        <div className="wrapper">
          <div className="header">
            <img className="logo" src={Logo} alt="Logo Marvel"></img>
            <div className="menu-header">
              <Link to="/perso">
                <h3>PERSONNAGES</h3>
              </Link>
              <Link to="/comics">
                <h3>COMICS</h3>
              </Link>
              <Link to="/favoris">
                <h3>FAVORIS</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
