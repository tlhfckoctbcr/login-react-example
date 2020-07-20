import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

export default function Modal({ title, formInputs, onSubmit }) {
  const [showModal, setShowModal] = useState(true);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div
      style={{
        display: !showModal && "none",
        height: "300px",
        width: "300px",
        padding: "10px",
        textAlign: "center",
        border: "1px solid #CCC"
      }}
    >
      <h1>{title}</h1>
      {formInputs.map(input => {
        return (
          <Input
            name={input.name}
            type={input.type}
            key={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        );
      })}
      <br />
      <Button title="Submit" onClick={onSubmit} />
      <Button title="Cancel" onClick={closeModal} />
    </div>
  );
}
