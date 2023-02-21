import React from "react";

function Random(props) {
  const randNum = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <>
      <span className="randSpan">
        Random value between {props.min} and {props.max} => {randNum}
      </span>
    </>
  );
}

export default Random;
