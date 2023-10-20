import "./Addresses.css";
import address from "../addresses.json";
import { Link } from "react-router-dom";

const Addresses = () => {
  return (
    <>
      <div className="body">
        <h1>Blockchain Node Addresses</h1>
        <div className="transfer-div">
          {address.map((item, index) => (
            <div className="address" key={index}>
              <Link to={`/transfer/${item.nodeAddress}`}>
                <h2>{item.nodeAddress}</h2>
              </Link>
            </div>
          ))}
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

export default Addresses;
