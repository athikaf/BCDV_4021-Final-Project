import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () =>{



    return (<>
        <div className="navbar">
            <div className="innerElements">
                <Link to='/transactions'>
                Transactions
                </Link>
                
            </div>
            <div className="innerElements">
                <Link to='/addresses'>
                Addresses
                </Link>
            </div>
            <div className="innerElements">
                <Link to='/transfer'>
                Transfer
                </Link>
            </div>
            <div className="innerElements">
                <Link to='/wallet'>
                Wallet
                </Link>
            </div>

        </div>
    </>);
}

export default Navbar;
