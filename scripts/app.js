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
