import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <div className="App">
      <Dashboard code={code} />
    </div>
  ) : (
    <div className="App">
      <p>
        <code>spotify uncovered</code>
      </p>
      <Login />
    </div>
  );
}

export default App;
