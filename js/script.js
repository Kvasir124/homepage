console.log("Hello World!");

const themeButton = document.querySelector(".js-button")
themeButton.addEventListener("click", () => {

    const body = document.querySelector(".js-body");
    const siteHeader = document.querySelector(".js-header");

    body.classList.toggle("body--alternate");
    siteHeader.classList.toggle("header--alternate");

    if (body.classList.contains("body--alternate")) {
        themeButton.innerText = "Zmień na jasny motyw";
    } else {
        themeButton.innerText = "Zmień na ciemny motyw";
    }

})