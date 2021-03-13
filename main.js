AOS.init();

$(".links-header a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

// Menu-bars responsive
let linksHeader = document.querySelectorAll(".links-header")[0];
let semaforo = true;

document.querySelectorAll(".menu-bars")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".menu-bars")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".menu-bars")[0].style.color = "#000";
        semaforo = true;
    }
    linksHeader.classList.toggle("menudos")
})