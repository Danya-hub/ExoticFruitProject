'use strict';

import { fruit, fruitSet } from "../../data.js";

// import {fruit, fruitStockIncludes, fruitSet, fruitSetStockIncludes} from './data.js';

const header = () => {
    const headerList = document.querySelector('.header__list'); //ul
    const headerListLinkActive = document.querySelector('.header__list-li-linkActive'); //a
    const groceryCardsList = document.querySelector('.groceryCards__list'); //ul
    const getMarkup = (array) => {
        let markup = '';
        for (const item of array) {
            markup += `
            <li class="groceryCards__list-item">
                <h2 class="groceryCards__list-item-title">${item.title}</h2>
                <img src="${item.photoProduct}" class="groceryCards__list-item-img">
            </li>
            `
        }
        return markup
    }
    groceryCardsList.innerHTML = getMarkup(fruit);

    const linkActiveMain = (e) => {
        // console.log(e.target);
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