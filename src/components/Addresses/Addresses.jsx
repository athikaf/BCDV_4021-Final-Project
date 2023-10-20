import './Addresses.css'
import address from '../addresses.json'
import {  Link } from 'react-router-dom';

const Addresses = () => {

    return (<>
    <div className='body'>
        <h1>Blockchain Node Addresses</h1>
            <div className="transfer-div">
            {address.map((item, index) => (
            <div className='address' key={index}>
              <Link to={`/transfer/${item.nodeAddress}`}>
                <h2>{item.nodeAddress}</h2>
              </Link>
            </div>
          ))}
                
            </div>

    </div>
    </>);
}

export default Addresses;