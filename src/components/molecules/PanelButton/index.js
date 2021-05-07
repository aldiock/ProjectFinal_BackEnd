import React from "react";
import CustomButton from "../../atom/Button";

const PanelButton = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-2">
            <CustomButton labelButton="Add Data" className="btn btn-primary" />
          </div>
          <div className="col-md-2">
            <CustomButton labelButton="View Data" className="btn btn-primary" />
          </div>
          <div className="col-md-2">
            <CustomButton labelButton="Edit Data" className="btn btn-success" />
          </div>
          <div className="col-md-2">
            <CustomButton
              labelButton="Delete Data"
              className="btn btn-danger"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PanelButton;
