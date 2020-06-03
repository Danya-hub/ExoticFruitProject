'use strict';

import header from './components/header/header.js';
import { createSocialLink } from './headerServices/headerServices.js';
const body = document.querySelector('body')

if (body.offsetWidth >= 1100) {
    const header__innerSocial = document.querySelector('.header__innerSocial');
    header__innerSocial.innerHTML = createSocialLink();
} else {
    const innerBlock = document.querySelector('.header__innerBlock');
    innerBlock.insertAdjacentHTML('afterbegin', createSocialLink());
}

header();