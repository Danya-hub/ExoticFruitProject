const creatCart = {
    item: [],
    quantity: 0,
    totalPrice: 0
}

export const addProductCart = (product) => {
    creatCart.item.push(product);
    console.log(creatCart);
}