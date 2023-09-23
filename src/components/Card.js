import React from "react";
import dot from "../assets/images/Group 3.png";
import share from "../assets/images/baseline-share-24px.png";
import vib from "../assets/images/visibility_24px_outlined.svg";

export default function Card(props) {
  const data = props.d;
  return (
    <div>
      <div className="card">
        <img className="" src={data.headerImage} alt="Cardimagecap" />
        <img className="typeImage" src={data.typeImage} alt="typeImage" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{props.d.heading}</h5>
            <img src={dot} className="dot" alt="dot" />
          </div>

          <p className="card-text">{props.d.content}</p>

          <div className="d-flex justify-content-between">
            <div className="profile">
              <img src={data.profilePic} alt="profilePic" />
              <span>{data.name}</span>
            </div>
            <div>
              <span className="views">
                <img src={vib} alt="vib" />
                <span>1.4k views</span>
              </span>
              <span>
                <button className="btn btn-color share">
                  <img src={share} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
