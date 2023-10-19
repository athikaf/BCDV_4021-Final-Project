import React, { useState } from "react";
import Receipt from "./Receipt";
import "./Transfer.css";
import jsonData from "./data.json";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true);
  };

  // Render the component once the data is fetched
  return (
    <div className="body">
      <h1>Transfer Project by 101502209</h1>
      <div className="transfer-div">
        <h2>Transfer</h2>
        {jsonData && (
          <div>
            <p>
              <span className="key-styling">From:</span> {jsonData[0].sender}
            </p>
            <p>
              <span className="key-styling">To:</span> {jsonData[0].receiver}
            </p>

            <form>
              <label for="amount" className="key-styling">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                placeholder="Enter amount"
                min="1"
                onChange={(e) => setAmount(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      {showReceipt && amount !== "" && (
        <Receipt
          txnHash={jsonData[0].txnID}
          blockHash={jsonData[0].blockID}
          bNo={jsonData[0].blockNumber}
          from={jsonData[0].sender}
          to={jsonData[0].receiver}
          amount={amount}
          gas={jsonData[0].gasUsed}
        />
      )}
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/athika-fatima-1a59121aa/"
          className="key-styling"
        >
          Athika Fatima
        </a>
      </p>
    </div>
  );
}

export default Transfer;
