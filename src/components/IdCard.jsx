import React from "react";

function IdCard(userData) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const birthDate = userData.birth
    .toLocaleDateString("en-US", options)
    .replace(",", "");
  return (
    <>
      <div className="profile">
        <img src={userData.picture} alt="Profile"></img>
        <div className="userinfo">
          <p>
            <strong>First name: </strong>
            {userData.firstName}
          </p>
          <p>
            <strong>Last name: </strong>
            {userData.lastName}
          </p>
          <p>
            <strong>Gender: </strong>
            {userData.gender}
          </p>
          <p>
            <strong>Height: </strong>
            {userData.height}
          </p>
          <p>
            <strong>Birth: </strong>
            {birthDate}
          </p>
        </div>
      </div>
    </>
  );
}

export default IdCard;
