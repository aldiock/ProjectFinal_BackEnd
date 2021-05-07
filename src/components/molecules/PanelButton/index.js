import React from "react";

const PanelButton = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-2">
            <a
              href="/adddataanggota"
              class="btn btn-primary "
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Add Anggota
            </a>
          </div>
          <div className="col-md-2">
            <a
              href="/datajiwaanggotakolom"
              class="btn btn-secondary"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              View Data Anggota
            </a>
          </div>
          <div className="col-md-2">
            <a
              href="/updatedataanggota"
              class="btn btn-success "
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Edit Data Anggota
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PanelButton;
