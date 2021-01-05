export const addItemToCart = (cartItems, cartItemToAdd) => {

    //Check to see if itemToAdd is already there ...
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );

    //Item found ..
    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem )
    }
    //Item not found
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1}]  
};