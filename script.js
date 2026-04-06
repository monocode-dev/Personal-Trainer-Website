const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const opacity = Math.max(0.4, 1 - scroll / 1500);
    nav.style.background = `linear-gradient(
            90deg,
            rgba(175,4,4,${opacity}) 90%,
            rgba(255,0,0,${opacity})
            )`;
            });
