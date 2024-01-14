const btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", scrollToTop);

document.addEventListener("scroll", toggleBtnVisibility);

function toggleBtnVisibility() {
    if (window.scrollY > 10) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}