import React, { useState } from "react";
import CardInfo from "./_cardInfo";
import people from "./../img/people.png";
import arrow from "./../img/Arrow.png";
import edit from "./../img/edit.png";
import phone from "./../img/Phone.png";
import email from "./../img/Email.png";
import group from "./../img/group.png";
import location from "./../img/location.png";

function Card(props) {
  // Toggle class function for expand more info block
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="section-card">
      <div
        // style={{ borderLeft: `10px solid ${props.border}` }}
        className={`card card-border-${props.border} u-margin-bottom-medium`}
        // className={`card u-margin-bottom-medium`}
      >
        <h2 className="card-sub-heading u-margin-bottom-small">
          {props.title}
        </h2>
        <p className="card-text u-margin-bottom-small">
          <img src={people} alt="people-img" className="card-text-img"></img>
          <strong>5</strong> Staff Members in Office
        </p>
        <button className="btn btn-card-arrow" onClick={handleToggle}>
          More info
          <img
            src={arrow}
            alt="arrow-img"
            className={`btn-card-arrow-img ${
              isActive ? "" : "btn-card-arrow-img-flip"
            }`}
          ></img>
        </button>
        <button className="btn btn-card-edit">
          <img src={edit} alt="edit-img"></img>
        </button>

        {/* Component for expanding information about the company data found inside _cardData.js */}
        <div className={isActive ? "card-expand-container" : ""}>
          <CardInfo info={props.phone} img={phone} />
          <CardInfo info={props.email} img={email} />
          <CardInfo info={props.capacity} img={group} />
          <CardInfo info={props.location} img={location} />
        </div>
      </div>
    </div>
  );
}

export default Card;
