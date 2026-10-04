 const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

// Fur / xir menu-ga
menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Dropdown-ka mobile-ka (click)
dropdownToggle.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});

// Haddii shaashadda la weyneeyo, dib u habee
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("open");
    dropdown.classList.remove("open");
    menuToggle.textContent = "☰";
  }
});