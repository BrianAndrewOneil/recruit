// JS for spinner to let page load fully. Note that the 400ms time here needs to match the css for the spinner-wrapper 'transition' element.
const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEL.style.opacity = '0'


    setTimeout(() => {
        spinnerWrapperEL.style.display = 'none';
    }, 400);
})

// an alternative to the above, which fades out the spinner when the page fully loads,
// is to fade out the spinner after a set amount of time
/**
setTimeout(() => {
    spinnerWrapperEL.style.opacity = '0' 
}, 1000)
*/

// JS for hiding the "...more" link once content is expanded
document.querySelector('.more').addEventListener('click', () => {
    document.querySelector('.more').style.display = "none";
});

/**
   Animation on Scroll
   Use either only "AOS.init();" or the following, to slow the fades a bit and to set animation to once only
*/
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
});
