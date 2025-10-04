let nav_links = document.querySelector(".nav-links");
let hambarger_menu = document.querySelector(".hambarger-menu");

hambarger_menu.addEventListener("click", ()=>{
        nav_links.classList.toggle("active");
    hambarger_menu.classList.toggle("active");

})