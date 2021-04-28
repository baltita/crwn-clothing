import {cartActionTypes} from "./cart.types";
import {addItemsToCart} from "./cart.utils";

const  INITIAL_STATE = {
    cartHidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartHidden: !state.cartHidden,
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload),
            }
        default:
            return state
    }
}

export default cartReducer;