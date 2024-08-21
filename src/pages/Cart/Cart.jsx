import './Cart.css';
import React, { useState } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/action';

export default function Cart({ onClose }) {
    const { cartContent , total} = useSelector(state => state);
    const dispatch = useDispatch();
    
    // Create a state object to store quantities for each product
    const [removeQuantities, setRemoveQuantities] = useState(
        cartContent.reduce((acc, product) => {
            acc[product.id] = 1; // Initialize each product's quantity to 1
            return acc;
        }, {})
    );

    const handleRemoveQuantityChange = (productId, event) => {
        setRemoveQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Number(event.target.value)
        }));
    };

    const removeFromCart = (product) => {
        const quantity = removeQuantities[product.id];
        dispatch(actions.cushionRemoved(product.id, quantity));
    };

    return (
        <>
            <div className='CartBody'>
                <div className='topOfCart makeItSpaced'>
                    <h1>Your Cart</h1>
                    <button onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                </div>
                {cartContent.map(product => (
                    <div key={product.id} className="inCart makeItSpaced">
                        <div className="discriptionOfTheProduct">
                            <div style={{ width: "40%" }}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className='row'>
                                <h1>{product.title}</h1>
                                <h2>$ {product.price} USD</h2>
                                <button onClick={() => removeFromCart(product)}>Remove</button>
                            </div>
                            <div>
                                <h1 style={{
                                    display: "flex",
                                    fontSize: "smaller",
                                    flexWrap: "wrap",
                                    transform: "translateX(-40px)"
                                }}>YOU HAVE {product.quantity} of this item</h1>
                            </div>
                        </div>
                        <div>
                            <input
                                type="number"
                                className='label'
                                value={removeQuantities[product.id] || 1}
                                onChange={(event) => handleRemoveQuantityChange(product.id, event)}
                                min="1"
                                max={product.quantity || 1} // Maximum quantity based on the product's current quantity
                            />
                        </div>
                        </div>
                   
                ))}
                <hr />
                <div className="bottomofTheCart">
                    <div>
                        <div className='makeItSpaced' style={{ alignContent: "center", marginBottom: "10px" }}>
                            <h1>Subtotal</h1>
                            <h2>${total}</h2>
                        </div>
                        <div className='AddToBtn'>
                            <button>CONTINUE TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
