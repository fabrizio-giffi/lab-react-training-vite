import React from "react";

function Rating({children}) {
  const ratingRound = Math.round(children);
  let displayStar = "";
  switch (ratingRound) {
    case 0:
      displayStar = "☆☆☆☆☆";
      break;
    case 1:
      displayStar = "★☆☆☆☆";
      break;
    case 2:
      displayStar = "★★☆☆☆";
      break;
    case 3:
      displayStar = "★★★☆☆";
      break;
    case 4:
      displayStar = "★★★★☆";
      break;
    case 5:
      displayStar = "★★★★";
      break;
    default:
      break;
  }
  return <div>{displayStar}</div>;
}

export default Rating;
