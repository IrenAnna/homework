const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const scrollStep = 220;

function scrollNext() {

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - scrollStep) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
}

function scrollPrev() {

    if (slider.scrollLeft <= 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
}

nextBtn.addEventListener('click', scrollNext);
prevBtn.addEventListener('click', scrollPrev);

let autoScroll = setInterval(scrollNext, 2000);


slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
slider.addEventListener('mouseleave', () => {
    autoScroll = setInterval(scrollNext, 2000);
});
function updateTransition() {
    let elements = document.querySelectorAll(".box, .box1");

    elements.forEach(el => {
        if (el.classList.contains("box")) {
            el.classList.replace("box", "box1");
        } else {
            el.classList.replace("box1", "box");
        }
    });
}

setInterval(updateTransition, 5000);

