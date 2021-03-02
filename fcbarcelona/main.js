'use strict';

const rightMenu = document.querySelector('.header__right');
rightMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

 scrollIntoView(link);

});

const columnMenu = document.querySelector('.footer__column');
columnMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

 scrollIntoView(link);

});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionsClass.indexOf(selector)]);
};