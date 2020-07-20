import React from "react";

export default function Input({ name, type, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={{ margin: "4px 0" }}
    />
  );
}
