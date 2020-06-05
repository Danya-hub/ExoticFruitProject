export const createListLink = () => {
    return `
    <ul class="header__list">      
        <li class="header__list-item">
            <a href="#" data-link="fruit" class="header__list-item-linkFruit header__list-item-linkActive">Фрукты</a>
        </li>
        <li class="header__list-item">
            <a href="#" data-link="fruitSet" class="header__list-item-linkFruitSet">Фруктовый набор</a>
        </li>
        <li class="header__list-item">
            <a href="#" data-link="berries" class="header__list-item-linkBerries">Ягоды</a>
        </li>
        <li class="header__list-item">
            <a href="#" data-link="about" class="header__list-item-linkProject">О проекте</a>
        </li>
    </ul>
    `
}

export const createSocialLink = () => {
    return `            
    <div class="header__socialNetworks">
        <a href="https://www.instagram.com" class="header__socialNetworks-logo-link">
            <img src="./assets/logo/instagram.svg" alt="картинка" class="header__socialNetworks-logo-link-img">
        </a>
        <a href="https://www.facebook.com" class="header__socialNetworks-logo-link">
            <img src="./assets/logo/facebook.svg" alt="картинка" class="header__socialNetworks-logo-link-img">
        </a>
        <a href="https://www.twitter.com" class="header__socialNetworks-logo-link">
            <img src="./assets/logo/twitter.svg" alt="картинка" class="header__socialNetworks-logo-link-img">
        </a>
    </div>
    `
}

export const creatAdditionalFeatures = () => {
    return `            
    <div class="header__additionalFeaturesBlock">
        <button class="header__userRegistration">
            <img src="./assets/logo/regist.svg" alt="картинка" class="header__userRegistration-img">
        </button>
        <button class="header__cart">
            <img src="./assets/logo/cartHeader.svg" alt="картинка" class="header__cart-img">
        </button>
    </div>
    `
}