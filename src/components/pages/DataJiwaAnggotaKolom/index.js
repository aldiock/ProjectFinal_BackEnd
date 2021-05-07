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

      {/* <div
        id="datatable-wrap"
        className="dataTables_wrapper form-inline dt-bootstrap no-footer"
      >
        <div className="container-sm">
          <div className="row">
            <div className="col-sm-6">
              <div className="dataTables_length" id="dataTable_lengt">
                <label>Show</label>
                <select
                  name="datatable_length"
                  aria-controls="datatable"
                  className="form-control input-sm"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  "entries"
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
