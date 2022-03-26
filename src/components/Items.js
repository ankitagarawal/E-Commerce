import React, { useState } from 'react'
import './items.css'

function Items(props) {


    let { image, description, price, title } = props;

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ height: "220px", borderRadius: "10px" }} src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{truncate(title, 50)}</h5>
                    {/* <p className="card-text">{truncate(description, 80)}</p> */}
                    <p className="card-text">$ {price}</p>
                    <button id='card_btn'>Buy Now</button>
                    <button id='card_btn'>Add To Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Items