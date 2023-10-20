import './Wallet.css'
import address from '../addresses.json'

const Wallet = () =>{

    return(<>
    <div className='body'>
        <h1>My Wallet</h1>
            <div className="transfer-div">
                <div className='address'>
                 <h2>Address:</h2><h2>{address[0].nodeAddress}</h2>
                </div>
                <div className='address'>
                 <h2>Balance:</h2> <h2>10000</h2> <h2>ETH</h2>
                 </div>
            </div>

    </div>
        
    </>);

}

export default Wallet;