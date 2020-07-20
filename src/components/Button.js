import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button style={{ margin: "0 2px" }} onClick={onClick}>
      {title}
    </button>
  );
}
