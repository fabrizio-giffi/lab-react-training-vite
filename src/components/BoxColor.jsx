import React from "react";

const rgbToHex = (x) => {
  const hex = x.toString(16);
  return hex === "0" ? "00" : hex;
};

function BoxColor(props) {
    const hexComplete = `#${rgbToHex(props.r)}${rgbToHex(props.g)}${rgbToHex(props.b)}`;
    const style = {
        backgroundColor: hexComplete,
    }
  return (
    <>
    <button style={style}>
    <p>rgb({props.r},{props.g},{props.b})</p>
      <p>{hexComplete}</p>
    </button>
    </>
  );
}

export default BoxColor;
