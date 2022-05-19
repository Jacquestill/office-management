import "./sass/main.scss";
import React, { useState } from "react";
import Heading from "./Components/_header";
import Card from "./Components/_card";
import AddOffice from "./Components/_addOffice";

function App() {
  const [offices, setOffices] = useState([
    {
      title: "Specno",
      phone: "082 364 9864",
      email: "info@specno.com",
      capacity: "25",
      address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
      border: "9",
    },
  ]);

  function addOffice(newOffice) {
    setOffices((prevOffices) => {
      return [...prevOffices, newOffice];
    });
  }

  return (
    <div className="App">
      <header>
        <Heading />
        {offices.map((officeItem, index) => {
          return (
            <Card
              key={index}
              title={officeItem.title}
              phone={officeItem.phone}
              email={officeItem.email}
              capacity={officeItem.capacity}
              location={officeItem.address}
              border={officeItem.border}
            />
          );
        })}
      </header>
      <AddOffice onAdd={addOffice} />
    </div>
  );
}

export default App;
