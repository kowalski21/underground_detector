import React from "react";

const MeasureCard = ({ title, measure, bg }) => {
  return (
    <div className={`card shadow border-0 ${bg}`} style={{ borderRadius: "20px" }}>
      <div className="card-body text-center ">
        <p className=" mb-3" style={{ fontSize: "20px" }}>
          <strong>{title}</strong>
        </p>
        <span className="circle circle-lg bg-dark">
          <i className="fe fe-32 fe-zap text-white mb-0"></i>
        </span>

        <h3 className="card-title mb-0 mt-2 text-dark">{measure} KM</h3>
        <hr />
        {measure > 0 ? (
          <p className="small text-white" style={{ fontSize: "18px" }}>
            Fault Detected !!!
          </p>
        ) : (
          <p className="small text-white" style={{ fontSize: "18px" }}>
            No Fault
          </p>
        )}
      </div>
    </div>
  );
};

export default MeasureCard;
