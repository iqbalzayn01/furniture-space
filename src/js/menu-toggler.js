import { addClass, removeClass } from "./utils-class";

const menuTogglerId = document.getElementById("menu-toggler");
menuTogglerId.addEventListener("click", function () {
  const menuId = document.getElementById("menu");
  if (menuId.className.indexOf("opacity-0") > -1) {
    addClass(menuTogglerId, "fixed top-10 right-10");
    removeClass(menuTogglerId, "relative");
    addClass(menuId, "opacity-100 z-30 bg-pink-400");
    removeClass(menuId, "opacity-0 invisible");
  } else {
    removeClass(menuTogglerId, "fixed top-10 right-10");
    addClass(menuTogglerId, "relative");
    addClass(menuId, "opacity-0 invisible");
    removeClass(menuId, "opacity-100 z-30");
  }
});
