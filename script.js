const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const isOpen = menu.getAttribute("aria-expanded") === "true";

    menu.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
