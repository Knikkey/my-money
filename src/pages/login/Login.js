import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
      <button className="btn">Login</button>
    </form>
  );
}
