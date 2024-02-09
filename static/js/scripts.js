const toggle = document.querySelector(".toggleMenu"),
  sidebar = document.querySelector(".sidebar"),
  appTitle = document.querySelectorAll(".app-title");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("slide");
  sidebar.style.transform = sidebar.classList.contains("slide") ? "translateX(0)" : "translateX(-400%)";
  appTitle.classList.toggle("hidden");
  appTitle.style.opacity = appTitle.classList.contains("hidden") ? "0" : "1";
});
