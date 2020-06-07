import React, { useEffect, useState } from "react";

const App = () => {
  const [serverState, setServerState] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((state) => {setServerState(state.status)});
  });

  return <div className="App">Status serwera:" {serverState} </div>;
};

export default App;
