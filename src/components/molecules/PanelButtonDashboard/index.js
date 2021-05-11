import React from "react";

const PanelButtonDashboard = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-5">
            <a
              href="/signup"
              class="btn btn-primary "
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Daftar sebagai Pelsus
            </a>
          </div>
          <div className="col-md-5">
            <a
              href="/login"
              class="btn btn-secondary"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Login sebagai Pelsus
            </a>
          </div>
          <div className="col-md-2">
            <a
              href="/jemaat"
              class="btn btn-success"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              View sebagai Jemaat
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PanelButtonDashboard;
