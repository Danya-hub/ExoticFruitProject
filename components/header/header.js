'use strict';

// import {fruit, fruitStockIncludes, fruitSet, fruitSetStockIncludes} from "";

const header = () => {
    const headerList = document.querySelector('.header__list'); //ul
    const headerListLinkActive = document.querySelector('.header__list-li-linkActive'); //a
    const pushDataMain = document.querySelector('.groceryCards__text'); //p

    pushDataMain.textContent = headerListLinkActive.dataset.link;

    headerList.addEventListener('click', (event) => {
        pushDataMain.textContent = event.target.getAttribute('data-link');
    });
}

export default header;