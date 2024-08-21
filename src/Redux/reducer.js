// reducer.js
import { productsData } from '../pages/Products/productsData';
import * as actionTypes from './actionTypes';

const initialState = {
    numOfCushions: 0,
    cartContent: [], // Array to hold cart items
    total: 0 // Total price of items in the cart
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CUSHION_ADDED:
            // Find the product from productsData
            const productToAdd = productsData.find(product => product.id === action.payload.id);
            if (!productToAdd) {
                // If the product is not found, return the current state
                return state;
            }

            let newCart = [...state.cartContent];
            const productIndex = newCart.findIndex(product => product.id === action.payload.id);

            if (productIndex === -1) {
                // Product is not in the cart, add it
                newCart = newCart.concat({ ...productToAdd, quantity: action.payload.quantity });
            } else {
                // Product is already in the cart, update its quantity
                newCart = newCart.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: (product.quantity || 0) + action.payload.quantity };
                    }
                    return product;
                });
            }

            // Calculate new total
            const newTotal = newCart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

            return {
                ...state,
                numOfCushions: state.numOfCushions + action.payload.quantity,
                cartContent: newCart,
                total: parseFloat(newTotal.toFixed(2))
            };

        case actionTypes.CUSHION_REMOVED:
            let updatedCartContent = state.cartContent.map(product => {
                if (product.id === action.payload.id) {
                    const updatedQuantity = Math.max(0, (product.quantity || 1) - action.payload.quantity);
                    return updatedQuantity > 0
                        ? { ...product, quantity: updatedQuantity }
                        : null; // Mark for removal
                }
                return product;
            }).filter(product => product !== null);

            // Calculate new total
            const updatedTotal = updatedCartContent.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

            return {
                ...state,
                numOfCushions: Math.max(0, state.numOfCushions - action.payload.quantity),
                cartContent: updatedCartContent,
                total: parseFloat(updatedTotal.toFixed(2))
            };

        default:
            return state;
    }
};

export default reducer;
