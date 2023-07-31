{
    const body = document.querySelector(".js-body");
    const button = document.querySelector(".js-button");

    const init = () => {

        welcome();

        button.addEventListener("click", onChangeThemeClick);

    }

    const welcome = () => console.log("Hello World!");

    const onChangeThemeClick = () => {
        changeTheme();
        changeButtonText();
    }

    const changeTheme = () => {
        const siteHeader = document.querySelector(".js-header");
        body.classList.toggle("body--alternate");
        siteHeader.classList.toggle("header--alternate");
    }

    const changeButtonText = () => {
        if (body.classList.contains("body--alternate")) {
            button.innerText = "Zmień na jasny motyw";
        } else {
            button.innerText = "Zmień na ciemny motyw";
        }
    }

    init();
}