import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        required
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        required
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      {!isPending && <button className="btn">Login</button>}

      {isPending && (
        <button className="btn" disabled>
          loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
