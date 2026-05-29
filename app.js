
setTimeout(() => {
  const splash = document.getElementById("splash");

  splash.style.opacity = "0";
  splash.style.transition = "0.5s ease";

  setTimeout(() => {
    splash.style.display = "none";
  }, 600);

}, 3500);