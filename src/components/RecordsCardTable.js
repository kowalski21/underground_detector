import { useLogs } from "@/hooks/logs";
import React, { useState } from "react";
// import { DateTime } from "luxon";
import { DatePicker } from "rsuite";
import { DateTime } from "luxon";
const RecordsCardTable = () => {
  const [from, setFrom] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    let payload = {};
    if (from && end) {
      payload.from_date = DateTime.fromJSDate(from).toISODate();
      payload.end_date = DateTime.fromJSDate(end).toISODate();
    }

    setQuery(payload);

    console.log(payload);
  };

  const { data, isLoading } = useLogs(query, query);
  return (
    <div className="card shadow border-0 " style={{ borderRadius: "20px" }}>
      <div className="card-body">
        {/* <div className="row">
          <div className="col">
            <label>From Date</label>
            <br />
            <DatePicker value={from} onChange={(val) => setFrom(val)} block />
          </div>
          <div className="col">
            <label>End Date</label>
            <br />
            <DatePicker value={end} onChange={(val) => setEnd(val)} block />
          </div>
          <div className="col">
            <label>Search</label>
            <br />
            <button className="btn btn-outline-dark" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div> */}
        {/* {JSON.stringify(data)} */}
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Red Line</th>
              <th>Blue Line</th>
              <th>Yellow Line</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.r}</td>
                  <td>{item.b}</td>
                  <td>{item.y}</td>
                  <td>{DateTime.fromISO(item.created_at).toFormat("MMMM dd, yyyy HH:mm:ss")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsCardTable;
