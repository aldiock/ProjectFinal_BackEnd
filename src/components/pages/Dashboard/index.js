import React from "react";
import PanelButtonDashboard from "../../molecules/PanelButtonDashboard";
import bg from "../../atom/bg/bg.jpg";

const Dashboard = () => {
  return (
    <>
      <div class="container-sm">
        <h4 class="text-center">
          <br />
          <br />
          <br />
          <br />
          SELAMAT DATANG DI E-SENSUS JEMAAT KOLOM 2
        </h4>
        <h5 className="text-center">GMIM "GENESARET PATETEN"</h5>
        <h6 className="text-center">WILAYAH BITUNG XII</h6>
        <br />
        <hr />
        {/* <div className="col-md-2">
          <CustomButton
            className="btn btn-primary"
            labelButton="Daftar sebagai Pelsus"
            onClick={handleSubmit}
          />
        </div> */}
        <div className="container-sm">
          <PanelButtonDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
