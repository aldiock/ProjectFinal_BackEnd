import React, { useState, useEffect } from "react";
import CustomButton from "../../atom/Button";
import InputText from "../../atom/InputText";
import NavBar from "../../molecules/NavigationBar";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
  };
  return (
    <div class="container-sm mb-4">
      <NavBar />
      <br />
      <h3 class="text-center">Login Page Pelayan Khusus</h3>
      <div class="container-fluid">
        <p>Email</p>
        <InputText
          class="form-control"
          placeholder="Masukkan email anda"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <p>Password</p>
        <InputText
          class="form-control"
          placeholder="Masukkan password anda"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <CustomButton
          onClick={handleSubmit}
          labelButton="Login"
          className="btn btn-secondary"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
