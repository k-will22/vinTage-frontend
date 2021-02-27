import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/home">Home</Link>&nbsp; &nbsp;
            <Link to="/inventory">Inventory</Link>&nbsp; &nbsp;
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default NavBar