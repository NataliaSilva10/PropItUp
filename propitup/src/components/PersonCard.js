
///rafce

import React from "react";
import SecondComponent from "./SecondComponent";

const PersonCard = (props) => {
  //props are passes in as object
  const { firstName, lastName, hair } = props;

  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {hair}</p>
      <SecondComponent/>
    </div>
  );
}

export default PersonCard;