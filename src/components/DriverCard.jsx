import React from "react";
import Rating from "./Rating";

function DriverCard(driverData) {
  console.log(driverData);
  return (
    <div className="driverCard">
      <img className="driverPic" src={driverData.img} alt="Driver"></img>
      <div>
        <h3>{driverData.name}</h3>
        <Rating>{driverData.rating}</Rating>
        <p>{driverData.car.model} - {driverData.car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
