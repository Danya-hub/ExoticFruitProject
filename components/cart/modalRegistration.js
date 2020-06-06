export const modalRegistration = () => {
    const productsInCart = document.querySelector('.productsInCart');
    console.log(productsInCart);
    const instance = basicLightbox.create(`
    <div class="modal">
    <button class="header__closeButton orderButton">&#10006;</button>
        <form>
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            </form>
            <button type="submit" class="regButton">Регистрация</button>
    </div>
`, {
        onShow: (instance) => {
            instance.element().querySelector('.header__closeButton').onclick = instance.close;
            instance.element().querySelector('.regButton').onclick = instance.close;
        }
    })

    instance.show();
    const register = () => {
        instance.close();
    }

    const orderButton = document.querySelector('.orderButton');
    orderButton.addEventListener('click', register)

}