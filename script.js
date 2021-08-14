const metric = document.querySelector(".metrics-box");
let avail = true;
window.addEventListener("scroll", (e) => {
  if (avail) {
    if (window.pageYOffset + window.innerHeight > metric.offsetTop) {
      avail = false;
      Array(...metric.children).forEach((e) => {
        let a = 0;
        let inet = setInterval(() => {
          if (a >= 100) {
            clearInterval(inet);
          } else {
            a+=5;
            e.children[1].innerHTML = a;
          }
        }, 100);
      });
    }
  }

  if (window.pageYOffset > 300) {
    document.querySelector("nav").className = "fixed";
    document.querySelector(".inner").className = "inner container";
    document.querySelector(".move-top-x").className = "move-top-x move-top";
  } else {
    document.querySelector(".inner").className = "inner";
    document.querySelector("nav").className = "";
    document.querySelector(".move-top-x").className = "move-top-x";
  }
});
document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".header-links").classList.toggle("show-bar");
});

document.querySelector(".header-links").getBoundingClientRect();
document.querySelectorAll(".transition").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let a = el.getBoundingClientRect();
    let Y = -a.top + e.clientY;
    let X = -a.left + e.clientX;
    let width = a.width;
    let height = a.height;
    el.style.transform = ` perspective(1010px) rotateX(${
      (width / 2 - X) / 10
    }deg) rotateY(${(height / 2 - Y) / 10}deg)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = ` perspective(1010px) rotateX(0deg) rotateY(0deg)`;
  });
});

document.querySelector(".move-top-x").addEventListener("click", () => {
  let interval = setInterval(() => {
    if (window.pageYOffset < 10) {
      clearInterval(interval);
    }
    window.scrollTo(0, window.pageYOffset - 20);
  }, 10);
});

let ca = document.querySelector("form").children;
for (let i = 0; i < ca.length; i++) {
  ca[i].children[0].addEventListener("input", () => {
    if (i != 4) {
      if (ca[i].children[0].value) {
        ca[i].children[1].className = "input-in";
      } else {
        ca[i].children[1].className = "";
      }
    }
  });
}
