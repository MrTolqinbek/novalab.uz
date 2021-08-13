window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 300) {
    document.querySelector("nav").className = "fixed";
    document.querySelector(".inner").className = "inner container";
    document.querySelector('.move-top-x').className = "move-top-x move-top"  
} else {
    document.querySelector(".inner").className = "inner";
    document.querySelector("nav").className = "";
    document.querySelector('.move-top-x').className = "move-top-x"  
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
    el.style.transform = ` perspective(1010px) rotateX(${(width / 2 - X) / 10}deg) rotateY(${
      (height / 2 - Y) / 10
    }deg)`;
  });

  el.addEventListener('mouseleave',()=>{
    el.style.transform = ` perspective(1010px) rotateX(0deg) rotateY(0deg)`;
})
});

document.querySelector('.move-top-x').addEventListener('click',()=>{
 
    let interval = setInterval(()=>{

if(window.pageYOffset<10){
    clearInterval(interval)
}
        window.scrollTo(0,window.pageYOffset-20)
    },10)

})  