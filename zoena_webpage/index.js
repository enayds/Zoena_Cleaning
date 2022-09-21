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


// working on the mobile menu btn for both closing and opening the pane
var menuPane = document.querySelector(".mobile-menu");
var menuOpen = document.querySelector(".menu-btn");
var menuClose = document.querySelector(".close-btn");

menuOpen.addEventListener("click", () => {
    menuPane.classList.add("opened");
});

menuClose.addEventListener("click", () => {
    menuPane.classList.remove("opened");
});


// faq page fuctionality

const faqBtn = document.querySelectorAll(".open-qa-btn");
const faqAnswer = document.querySelectorAll(".response");

// create a function that will check if the faq button is facing up or down before opening or closing an answer

faqBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (getComputedStyle(faqAnswer[index]).position == 'absolute') {
            faqAnswer[index].classList.add("opened");
            faqBtn[index].classList.add('up');
        }

        else {
            faqAnswer[index].classList.remove("opened");
            faqBtn[index].classList.remove('up');
        }
    });
});



// adding fuctionality to the extra details btn

//  first we collect the elements needed

var detBtn = document.querySelectorAll(".view-btn");
var detWindow = document.querySelectorAll(".more-details-section");
var closeDetBtn = document.querySelectorAll(".done-btn");

// adding onclick function to the buttons 
detBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // remove all existing classes from each details window
        detWindow.forEach(win  => {
            win.classList.remove("active")
        })
        detWindow[index].classList.add("active")
    });
});

// closing the details window

closeDetBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        detWindow[index].classList.remove("active");
    })
})