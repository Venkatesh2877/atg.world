import React from "react";
import logo from "../assets/images/whole.svg";
import searchIcon from "../assets/images/baseline-search-24px.svg";
import arrowDown from "../assets/images/baseline-arrow_drop_down-24px.svg";

export default function Navbar() {
  return (
    <div className="row  nav-container ">
      <div className="col logo align-self-center">
        <img src={logo} alt="logo" />
      </div>

      <div className="col align-self-center search-container ">
        <img src={searchIcon} alt="search-icon" className="align-self-center" />
        <input placeholder="Search for your favorite groups in ATG"></input>
      </div>

      <div className="col align-self-center create-account">
        <span>Create Account.</span>
        <span className="blue">It's free!</span>
        <img src={arrowDown} alt="down-arrow" />
      </div>
    </div>
  );
}
