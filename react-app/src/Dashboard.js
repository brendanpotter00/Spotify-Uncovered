import React from "react";
import useAuth from "./useAuth";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div>
      <p>
        <code>spotify uncovered</code>
      </p>
      code from urls has been gotten {code}
    </div>
  );
}

export default Dashboard;
