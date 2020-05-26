'use strict';

import {
    fruit,
    fruitSet
} from "../../data.js";

const header = () => {
    const headerList = document.querySelector('.header__list'); //ul
    const headerListLinkActive = document.querySelector('.header__list-li-linkActive'); //a
    const groceryCardsList = document.querySelector('.groceryCards__list'); //ul
    const aboutPage = document.querySelector('.aboutPage');

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
                    <p class="groceryCards__list-item-price">${item.price}$ ${((item.category === 'fruit') || (item.category === 'berries'))?'th':'kg'}</p>
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

    const linkActiveMain = (e) => {
        aboutPage.classList.remove('aboutPageActive');
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
                case 'about':
                    aboutPage.classList.add('aboutPageActive');
                    groceryCardsList.innerHTML = '';
                    break;
                default:
                    break;
            }

            // const headerListLinkActive = document.querySelector('.header__list-li-linkActive');
            // headerListLinkActive && headerListLinkActive.classList.remove('headerListLinkActive');
            // e.target.classList.add('headerListLinkActive');
            console.log(e.target.dataset.link);
        }
    }
    headerList.addEventListener('click', linkActiveMain);
}

export default header;