import React from "react";
import downArrow from "../assets/images/baseline-arrow_drop_down-24px.svg";
import group from "../assets/images/baseline-group_add-24px.svg";
import backArrow from "../assets/images/arrow_back.svg";

export default function Section() {
  return (
    <div className="d-flex justify-content-between border-bottom sectionContainer">
      <div className="d-none d-lg-block left ">
        <span>All Posts(32)</span>
        <span>Article</span>
        <span>Event</span>
        <span>Education</span>
        <span>Job</span>
      </div>

      <div className="right d-none d-lg-block">
        <button type="button" class="btn btn-color btn-sm">
          Write a post
          <img src={downArrow} alt="down-arrow" />
        </button>
        <button type="button" class="btn btn-primary btn-sm">
          <img src={group} alt="group-icon" />
          Join Group
        </button>
      </div>

      <div className="d-block d-lg-none mobileSection">
        <img src={backArrow} alt="" className="backarrow" />
        <button type="button" class="btn btn-outline-light btn-sm">
          Join Group
        </button>
        <div className="filterandpost">
          <div className="postMobile">Posts(368)</div>
          <button type="button" class="btn btn-color btn-sm filter">
            Filter: All
            <img src={downArrow} alt="down-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
