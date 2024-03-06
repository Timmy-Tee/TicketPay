// Loader
function preloader() {
  $(() => {
    setInterval(() => {
      let p = $(".preloader");
      p.css("opacity", 0);

      setInterval(() => p.remove(), parseInt(p.css("--duration")) * 900);
    }, 500);
  });
}

setInterval(() => preloader(), 500);

// Nav Link
const menu_bar = document.querySelector(".menu");
const close_bar = document.querySelector(".close");
const nav_link = document.querySelector(".nav_link")

menu_bar.addEventListener("click", ()=>{
      nav_link.style.display = "flex";
      nav_link.style.animation = "slide_in 0.5s"
      nav_link.style.width = "70%";
})


close_bar.addEventListener("click", ()=>{
  nav_link.style.animation = "slideOut 0.5s";
  nav_link.style.width = "0%";
  nav_link.style.display = "none";
})

