// const toggle = document.querySelector(".toggleMenu"),
//   sidebar = document.querySelector(".sidebar"),
//   containIsi = document.querySelector(".contain-isi"),
//   icon = document.querySelector(".icon"),
//   names = document.querySelector(".name"),
//   contentMenu = document.querySelectorAll(".contentMenu"),
//   projectTab = document.querySelectorAll(".projects-menu li"),
//   menuItem = document.getElementsByClassName("menu-link"),
//   appTitle = document.querySelectorAll(".app-title"),
//   menuProject = document.querySelectorAll(".nav-link.active"),
//   thumbnail = document.querySelectorAll(".projects-thumbnail img");

// toggle.addEventListener("mouseenter", function () {
//   this.style.cursor = "pointer";
// });

// toggle.addEventListener("mouseleave", function () {
//   this.style.cursor = "default";
// });
// toggle.addEventListener("click", function () {
//   contentMenu.forEach(function (contentMenu) {
//     contentMenu.classList.toggle("hidden");
//   });
//   icon.classList.toggle("hidden");
//   names.classList.toggle("hidden");
//   sidebar.classList.toggle("closeSidebar");
//   containIsi.classList.toggle("closeContainIsi");
//   // appTitle.forEach(function (e) {
//   //   e.classList.add("animate__animated", "animate__fadeInRight");
//   // });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   appTitle.forEach(function (e) {
//     e.classList.add("animate__animated", "animate__fadeInDown", "animate__slow");
//   });
// });

const toggle = document.getElementsByClassName("toggleMenu")[0],
  sidebar = document.querySelector(".sidebar"),
  appTitle = document.querySelectorAll(".app-title");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("slide");
  sidebar.style.transform = sidebar.classList.contains("slide") ? "translateX(0)" : "translateX(-400%)";
  appTitle.classList.toggle("hidden");
  appTitle.style.opacity = appTitle.classList.contains("hidden") ? "0" : "1";
});

// document.addEventListener("DOMContentLoaded", function () {
//   appTitle.forEach(function (e) {
//     e.classList.add("animate__animated", "animate__fadeInDown", "animate__slow");
//   });
// });
