import React from 'react';

function Checkout({cartItems}) {

    const items = cartItems.map(i => {

        return (
            <div key={i.id}>
            <br></br>
            <br></br>
            <img 
            src={i.item.photo1} 
            alt={i.item.description}></img>&nbsp;
            <img 
            src={i.item.photo2} 
            alt={i.item.description}></img>
            <p>{i.item.description}</p>
            <p>${parseInt(i.item.price).toFixed(2)}</p>
            <p>Size: {i.item.size}</p>
            <button>Purchase</button>
            </div>
        )
    })

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? <p>You have no items in your cart</p> :
                <div>
                    {items}
                </div>}
                <br></br>
        </div>
    )
}

export default Checkout