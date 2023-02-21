import React from "react";

function Greetings(greetings) {
  let greetUser = "";
  switch (greetings.lang) {
    case "en":
      greetUser = "Hello";
      break;
    case "de":
      greetUser = "Hallo";
      break;
    case "fr":
      greetUser = "Bonjour";
      break;
    case "it":
      greetUser = "Ciao";
      break;
    case "pt":
      greetUser = "Bom dia";
      break;
    case "es":
      greetUser = "Buenos dias";
      break;
    default:
      greetUser = "Welcome";
      break;
  }
  return (
    <>
      <h3 className="headGreet">
        {greetUser} {greetings.children}
      </h3>
    </>
  );
}

export default Greetings;
