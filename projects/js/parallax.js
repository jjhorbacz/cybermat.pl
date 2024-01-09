function parallaxBack() {
    var parallax = document.getElementById("parallaxBack");
    parallax.style.top = -(window.pageYOffset / 4) + 'px';
}

window.addEventListener("scroll", parallaxBack, false);