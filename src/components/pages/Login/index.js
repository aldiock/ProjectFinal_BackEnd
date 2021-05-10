import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomButton from "../../atom/Button";
import InputText from "../../atom/InputText";
import firebase from "../../../Config/firebase";
import NavBarDashboard from "../../molecules/NavBarDashboard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => history.push("/pelsuspage"))
      .catch((err) => console.log(err));
  };

  let history = useHistory();

  return (
    <>
      <div>
        <NavBarDashboard />
      </div>
      <div class="container-sm mb-4">
        <br />
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
          <br />
          <CustomButton
            onClick={handleSubmit}
            labelButton="Login"
            className="btn btn-primary"
          />
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Login;
