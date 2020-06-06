'use strict';

import {
    fruit,
    fruitSet,
    berries
} from "../../data.js";

import {
    addProductCart
} from '../cart/cart.js';

import {
    createSocialLink,
    creatAdditionalFeatures,
    createListLink
} from '../../hamburgerMenu/hamburgerMenu.js';

import {
    openOrder
} from '../cart/modalIcon.js';
import { modalRegistration } from "../cart/modalRegistration.js";

const pageInfo = {
    currentPage: 'fruit'
}

const fromMinToMax = (a, b) => {
    return a.price - b.price;
}

const fromMaxToMin = (a, b) => {
    return b.price - a.price;
}

const header = () => {
    const groceryCardsList = document.querySelector('.groceryCards__list'); //ul
    const aboutPage = document.querySelector('.groceryCards__aboutPage'); //div
    const groceryCardsMenu = document.querySelector('.groceryCards__menuBlock'); //div
    const groceryCards = document.querySelector('.groceryCards__menu'); //div
    const listFilter = document.querySelector('.groceryCards__menuBlock-listFilter'); //ul
    const menuBlockTitle = document.querySelector('.groceryCards__menuBlock-title'); //h2
    const hamburgerMenu = document.querySelector('.header__hamburgerMenu-button'); //button
    const hamburgerMenuBlock = document.querySelector('.header__hamburgerMenuBlock'); //div
    const header__innerSocial = document.querySelector('.header__innerSocial'); //div
    const header__additionalFeatures = document.querySelector('.header__additionalFeatures'); //div
    const wrapper = document.querySelector('.wrapper');
    const body = document.querySelector('body'); //body

    const getMarkup = (array) => {
        let markup = '';
        for (const item of array) {
            markup += `
            <li class="groceryCards__list-item">
                <h2 class="groceryCards__list-item-title">${item.title}</h2>
                <div class="groceryCards__list-item-block">
                    <img src="${item.photoProduct}" class="groceryCards__list-item-block-img">
                </div>
                <div>
                    <p class="groceryCards__list-item-price">
                        <span class=${item.stock ? "groceryCards__list-item-priceThrough" : "groceryCards__list-item-price"}>${item.price}$/${((item.category === 'fruit') || (item.category === 'fruitSet'))?'pcs':'kg'}</span>
                        <span class="groceryCards__list-item-stock-span">${item.stock ? item.stock : ''}${item.stock ? (((item.category === 'fruit') || (item.category === 'fruitSet'))?'$/pcs':'$/kg') : ''}</span>
                    </p>
                    <button class="groceryCards__list-item-button">
                        <img src="./components/header/assets/logo/cart.svg" alt="картинка" class="groceryCards__list-item-button-img" data-id="${item.id}" data-category="${item.category}" data-img="cart">
                    </button>
                </div>
            </li>
            `
        }
        return markup
    }
    groceryCardsList.innerHTML = getMarkup(fruit);
    groceryCardsMenu.classList.add('groceryCards__menuBlockActive');
    wrapper.classList.remove('wrapperActive');

    const linkActiveMain = (e) => {
        groceryCards.classList.remove('groceryCards__menuActive');
        aboutPage.classList.remove('groceryCards__aboutPageActive');
        groceryCardsMenu.classList.add('groceryCards__menuBlockActive');
        groceryCardsList.classList.remove('groceryCards__listBerriesActive');
        wrapper.classList.remove('wrapperActive');
        if (e.target === e.currentTarget) {
            return
        } else {
            const hamburgerMenuBlock = document.querySelector('.header__hamburgerMenuBlock');
            switch (e.target.dataset.link) {
                case 'fruit':
                    groceryCardsList.innerHTML = getMarkup(fruit);
                    pageInfo.currentPage = 'fruit';
                    if (hamburgerMenuBlock) {
                        hamburgerMenuBlock.classList.remove('burgerMenuActive');
                    }
                    break;
                case 'fruitSet':
                    groceryCardsList.innerHTML = getMarkup(fruitSet);
                    pageInfo.currentPage = 'fruitSet';
                    if (hamburgerMenuBlock) {
                        hamburgerMenuBlock.classList.remove('burgerMenuActive');
                    }
                    break;
                case 'berries':
                    groceryCardsList.innerHTML = getMarkup(berries);
                    pageInfo.currentPage = 'berries';
                    if (hamburgerMenuBlock) {
                        hamburgerMenuBlock.classList.remove('burgerMenuActive');
                    }
                    break;
                case 'about':
                    aboutPage.classList.add('groceryCards__aboutPageActive');
                    groceryCards.classList.add('groceryCards__menuActive');
                    wrapper.classList.add('wrapperActive');
                    groceryCardsMenu.classList.remove('groceryCards__menuBlockActive');
                    groceryCardsList.innerHTML = '';
                    if (hamburgerMenuBlock) {
                        hamburgerMenuBlock.classList.remove('burgerMenuActive');
                    }
                    break;
                default:
                    break;
            }
        }
    }

    const filterActive = () => {
        groceryCardsMenu.classList.toggle('changeHeight');
        listFilter.classList.toggle('groceryCards__menuBlockActive');
    }


    const getFilter = (e) => {
        groceryCardsList.classList.remove('groceryCards__listBerriesActive');
        if (e.target.dataset) {
            switch (e.target.dataset.text) {
                case 'stock':
                    switch (pageInfo.currentPage) {
                        case 'fruit':
                            groceryCardsList.innerHTML = getMarkup(fruit.filter(item => item.stock));
                            break;
                        case 'fruitSet':
                            groceryCardsList.innerHTML = getMarkup(fruitSet.filter(item => item.stock));
                            break;
                        case 'berries':
                            groceryCardsList.classList.add('groceryCards__listBerriesActive');
                            groceryCardsList.innerHTML = `<li class="header__groceryCards-list-berreisStock">
                            <h2 class="header__berreisStock-title">Почему тут ничего не находится?</h2>
                            <p class="header__berreisStock-text">Очень обидно, что тут ничего не появилось. Надеемся на появление чуда.</p>
                            <img src="./components/header/assets/logo/sleeping man.svg" class="header__berreisStock-imgSleepingMan"></img>
                            </li>`;
                            break;
                        default:
                            break;
                    }
                    break;
                case 'max':
                    switch (pageInfo.currentPage) {
                        case 'fruit':
                            groceryCardsList.innerHTML = getMarkup(fruit.sort(fromMinToMax));
                            break;
                        case 'fruitSet':
                            groceryCardsList.innerHTML = getMarkup(fruitSet.sort(fromMinToMax));
                            break;
                        case 'berries':
                            groceryCardsList.innerHTML = getMarkup(berries.sort(fromMinToMax));
                            break;
                        default:
                            break;
                    }
                    break;
                case 'min':
                    switch (pageInfo.currentPage) {
                        case 'fruit':
                            groceryCardsList.innerHTML = getMarkup(fruit.sort(fromMaxToMin));
                            break;
                        case 'fruitSet':
                            groceryCardsList.innerHTML = getMarkup(fruitSet.sort(fromMaxToMin));
                            break;
                        case 'berries':
                            groceryCardsList.innerHTML = getMarkup(berries.sort(fromMaxToMin));
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    const getSiteBur = () => {
        const innerBlock = document.querySelector('.header__innerBlock');
        const navigation = document.querySelector('.navigation');
        if ((body.offsetWidth >= 320) && (body.offsetWidth < 768)) {
            innerBlock.insertAdjacentHTML('afterbegin', createSocialLink());
            innerBlock.insertAdjacentHTML('beforeend', createListLink());
            innerBlock.insertAdjacentHTML('beforeend', creatAdditionalFeatures());
            document.querySelector('.header__list').addEventListener('click', linkActiveMain);
            const cartButton = document.querySelector('.header__cart');
            cartButton.addEventListener('click', openOrder);
            document.querySelector('.header__userRegistration').addEventListener('click', modalRegistration);
        } else if ((body.offsetWidth >= 768) && (body.offsetWidth < 1100)) {
            navigation.innerHTML = createListLink();
            innerBlock.insertAdjacentHTML('afterbegin', createSocialLink());
            innerBlock.insertAdjacentHTML('beforeend', creatAdditionalFeatures());
            document.querySelector('.header__list').addEventListener('click', linkActiveMain);
            const cartButton = document.querySelector('.header__cart');
            cartButton.addEventListener('click', openOrder);
        } else if (body.offsetWidth >= 1100) {
            navigation.innerHTML = createListLink();
            header__innerSocial.insertAdjacentHTML('beforeend', createSocialLink());
            header__additionalFeatures.insertAdjacentHTML('beforeend', creatAdditionalFeatures());
            document.querySelector('.header__list').addEventListener('click', linkActiveMain);
            const cartButton = document.querySelector('.header__cart');
            cartButton.addEventListener('click', openOrder);
        } else {
            const innerBlock = document.querySelector('.header__innerBlock');
            innerBlock.insertAdjacentHTML('afterbegin', createSocialLink());
            innerBlock.insertAdjacentHTML('afterbegin', creatAdditionalFeatures());
            document.querySelector('.header__list').addEventListener('click', linkActiveMain);
            const cartButton = document.querySelector('.header__cart');
            cartButton.addEventListener('click', openOrder);
        }
    }

    getSiteBur();

    const openHamburger = () => {
        const hamburgerMenuBlockClose = document.querySelector('.header__hamburgerMenuBlock-buttonClose');
        const close = () => {
            hamburgerMenuBlock.classList.remove('burgerMenuActive');
            hamburgerMenuBlockClose.removeEventListener('click', close);
        }
        hamburgerMenuBlock.classList.add('burgerMenuActive');
        hamburgerMenuBlockClose.addEventListener('click', close);
    }

    const addActiveCart = (e) => {
        if (e.target.dataset.img) {
            const category = e.target.dataset.category;
            const id = e.target.dataset.id;
            if (category === 'fruit') {
                for (const item of fruit) {
                    if (item.id === id) {
                        addProductCart(item);
                    }
                }
            }
            if (category === 'fruitSet') {
                for (const item of fruitSet) {
                    if (item.id === id) {
                        addProductCart(item);
                    }
                }
            }
            if (category === 'berries') {
                for (const item of berries) {
                    if (item.id === id) {
                        addProductCart(item);
                    }
                }
            }
        } else return
    }

    // const openModalIconCart

    menuBlockTitle.addEventListener('click', filterActive)
    listFilter.addEventListener('click', getFilter);
    hamburgerMenu.addEventListener('click', openHamburger);
    groceryCardsList.addEventListener('click', addActiveCart);
}

export default header;