import React from "react";
import useAuth from "./useAuth";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div>
      <p>
        <code>spotify uncovered</code>
      </p>
      User has been logged in
    </div>
  );
}

export default Dashboard;
