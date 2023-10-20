import "./Wallet.css";
import address from "../addresses.json";

const Wallet = () => {
  return (
    <>
      <div className="body">
        <h1>My Wallet</h1>
        <div className="transfer-div">
          <div className="address">
            <h2>Address:</h2>
            <h2>{address[0].nodeAddress}</h2>
          </div>
          <div className="address">
            <h2>Balance:</h2> <h2>10000</h2> <h2>ETH</h2>
          </div>
        </div>
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
    </>
  );
};

export default Wallet;
