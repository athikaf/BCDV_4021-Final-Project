import React, { useState } from "react";
import Receipt from "../Receipt/Receipt";
import "./Transfer.css";
import jsonData from "../data.json";
import { useParams } from "react-router-dom";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const params=useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true);
  };

  // Render the component once the data is fetched
  return (
    <div className="body">
      <h1>Transfer </h1>
      <div className="transfer-div">
        <h2>Transfer</h2>
        {jsonData && (
          <div>
            <p>
              <span className="key-styling">From:</span> {jsonData[0].sender}
            </p>
            <p>
              <span className="key-styling">To:</span> {params.id}
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
      <div className="footer">
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/athika-fatima-1a59121aa/"
          className="key-styling"
        >
          Athika Fatima 
        </a>
      </p>
      <p style={{marginTop: '19px', marginLeft:'10px'}}>
        <a
          href="https://www.linkedin.com/in/syed-wahaj-haider-2785a0184/"
          className="key-styling"
        >
                Wahaj Haider
        </a>
      </p>
      </div>
    </div>
  );
}

export default Transfer;
