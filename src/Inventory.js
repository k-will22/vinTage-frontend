import React from 'react';

function Inventory({items}) {

    const itemObj = items.map(item => {
        return (
            <div key={item.id}>
            <br></br>
            <br></br>
            <img 
            src={item.photo1} 
            alt={item.description}></img>&nbsp;
            <img 
            src={item.photo2} 
            alt={item.description}></img>
            <p>{item.description}</p>
            <p>${parseInt(item.price).toFixed(2)}</p>
            <p>Size: {item.size}</p>
            <button>Purchase</button>
            </div>
        )
    })
    return (
        <div>
            {itemObj}
        </div>
    )
}

export default Inventory