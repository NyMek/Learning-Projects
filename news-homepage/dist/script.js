"use strict";var body=document.querySelector("body"),hamburger=document.querySelector(".header__img"),ul=document.querySelector("ul"),toggle=!0;hamburger.addEventListener("click",(function(){ul.classList.toggle("hide"),toggle?(hamburger.src="/assets/images/icon-menu-close.svg",body.style.background="#807E89",body.style.filter="saturate(33%)",body.style.transition="background 250ms ease-in-out",toggle=!1):(hamburger.src="/assets/images/icon-menu.svg",body.style.background="#fff",body.style.filter="saturate(100%)",body.style.transition="background 250ms ease-in-out",toggle=!0)}));
//# sourceMappingURL=script.js.map