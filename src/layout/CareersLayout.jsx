import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers_layout">
      <h1>Careers</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professo
      </p>

      <Outlet/>
    </div>
  );
};

export default CareersLayout;
