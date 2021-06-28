import Counters from "./components/counter";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login"
export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2> */}
      <Login></Login>
      <Counters />
    </div>
  );
}
