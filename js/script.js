const elements = document.querySelectorAll(
    "section, .hero"
);

elements.forEach((element) => {
    element.classList.add("reveal");
});

function revealOnScroll() {
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementTop < screenHeight - 80) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
