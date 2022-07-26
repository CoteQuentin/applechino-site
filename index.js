function fadeIn(element) {
    element.classList.remove("fade");
}

function fadeOut(element) {
    element.classList.add("fade");
}

let navBtn = document.querySelector(".nav-btn");
let navList = document.querySelector(".navbar-list");

navBtn.addEventListener("click", function() {
    let navSymbol = document.querySelector("button .fa-solid");
    let newNavList = window.getComputedStyle(document.querySelector(".navbar-list"));


    if (newNavList.getPropertyValue("top") !== "55px") {

        fadeOut(navSymbol);
        setTimeout(function() {
            navSymbol.classList.replace("fa-bars", "fa-xmark");
            setTimeout(function() {
                fadeIn(navSymbol);
            }, 25);
        }, 150);

    navList.classList.replace("above", "drop");
    } else {

        fadeOut(navSymbol);
        setTimeout(function() {
            navSymbol.classList.replace("fa-xmark", "fa-bars");
            setTimeout(function() {
                fadeIn(navSymbol);
            }, 25);
        }, 150);

        navList.classList.replace("drop", "above");

        console.log("dang it!")
    }
});
