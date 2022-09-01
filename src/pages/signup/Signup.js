import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import styles from "./Signup.module.css";

//email
//password
//username

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <label htmlFor="displayName">Display Name:</label>
      <input
        type="text"
        id="displayName"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
      ></input>
      {!isPending && <button className="btn">Submit</button>}
      {error && <p>{error}</p>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
    </form>
  );
}
