import React from 'react';

function Checkout({purchased}) {

    return (
        <div>
            <h1>Checkout</h1>
            {purchased.length === 0 ? <p>You have no items in your cart</p> :
                <div key={purchased.id}>
                <br></br>
                <br></br>
                <img 
                src={purchased.photo1} 
                alt={purchased.description}></img>&nbsp;
                <img 
                src={purchased.photo2} 
                alt={purchased.description}></img>
                <p>{purchased.description}</p>
                <p>${parseInt(purchased.price).toFixed(2)}</p>
                <p>Size: {purchased.size}</p>
                <button>Purchase</button>
                </div>}
                <br></br>
        </div>
    )
}

export default Checkout