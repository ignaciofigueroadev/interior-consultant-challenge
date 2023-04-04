const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");

const showMenu = () => {
  nav.classList.add("header__nav--active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  closeMenu.style.visibility = "visible";
};

const removeMenu = () => {
  nav.classList.remove("header__nav--active");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
};

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", removeMenu);
