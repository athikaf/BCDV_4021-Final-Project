import React from "react";
import "./Receipt.css";

function Receipt(props) {
  return (
    <div className="receipt-container">
      <div className="receipt-div">
        <h2>Receipt</h2>
        <div>
          <p>
            <span className="key-styling">Transaction Hash:</span>{" "}
            {props.txnHash}
          </p>
          <p>
            <span className="key-styling">Block Hash:</span> {props.blockHash}
          </p>
          <p>
            <span className="key-styling">Block Number:</span> {props.bNo}
          </p>
          <p>
            <span className="key-styling">From:</span> {props.from}
          </p>
          <p>
            <span className="key-styling">To:</span> {props.to}
          </p>
          <p>
            <span className="key-styling">Amount:</span> {props.amount}
          </p>
          <p>
            <span className="key-styling">Gas used:</span> {props.gas}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
