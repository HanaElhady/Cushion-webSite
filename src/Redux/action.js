import * as actionTypes from './actionTypes';


export const cushionAdded = (product, quantity) => {
    return {
        type: actionTypes.CUSHION_ADDED,
        payload: {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity
        }
    };
};



export const cushionRemoved = ( id , quantity) => ({
    type: actionTypes.CUSHION_REMOVED,
    payload: {
        id,
        quantity
    }
});


