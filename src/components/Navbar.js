import React from "react";
import logo from "../assets/images/whole.svg";
import searchIcon from "../assets/images/baseline-search-24px.svg";
import arrowDown from "../assets/images/baseline-arrow_drop_down-24px.svg";
import rectangle from "../assets/images/Rectangle.svg";
import oval from "../assets/images/Oval.svg";
import triangle from "../assets/images/Path.svg";

export default function Navbar() {
  return (
    <div className="row  nav-container  ">
      <div className="col logo align-self-center d-none d-lg-block">
        <img src={logo} alt="logo" />
      </div>

      <div className="col align-self-center search-container d-none d-lg-block">
        <img src={searchIcon} alt="search-icon" className="align-self-center" />
        <input placeholder="Search for your favorite groups in ATG"></input>
      </div>

      <div className="col align-self-center create-account d-none d-lg-block">
        <span>Create Account.</span>
        <span className="blue">It's free!</span>
        <img src={arrowDown} alt="down-arrow" />
      </div>

      <div className="d-block d-lg-none">
        <div class="row justify-content-end mobile-nav ">
          <div class="col-auto">
            <div class="box">
              <img src={rectangle} alt="rectangle" />
            </div>
          </div>
          <div class="col-auto">
            <div class="box">
              <img src={oval} alt="oval" />
            </div>
          </div>
          <div class="col-auto">
            <div class="box">
              <img src={triangle} alt="triangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
