import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("Basia");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.warn({ name, password });
  };

  return (
    <section>
      <div>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button onClick={handleLogin}>Log in</button>
    </section>
  );
};

export { Login };
