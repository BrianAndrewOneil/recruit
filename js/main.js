
// JS for hiding the "...more" link once content is expanded
document.querySelector('.more').addEventListener('click', () => {
    document.querySelector('.more').style.display="none";
});

/**
 * Animation on Scroll
 * Use either only "AOS.init();" or the following, to slow the fades a bit and to set animation to once only
 */
window.addEventListener('load', () => {
    AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
    });
});
