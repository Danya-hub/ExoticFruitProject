'use strict';

import {
    fruit,
    fruitSet,
    berries
} from "../../data.js";

const header = () => {
    const headerList = document.querySelector('.header__list'); //ul
    const groceryCardsList = document.querySelector('.groceryCards__list'); //ul
    const aboutPage = document.querySelector('.groceryCards__aboutPage'); //div
    const groceryCardsMenu = document.querySelector('.groceryCards__menuBlock'); //div
    const groceryCards = document.querySelector('.groceryCards__menu'); //div
    const listFunction = document.querySelector('.groceryCards__menuBlock-listFunction'); //ul
    const spanText = document.querySelectorAll('.groceryCards__menuBlock-listFunction-item-text'); //span


    const getMarkup = (array) => {
        // console.dir(array);
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
                        <img src="./components/header/assets/logo/cart.svg" alt="картинка" class="groceryCards__list-item-button-img">
                    </button>
                </div>
            </li>
            `
        }
        return markup
    }
    groceryCardsList.innerHTML = getMarkup(fruit);
    groceryCardsMenu.classList.add('groceryCards__menuBlockActive');

    const linkActiveMain = (e) => {
        groceryCards.classList.remove('groceryCard__menuActive');
        aboutPage.classList.remove('groceryCards__aboutPageActive');
        groceryCardsMenu.classList.add('groceryCards__menuBlockActive');
        if (e.target === e.currentTarget) {
            return
        } else {
            switch (e.target.dataset.link) {
                case 'fruit':
                    groceryCardsList.innerHTML = getMarkup(fruit);
                    break;
                case 'fruitSet':
                    groceryCardsList.innerHTML = getMarkup(fruitSet);
                    break;
                case 'berries':
                    groceryCardsList.innerHTML = getMarkup(berries);
                    break;
                case 'about':
                    aboutPage.classList.add('groceryCards__aboutPageActive');
                    groceryCards.classList.add('groceryCard__menuActive');
                    groceryCardsMenu.classList.remove('groceryCards__menuBlockActive');
                    groceryCardsList.innerHTML = '';
                    break;
                default:
                    break;
            }

            // const headerListLinkActive = document.querySelector('.header__list-li-linkActive');
            // headerListLinkActive && headerListLinkActive.classList.remove('headerListLinkActive');
            // e.target.classList.add('headerListLinkActive');
            // console.log(e.target.dataset.link);
        }
    }

    const filterActive = () => {
        // groceryCardsMenu.classList.toggle('changeHeight');
        // listFunction.classList.toggle('groceryCards__menuBlock-listFunctionActive');
        // spanText.classList.toggle('groceryCards__menuBlock-spanActive');
        // spanText.map(el => console.log(el));
        groceryCardsMenu.classList.toggle('changeHeight');
        setTimeout(() => {
            listFunction.classList.toggle('groceryCards__menuBlockActive');
        }, 0);
    }
    headerList.addEventListener('click', linkActiveMain);
    groceryCards.addEventListener('click', filterActive);
}

export default header;