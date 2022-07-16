function fadeIn(element) {
    element.classList.remove("fade");
}

function fadeOut(element) {
    element.classList.add("fade");
}

function setImg() {
    let heroImg = document.querySelector(".hero-img");
    let currentImg = heroImg.getAttribute("src");
    let hiddenHero = document.querySelector(".hidden-hero");

    fadeIn(heroImg);

    setTimeout(function() {
        fadeOut(heroImg);

    setTimeout(function() {
        if (currentImg === "images/hero-image2.jpg") {
            heroImg.setAttribute("src", "images/hero-image3.jpg");
        } else {
            heroImg.setAttribute("src", "images/hero-image2.jpg");
        }
        
        setTimeout(function() {
            fadeIn(heroImg);
            // heroImg.classList.remove("fade");
            
            setTimeout(function() {
                fadeOut(heroImg);
                // heroImg.classList.add("fade");

                setTimeout(function() {
                    heroImg.style.visibility = "hidden";
                    fadeIn(hiddenHero);
                    // hiddenHero.classList.remove("fade");

                    setTimeout(function() {
                        return
                    }, 800);
                }, 800);
            }, 3000);
        }, 100);
    }, 800);
    }, 3000);
}
setTimeout(setImg, 250);

let navBtn = document.querySelector(".collapsible");
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