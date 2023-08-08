{
    const button = document.querySelector(".js-button");

    const init = () => {

        welcome();

        button.addEventListener("click", toggleBackground);

    }

    const welcome = () => console.log("Hello World!");

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const siteHeader = document.querySelector(".js-header");

        body.classList.toggle("body--alternate");
        siteHeader.classList.toggle("header--alternate");

        if (body.classList.contains("body--alternate")) {
            button.innerText = "Zmień na jasny motyw";
        } else {
            button.innerText = "Zmień na ciemny motyw";
        }
    }

    init();
}