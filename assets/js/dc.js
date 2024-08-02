//HEADER JS
const header = document.querySelector("header");
let lastScroll = 0;

const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

const validateHeader = () => {
  const windowY = window.scrollY;
  const windowH = window.innerHeight;
  if (windowY > windowH) {
    // We passed the first section, set a toggable class
    header.classList.add("header-top");
    // Determine is we ready to animate
    if (windowY > windowH + 40) {
      header.classList.add("header-top");
      if (windowY < lastScroll) {
        // Determine if we scrolling up
        header.classList.add("scroll-up");
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("scroll-up");
    }
  } else {
    header.classList.remove("header-top", "header-top");
  }
  lastScroll = windowY;
};

window.addEventListener("scroll", throttle(validateHeader, 100));


// header scroll
const navbar = document.getElementsByClassName('header')[0];

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 70) {
    navbar.classList.add("header-bg");
  } else {
    navbar.classList.remove("header-bg")
  }
}

// Use the function
window.addEventListener('scroll', onScroll)




// SIDEBAR

function sideBar() {
  var element = document.getElementById("sideBar");
  element.classList.toggle("sidebaropen");
}

// gsap script

// gsap.fromTo(".Best", {y:0,}, {  y:20,  duration:2,  repeat: -1,  repeatDelay: 0,  yoyo: true,});
// gsap.from(".banner-content", { x: -500, duration: 1 });


// SCROLL TRIGER SCRIPT

// gsap.from(".Best", {
//   scrollTrigger: {
//     trigger: ".Best",
//     start: "top 80%",
//     end: "end 70%",
//     scrub: 2,
//   },
//   x: 300,
//   duration: 1,
//   opacity: 1,
// }
// );

// gsap.fromTo(".Best", {
//   opacity: 0,
// }, {
//   opacity: 1,
//   duration: 1,
//   repeat: -1,
//   repeatDelay: 1,
//   yoyo: true,
// });
