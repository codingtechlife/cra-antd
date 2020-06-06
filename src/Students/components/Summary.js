import React from "react";

function Summary({ data }) {
  console.log("form", data);

  return (
    <div className="student-summry" type="flex" justify="center" align="middle">
      <h1>Summary</h1>
      <p>Please confirm details.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Summary;
