// first collect all the slide elements

const slides = document.querySelectorAll(".carousel-item");

const btns = document.querySelectorAll(".slider-btn");

const testBtns = document.querySelectorAll(".testimony-a");


// initiate a count variable to control the slide
var count = 0;

btns.forEach((btn, index) => {
    
    btn.addEventListener("click", () => {
        // first remove all the active class from all buttons# and slides
        btns.forEach(btn => {
            btn.classList.remove("active");
        })

        slides.forEach(slide => {
            slide.classList.remove("active");
        })

        // add the active class for the specific btn and slide clicked on

        btn.classList.add('active');
        slides[index].classList.add("active");
        count = index;
    })

    
})

// working on the automatic slide function

setInterval(function () {
    btns.forEach(btn => {
        btn.classList.remove('active');
    })

    slides.forEach(slide => {
        slide.classList.remove("active");
    })

    slides[count].classList.add("active");
    btns[count].classList.add("active");
    count ++;
    if (count > 2) {
        count = 0
    }
}, 5000);



// i cant seem to find and save the slide button link so i will have to do it directly

testBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        testBtns.forEach(btn => {
            btn.classList.remove('test-selected')
        })

        btn.classList.add('test-selected')
    })
})

// functionality for the form
// colleting the elements i will be using for the functionality
const openBtn = document.querySelectorAll(".form-button")
const closeBtn = document.querySelector(".close-button")
const formItem = document.querySelector(".form")

// close button
closeBtn.addEventListener("click", () => {
    formItem.classList.remove('active');
})

// open button
openBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        formItem.classList.add("active")
    })
})