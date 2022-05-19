import React from "react";

// Render all the information on the expanding card section
function CardInfo(props) {
  return (
    <div className="u-margin-bottom-small">
      <p className="card-text card-text-expand">
        <img src={props.img} alt="icon-img" className="card-text-img"></img>
        <span>{props.info}</span>
      </p>
    </div>
  );
}

export default CardInfo;
