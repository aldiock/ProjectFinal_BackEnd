import React from "react";
import NavBarJemaat from "../../molecules/NavBarJemaat";

const About = () => {
  return (
    <>
      <div>
        <NavBarJemaat />
      </div>
      <br/>
      <div className="text-center"> 
        <h5>E-Sensus Jemaat Kolom 2 - GMIM GENESARET PATETEN</h5>
        <span class="badge bg-primary">Version 1.0.0</span>
        <span class="badge bg-danger">Alpha</span>
        <p>Simple reactjs web apps with firebase to manage anggota jemaat kolom 2</p>
      </div>
    </>
  );
};

export default About;
