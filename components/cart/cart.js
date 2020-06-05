export const cart = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const addProductCart = (product) => {
    const productsInCart = document.querySelector('.productsInCart');
    cart.items.push(product);
    cart.totalPrice = Math.round(cart.totalPrice + product.price);
    cart.totalQuantity += 1;
    productsInCart.innerHTML = cart.totalQuantity;
    console.log(cart);
}