console.log("Hello World!");

let themeButton = document.querySelector(".themeButton")
themeButton.addEventListener("click", () => {

    let body = document.querySelector("body");
    let siteHeader = document.querySelector(".siteHeader");

    body.classList.toggle("darkSite");
    siteHeader.classList.toggle("darkSiteHeader");

    if (body.classList.contains("darkSite")) {
        themeButton.innerText = "Zmień na jasny motyw";
    } else {
        themeButton.innerText = "Zmień na ciemny motyw";
    }

})