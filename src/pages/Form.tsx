import { useState } from "react";

const Form = ({ id, setId }) => {
  const sendRequest = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    setId(event.target[0].value);
    console.log(id);
  };
  return (
    <div>
      <form onSubmit={sendRequest}>
        <input type="number"></input>
        <button type="submit">Send a request</button>
      </form>
    </div>
  );
};

export default Form;
