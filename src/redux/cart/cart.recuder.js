import {cartActionTypes} from "./cart.types";
import {addItemsToCart, removeItem} from "./cart.utils";

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
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id )
            }
        default:
            return state
    }
}

export default cartReducer;