import React, { useEffect, useState } from "react";
import { Admin } from "./Admin";
import { Login } from "./Login";

const App = () => {
  const [serverState, setServerState] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((state) => {
        setServerState(state.status);
      });
  });

  return (
    <div className="App">
      Status serwera:" {serverState}
      <Login />
      <Admin />
    </div>
  );
};

export default App;
