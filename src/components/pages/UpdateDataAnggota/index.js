import React, { useState, useEffect } from "react";
import CustomButton from "../../atom/Button";
import NavBar from "../../molecules/NavigationBar";
import PanelButton from "../../molecules/PanelButton";
import InputText from "../../atom/InputText";
import firebase from "../../../Config/firebase";

const UpdateDataAnggota = () => {
  const [nik, setNIK] = useState("");
  const [namaJemaat, setNamaJemaat] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [statusKawin, setStatusKawin] = useState("");

  const [selectedJemaat, setSelectedJemaat] = useState({});
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

  const onSubmit = () => {
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
    firebase.database().ref(`jemaat/${selectedJemaat.id}`).set(data);
  };

  const onUpdateData = (item) => {
    setNIK(item.nik);
    setNamaJemaat(item.namaJemaat);
    setTempatLahir(item.tempatLahir);
    setTanggalLahir(item.tanggalLahir);
    setPendidikan(item.pendidikan);
    setPekerjaan(item.pekerjaan);
    setStatusKawin(item.statusKawin);
    setJenisKelamin(item.jenisKelamin);
    setSelectedJemaat(item);
  };

  const onDeleteData = (item) => {
    firebase.database().ref(`jemaat/${item.id}`).remove();
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
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
                  placeholder="Masukkan Nama Jemaat"
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
          onClick={onSubmit}
        />
        <hr />
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
              <th className="text-center">ACTION EDIT</th>
              <th className="text-center">ACTION DELETE</th>
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
                <td>
                  <div className="text-center">
                    <CustomButton
                      className="btn btn-success"
                      labelButton="Edit"
                      onClick={() => onUpdateData(item)}
                    />
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <CustomButton
                      className="btn btn-danger"
                      labelButton="Delete"
                      onClick={() => onDeleteData(item)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpdateDataAnggota;
