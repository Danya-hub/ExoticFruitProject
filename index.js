'use strict';

import header from './components/header/header.js';
import { createSocialLink, creatAdditionalFeatures, /*createListLink*/} from './hamburgerMenu/hamburgerMenu.js';
const body = document.querySelector('body');

// if (body.offsetWidth >= 768) {
//     const navigation = document.querySelector('.navigation');
//     navigation.innerHTML = createListLink();
// } else 
if (body.offsetWidth >= 1100) {
    const header__innerSocial = document.querySelector('.header__innerSocial');
    const header__additionalFeatures = document.querySelector('.header__additionalFeatures');
    header__innerSocial.innerHTML = createSocialLink();
    header__additionalFeatures.innerHTML = creatAdditionalFeatures();
} else {
    const innerBlock = document.querySelector('.header__innerBlock');
    innerBlock.insertAdjacentHTML('afterbegin', createSocialLink());
    innerBlock.insertAdjacentHTML('afterbegin', creatAdditionalFeatures());
    // innerBlock.insertAdjacentHTML('afterbegin', createListLink());
}

header();