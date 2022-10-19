const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const animateIn = (element, remove, add) => {
  element.classList.remove(remove);
  element.classList.add(add);
};

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  //  Toggle the Menu Actice
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In
    // overlay.classList.remove("overlay-slide-left");
    // overlay.classList.add("overlay-slide-right");
    animateIn(nav1, "slide-out-1", "slide-in-1");
    animateIn(nav2, "slide-out-2", "slide-in-2");
    animateIn(nav3, "slide-out-3", "slide-in-3");
    animateIn(nav4, "slide-out-4", "slide-in-4");
    animateIn(nav5, "slide-out-5", "slide-in-5");
    // Nav Items
    animateIn(overlay, "overlay-slide-left", "overlay-slide-right");
  } else {
    // overlay.classList.remove("overlay-slide-right");
    // overlay.classList.add("overlay-slide-left");
    animateIn(overlay, "overlay-slide-right", "overlay-slide-left");
    animateIn(nav1, "slide-in-1", "slide-out-1");
    animateIn(nav2, "slide-in-2", "slide-out-2");
    animateIn(nav3, "slide-in-3", "slide-out-3");
    animateIn(nav4, "slide-in-4", "slide-out-4");
    animateIn(nav5, "slide-in-5", "slide-out-5");
  }
};

// Event listener
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
