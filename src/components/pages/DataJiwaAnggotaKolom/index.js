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
      <br />
      <div className="container-sm">
        <h3 className="text-center">Data Jiwa Anggota Kolom</h3>
        <hr />
        <PanelButton />
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">NIK</th>
              <th className="text-center">Nama Anggota Kolom</th>
              <th className="text-center">L/P</th>
              <th className="text-center">Tempat Lahir</th>
              <th className="text-center">Tanggal Lahir</th>
              <th className="text-center">Pendidikan</th>
              <th className="text-center">Pekerjaan</th>
              <th className="text-center">Status Kawin</th>
            </tr>
          </thead>
          <tbody>
            {anggota.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.nik}</td>
                <td className="text-center">{item.namaJemaat}</td>
                <td className="text-center">{item.jenisKelamin}</td>
                <td className="text-center">{item.tempatLahir}</td>
                <td className="text-center">{item.tanggalLahir}</td>
                <td className="text-center">{item.pendidikan}</td>
                <td className="text-center">{item.pekerjaan}</td>
                <td className="text-center">{item.statusKawin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataJiwaAnggotaKolom;
