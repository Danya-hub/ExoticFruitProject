import { cart } from './cart.js';

const createMarkup = () => {
    let markup = '';
    let number = 1;
    for (const item of cart.items) {
        markup += `
        <li class="cartListItem">
        <div class="cartItemsFlex">
            <span>${number}. <b>Title:</b> ${item.title}</span>
            <span><b>Price:</b> ${item.price} UAH</span>
        </div>
        </li>
        `
        number += 1;
    }
    return markup;
}

export const openOrder = () => {

    const productsInCart = document.querySelector('.productsInCart');
    console.log(productsInCart);
    const instance = basicLightbox.create(`
    <div class="modal">
        <div class="cartWindow">
            <h2>Product in cart</h2>
            ${(cart.items.length === 0) ? `<p>No products in cart</p>` : ''}
            <ul class="cartList">${createMarkup()}</ul>
            <div class="cartItemsFlex">
                <span><b>All products in cart:</b> ${cart.totalQuantity}</span>
                <span class="cartItemsPrice"><b>Total price:</b> ${cart.totalPrice} UAH</span>
            </div>
        </div>
        <div class="buttonsWrapper">
            ${(cart.items.length > 0) ? `<button class="orderButton">Get order</button>` : ''}
            <button class="closeButton orderButton">Close</button>
        </div>
    </div>
`, {
        onShow: (instance) => {
            instance.element().querySelector('.closeButton').onclick = instance.close
        }
    })

    instance.show();
    const getOrder = () => {
        cart.items = [];
        cart.totalQuantity = 0;
        cart.totalPrice = 0;
        instance.close();
        productsInCart.textContent = 0;
    }

    const orderButton = document.querySelector('.orderButton');
    orderButton.addEventListener('click', getOrder)
}