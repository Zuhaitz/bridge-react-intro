import React from "react";

const Person = ({ name, surname, age }) => {
  return (
    <div>
      <h1>
        Hello {name} {surname}!
      </h1>
      {age ? <p>You have {age} years old!</p> : null}
    </div>
  );
};

export default Person;
