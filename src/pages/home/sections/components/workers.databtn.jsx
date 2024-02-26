import React from "react";
import { Link } from "react-router-dom";

const W_dbbtn = () => {
  return (
    <div className="row mtop-60">
      <div className="col px-0 text-center">
        <Link to="/searchEmployee" className="btn-default-red">
          View Our Database of 100,000+ Filipino Workers
        </Link>
      </div>
    </div>
  );
};

export default W_dbbtn;
