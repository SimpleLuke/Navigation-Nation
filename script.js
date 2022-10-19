const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

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
    animateIn(overlay, "overlay-slide-left", "overlay-slide-right");
    navItems.forEach((navItem, index) =>
      animateIn(navItem, `slide-out-${index + 1}`, `slide-in-${index + 1}`)
    );

    // Nav Items
    animateIn(overlay, "overlay-slide-left", "overlay-slide-right");
  } else {
    // overlay.classList.remove("overlay-slide-right");
    // overlay.classList.add("overlay-slide-left");
    animateIn(overlay, "overlay-slide-right", "overlay-slide-left");
    navItems.forEach((navItem, index) =>
      animateIn(navItem, `slide-in-${index + 1}`, `slide-out-${index + 1}`)
    );
  }
};

// Event listener
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
