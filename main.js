document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    if (burger && nav) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("burger-open");
            nav.classList.toggle("nav-open");
            document.body.classList.toggle("no-scroll");
        });

        nav.addEventListener("click", (e) => {
            if (e.target.matches(".nav-link")) {
                burger.classList.remove("burger-open");
                nav.classList.remove("nav-open");
                document.body.classList.remove("no-scroll");
            }
        });
    }
});