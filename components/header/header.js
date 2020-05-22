'use strict';

// import {fruit, fruitStockIncludes, fruitSet, fruitSetStockIncludes} from "";

const header = () => {
    const headerList = document.querySelector('.header__list'); //ul
    const headerListLinkActive = document.querySelector('.header__list-li-linkActive'); //a
    const pushDataMain = document.querySelector('.groceryCards__text'); //p

    pushDataMain.textContent = headerListLinkActive.dataset.link;

    const activeLinkHeader = (event) => {
        // console.log(event.target);
        if (event.target === event.currentTarget) {
            return
        } else {
            let headerListLinkActive = document.querySelector('.header__list-li-linkActive');
            headerListLinkActive && headerListLinkActive.classList.remove('header__list-li-linkActive');
            event.target.parentNode.classList.add('header__list-li-linkActive');
            pushDataMain.textContent = headerListLinkActive.dataset.link;
        }
    }
    headerList.addEventListener('click', activeLinkHeader);
}

export default header;