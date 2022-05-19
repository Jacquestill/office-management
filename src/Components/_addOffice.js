import React, { useState } from "react";
import leftArrow from "./../img/arrow-left.png";
import plus from "./../img/Plus.png";
// import { CirclePicker } from "react-color";
import _ from "lodash";

function AddOffice(props) {
  // State to controlle the popup for adding a new office
  const [isActive, setActive] = useState("false");

  let hex;

  // State used to capture the data to add it to the office list
  const [office, setOffice] = useState({
    title: "",
    phone: "",
    email: "",
    capacity: "",
    address: "",
    border: "",
  });

  function handleColor(event) {
    event.preventDefault();
    office.border = +event.target.value;
  }

  // Handeling the changes on the add office popup
  function handleChange(event) {
    const { name, value } = event.target;

    setOffice((prevOffice) => {
      return {
        ...prevOffice,
        [name]: value,
      };
    });
  }

  // Submitting the information entered by the user to add the new office card
  function submitOffice(event) {
    props.onAdd(office);
    setOffice({
      title: "",
      phone: "",
      email: "",
      capacity: "",
      address: "",
      border: "",
    });
    event.preventDefault();
  }

  // Toggle Add office window
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`office-section office-section${isActive ? "" : "-visible"}`}
    >
      <div className="office">
        <button onClick={handleToggle}>
          <img src={plus} alt="plus-btn" className="btn btn-plus"></img>
        </button>

        <button onClick={handleToggle} className="btn btn-office-close">
          <img src={leftArrow} alt="close-img"></img>
        </button>

        <h3 className="office-heading u-margin-bottom-medium">New Office</h3>

        <form className="office-form">
          <input
            name="title"
            onChange={handleChange}
            value={office.title}
            placeholder="Office Name"
            className="office-form-input"
          ></input>

          <input
            name="address"
            onChange={handleChange}
            value={office.address}
            placeholder="Physical Address"
            className="office-form-input"
          ></input>

          <input
            name="email"
            onChange={handleChange}
            value={office.email}
            placeholder="Email Address"
            className="office-form-input"
          ></input>

          <input
            name="phone"
            onChange={handleChange}
            value={office.phone}
            placeholder="Phone Number"
            className="office-form-input"
          ></input>

          <input
            name="capacity"
            onChange={handleChange}
            value={office.capacity}
            placeholder="Maximum Capacity"
            className="office-form-input"
          ></input>

          <h2 className="office-form-text">Office Colour</h2>

          <div className="flex-container u-margin-bottom-medium">
            {_.times(11, (i) => (
              <button
                key={i}
                name="border"
                value={i + 1}
                className={`office-form-color office-form-color-${i + 1}`}
                onClick={handleColor}
              ></button>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              submitOffice(e);
              handleToggle();
            }}
            className="btn btn-office-add"
          >
            Add Office
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOffice;

{
  /* <CirclePicker
              width={370}
              circleSize={35}
              circleSpacing={25}
              colors={[
                "#ffbe0b",
                "#ff9b71",
                "#fc5607",
                "#97512c",
                "#dbbadd",
                "#ff006e",
                "#aaf0d1",
                "#01b503",
                "#499dda",
                "#0072e8",
                "#8338eb",
              ]}
              color={hex}
              onChangeComplete={handleColor}
            /> */
}
