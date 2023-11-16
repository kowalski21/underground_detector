import { useLatestLogs } from "@/hooks/logs";
import React from "react";
import { Loader } from "rsuite";
import MeasureCard from "./MeasureCard";

const LatestLogs = () => {
  const { data, isLoading } = useLatestLogs();

  return (
    <div className="row mt-5 mb-3">
      {isLoading && (
        <div className="col-12">
          <Loader center vertical />
        </div>
      )}
      {data && (
        <div className="col-md-4">
          <MeasureCard title={"Blue"} measure={data.r} bg={"bg-primary-light"} />
        </div>
      )}
      {data && (
        <div className="col-md-4">
          <MeasureCard title={"Yellow"} measure={data.y} bg={"bg-warning-light"} />
        </div>
      )}
      {data && (
        <div className="col-md-4">
          <MeasureCard title={"Red"} measure={data.b} bg={"bg-danger-light"} />
        </div>
      )}
    </div>
  );
};

export default LatestLogs;
