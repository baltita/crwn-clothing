export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const itemExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (itemExist) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const itemExist = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (itemExist.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id
            ? {...item,  quantity: item.quantity - 1}
            : item
    )
}