export const modalRegistration = () => {
    const productsInCart = document.querySelector('.productsInCart');
    console.log(productsInCart);
    const instance = basicLightbox.create(`
    <div class="modal">
    <h2 class="header__modalRegistration-title">Регистрация</h2>
    <button class="header__closeButton orderButton">&#10006;</button>
        <form class="header__registrationForm">
            <input type="text" placeholder="Имя">
            <input type="email" placeholder="Почта">
            <input type="password" placeholder="Пароль">
        </form>
        <button type="submit" class="header__modalRegistrationButton">Регистрация</button>
    </div>
`, {
        onShow: (instance) => {
            instance.element().querySelector('.header__closeButton').onclick = instance.close;
            instance.element().querySelector('.header__modalRegistrationButton').onclick = instance.close;
        }
    })

    instance.show();
    const register = () => {
        instance.close();
    }

    const orderButton = document.querySelector('.orderButton');
    orderButton.addEventListener('click', register)
}