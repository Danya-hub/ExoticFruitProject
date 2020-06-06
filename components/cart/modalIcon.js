import {
    cart
} from './cart.js';

const createMarkup = () => {
    let markup = '';
    let number = 1;
    for (const item of cart.items) {
        markup += `
        <li class="header__cartListItem">
            <div class="header__cartListItem-blockInfo">
                <span class="header__cartListItem-blockInfo-text">Название продукта: ${item.title}</span>
                <p class="header__cartListItem-blockInfo-price">Цена:
                    <span class=${item.stock ? "groceryCards__list-item-priceThrough" : "groceryCards__list-item-price"}>${item.price}$/${((item.category === 'fruit') || (item.category === 'fruitSet'))?'pcs':'kg'}</span>
                    <span class="groceryCards__list-item-stock-span">${item.stock ? item.stock : ''}${item.stock ? (((item.category === 'fruit') || (item.category === 'fruitSet'))?'$/pcs':'$/kg') : ''}</span>
                </p>
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
        <div class="header__cartWindow">
            <h2 class="header__cartWindow-title">Корзина</h2>
                ${(cart.items.length === 0) ? `<p class="header__cartWindow-text">В корзине ничего нет!</p>` : ''}
                <ul class="header__cartList">${createMarkup()}</ul>
                <div class="header__cartListBlock">
                    <span class="header__totalQuantity">Количество продуктов в корзине: ${cart.totalQuantity}</span>
                    <span class="header__cartItemsPrice">Итоговая цена: ${cart.totalPrice}$</span>
                </div>
            </div>
            <div class="buttonsWrapper">
            ${(cart.items.length > 0) ? `<button class="header__getOrderButton orderButton">Получить заказ</button>` : ''}
            <button class="header__closeButton orderButton">&#10006;</button>
        </div>
    </div>
`, {
        onShow: (instance) => {
            instance.element().querySelector('.header__closeButton').onclick = instance.close;
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