import React from "react";
import jsonData from "./../transactions.json";
import "./Transactions.css";
import Transaction from "./Transaction";

function Transactions() {
  return (
    <div className="receipt-container">
      <h1>Transaction History</h1>
      {jsonData.map((e) => {
        return (
          <Transaction
            receiptHash={e.receiptHash}
            status={e.status}
            time={e.createdAt}
            from={e.sender}
            to={e.receiver}
            amount={e.amount}
            gas={e.gasUsed}
          />
        );
      })}
      <div className="footer">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/athika-fatima-1a59121aa/"
            className="key-styling"
          >
            Athika Fatima
          </a>{" "}
          &{" "}
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

export default Transactions;
