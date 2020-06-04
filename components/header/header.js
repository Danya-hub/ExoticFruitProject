'use strict';

import {
    fruit,
    fruitSet,
    berries
} from "../../data.js";

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
    const headerList = document.querySelector('.header__list'); //ul
    const groceryCardsList = document.querySelector('.groceryCards__list'); //ul
    const aboutPage = document.querySelector('.groceryCards__aboutPage'); //div
    const groceryCardsMenu = document.querySelector('.groceryCards__menuBlock'); //div
    const groceryCards = document.querySelector('.groceryCards__menu'); //div
    const listFilter = document.querySelector('.groceryCards__menuBlock-listFilter'); //ul
    const menuBlockTitle = document.querySelector('.groceryCards__menuBlock-title'); //h2
    const hamburgerMenu = document.querySelector('.header__hamburgerMenu'); //button
    const hamburgerMenuBlock = document.querySelector('.header__hamburgerMenuBlock'); //div
    // console.log(spanTextSale);

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
        groceryCardsList.classList.remove('groceryCards__listBerriesActive');
        if (e.target === e.currentTarget) {
            return
        } else {
            switch (e.target.dataset.link) {
                case 'fruit':
                    // groceryCardsList.style.display = 'grid';
                    groceryCardsList.innerHTML = getMarkup(fruit);
                    pageInfo.currentPage = 'fruit';
                    break;
                case 'fruitSet':
                    // groceryCardsList.style.display = 'grid';
                    groceryCardsList.innerHTML = getMarkup(fruitSet);
                    pageInfo.currentPage = 'fruitSet';
                    break;
                case 'berries':
                    // groceryCardsList.style.display = 'grid';
                    groceryCardsList.innerHTML = getMarkup(berries);
                    pageInfo.currentPage = 'berries';
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
        // listFilter.classList.toggle('groceryCards__menuBlock-listFilterActive');
        // spanText.classList.toggle('groceryCards__menuBlock-spanActive');
        // spanText.map(el => console.log(el));
        // console.log(e.currentTarget);
        groceryCardsMenu.classList.toggle('changeHeight');
        listFilter.classList.toggle('groceryCards__menuBlockActive');
    }


    const getFilter = (e) => {
        // console.dir(window.innerWidth);
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
                            // groceryCardsList.style.display = 'block';
                            groceryCardsList.classList.add('groceryCards__listBerriesActive');
                            groceryCardsList.innerHTML = `<li class="header__groceryCards-list-berreisStock">
                            <h2 class="header__berreisStock-title">Почему тут ничего не находится?</h2>
                            <p class="header__berreisStock-text">Очень обидно, что тут ничего не появилось. Надеемся на появления чуда.</p>
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

    const openHamburger = () => {
        const hamburgerMenuBlockClose = document.querySelector('.header__hamburgerMenuBlock-buttonClose');
        const close = () => {
            hamburgerMenuBlock.classList.remove('burgerMenuActive');
            hamburgerMenuBlockClose.removeEventListener('click', close);
        }
        hamburgerMenuBlock.classList.add('burgerMenuActive');
        hamburgerMenuBlockClose.addEventListener('click', close);
    }

    headerList.addEventListener('click', linkActiveMain);
    menuBlockTitle.addEventListener('click', filterActive);
    listFilter.addEventListener('click', getFilter);
    hamburgerMenu.addEventListener('click', openHamburger);
}

export default header;