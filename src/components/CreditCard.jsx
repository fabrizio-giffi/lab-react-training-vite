import React from "react";

function CreditCard(cardData) {
  const style = {
    backgroundColor: cardData.bgColor,
    color: cardData.color,
  };
  return (
    <div className="creditCard" style={style}>
      <p>{cardData.type}</p>
      <p className="cardNumber">{cardData.number}</p>
      <p>
        <span>
          Expires:{" "}
          {cardData.expirationMonth.toString().length === 1
            ? `0${cardData.expirationMonth}`
            : cardData.expirationMonth}
          /{cardData.expirationYear}
        </span>
        <span className="bankSpan">{cardData.bank}</span>
      </p>
      <p>{cardData.owner}</p>
    </div>
  );
}

export default CreditCard;
