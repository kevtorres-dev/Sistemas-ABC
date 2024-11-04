const menu = document.querySelector(".navegacion");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);





//VIDEO MODAL

cover_video = document.getElementById("contenedor-video-cover");
video = document.getElementById("video");

function mostrar_video() {
    cover_video.style.display = "flex";
    video.src = "https://www.youtube.com/embed/dEYHCHgxTgI?si=C7iryBPklVTR5Y-y";
}

function ocultar_video() {
    cover_video.style.display = "none";
    video.src = "";
}

document.getElementById("btn-video").addEventListener("click", mostrar_video);
document.getElementById("cerrar-video").addEventListener("click", ocultar_video);