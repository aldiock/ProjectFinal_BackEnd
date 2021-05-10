import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../Config/firebase";
import InputText from "../../atom/InputText";
import CustomButton from "../../atom/Button";
import NavBarDashboard from "../../molecules/NavBarDashboard";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [namePelsus, setNamePelsus] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      namePelsus: namePelsus,
    };

    //save to realtime
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("pelsus/" + userId)
          .set(data);

        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let history = useHistory();

  return (
    <>
    <div>
        <NavBarDashboard/>
    </div>
    <div class="container-sm mb-4">
      <br />
      <br />
      <h3 class="text-center">Daftar Akun E-SENSUS Jemaat Kolom 2</h3>
      <div class="container-fluid">
        <p>Nama Lengkap</p>
        <InputText
          class="form-control"
          placeholder="Masukkan nama lengkap anda"
          value={namePelsus}
          onChange={(event) => setNamePelsus(event.target.value)}
        />
        <br />
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
          labelButton="Daftar"
          className="btn btn-success"
        />
      </div>
      <br />
      <br />
    </div>
    </>
  );
};

export default SignUp;
