import React, { useState, useEffect } from "react";
import NavBar from "../../molecules/NavigationBar";
import PanelButton from "../../molecules/PanelButton";
import firebase from "../../../Config/firebase";

const DataJiwaAnggotaKolom = () => {
  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("jemaat")
      .on("value", (res) => {
        if (res.val()) {
          //Ubah data jadi Array
          const rawData = res.val();
          const anggotaArr = [];
          Object.keys(rawData).map((item) => {
            anggotaArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setAnggota(anggotaArr);
        }
      });
    console.log(anggota);
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br/>
      <div className="container-sm">
        <h3 className="text-center">Data Jiwa Anggota Kolom</h3>
        <hr />
        <PanelButton />
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama Anggota Kolom</th>
              <th>L/P</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Pendidikan</th>
              <th>Pekerjaan</th>
              <th>Status Kawin</th>
            </tr>
          </thead>
          <tbody>
            {anggota.map((item) => (
              <tr key={item.id}>
                <td>{item.nik}</td>
                <td>{item.namaJemaat}</td>
                <td>{item.jenisKelamin}</td>
                <td>{item.tempatLahir}</td>
                <td>{item.tanggalLahir}</td>
                <td>{item.pendidikan}</td>
                <td>{item.pekerjaan}</td>
                <td>{item.statusKawin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataJiwaAnggotaKolom;
