import React, { useState } from "react";
import firebase from "../../../Config/firebase";
import CustomButton from "../../atom/Button";
import { default as InputText } from "../../atom/InputText";
import NavBar from "../../molecules/NavigationBar";
import PanelButton from "../../molecules/PanelButton";

const AddDataAnggota = () => {
  const [nik, setNIK] = useState("");
  const [namaJemaat, setNamaJemaat] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [statusKawin, setStatusKawin] = useState("");

  const handleSubmit = () => {
    const data = {
      nik: nik,
      namaJemaat: namaJemaat,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      pekerjaan: pekerjaan,
      jenisKelamin: jenisKelamin,
      pendidikan: pendidikan,
      statusKawin: statusKawin,
    };
    firebase.database().ref("jemaat").push(data);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br/>
      <div className="container-sm">
        <h3 className="text-center">Data Jiwa Anggota Kolom</h3>
        <hr />
        <div className="text-center">
        <PanelButton />
        </div>
        <div class="container-md">
          <h5 class="text-left">Input Data</h5>
          <div>
            <tr>
              <th width="20%">NIK</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Masukkan NIK"
                  value={nik}
                  onChange={(event) => setNIK(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Nama Jemaat</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Masukkan Nama Anggota Jemaat"
                  value={namaJemaat}
                  onChange={(event) => setNamaJemaat(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Tempat Lahir</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Masukkan Tempat Lahir"
                  value={tempatLahir}
                  onChange={(event) => setTempatLahir(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Tanggal Lahir</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Masukkan Tanggal Lahir DD/MM/YYYY"
                  value={tanggalLahir}
                  onChange={(event) => setTanggalLahir(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Pekerjaan</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Masukkan Pekerjaan"
                  value={pekerjaan}
                  onChange={(event) => setPekerjaan(event.target.value)}
                />
              </td>
            </tr>
            <hr />
            <tr>
              <th width="20%">Jenis Kelamin</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="L / P"
                  value={jenisKelamin}
                  onChange={(event) => setJenisKelamin(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Pendidikan Terakhir</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Pendidikan Terakhir SD / SMP / SMA / D1 / D2 / D3 / D4 / S1 / S2 / S3"
                  value={pendidikan}
                  onChange={(event) => setPendidikan(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th width="20%">Status Kawin</th>
              <th width="10%"></th>
              <td>
                <InputText
                  class="form-control"
                  placeholder="Status Kawin / Belum Kawin / Cerai Mati / Cerai Hidup"
                  value={statusKawin}
                  onChange={(event) => setStatusKawin(event.target.value)}
                />
              </td>
            </tr>
            <br />
          </div>
        </div>
        <CustomButton
          labelButton="Simpan Data"
          className="btn btn-success"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default AddDataAnggota;
