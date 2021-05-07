import React from "react";
import NavBar from "../../molecules/NavigationBar";
import PanelButton from "../../molecules/PanelButton";

const DataJiwaAnggotaKolom = () => {
  return (
    <div className="container-sm">
      <NavBar />
      <h3 className="text-center">Data Jiwa Anggota Kolom</h3>
      <hr />
      <PanelButton />
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>NIK</th>
            <th>Nama Anggota Kolom</th>
            <th>L/P</th>
            <th>Usia</th>
            <th>Pendidikan</th>
            <th>Pekerjaan</th>
            <th>Status Kawin</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DataJiwaAnggotaKolom;
