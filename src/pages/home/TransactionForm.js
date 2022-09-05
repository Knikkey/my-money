import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="transName">Transaction name:</label>
        <input
          required
          id="transName"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

        <label htmlFor="transAmount">Transaction amount (USD):</label>
        <input
          required
          id="transAmount"
          type="number"
          min="0"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        ></input>
        <button>Add transaction</button>
      </form>
    </>
  );
}
