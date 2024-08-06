/**  tooogle icon navber */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.oneclick = () => {
  menuIcon.classList.toggle(" bx-x");
  navbar.classList.toggle("active");
};

/**   scroll section active link */

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /**  sticky navbar */

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.services-container,.portfolio-box,.contact", {
  origin: "bottom"
});
/**  typed js */

const typed = new Typed(".multiple-text", {
  strings: ["CSE Sophomore", "Frontend Developer", "Music Lover"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});