import React, { useState } from "react";

import Modal from "../components/Modal";

export default function Login() {
  const title = "Login";

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  function handleFormChange(e) {
    e.persist();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const formInputs = [
    {
      name: "username",
      type: "text",
      value: form.username,
      onChange: handleFormChange
    },
    {
      name: "password",
      type: "password",
      value: form.password,
      onChange: handleFormChange
    }
  ];

  function loginUser() {
    console.log(`Logging in ${form.username}...`);
  }

  return <Modal title={title} formInputs={formInputs} onSubmit={loginUser} />;
}
