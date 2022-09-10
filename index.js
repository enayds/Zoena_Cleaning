// first collect all the slide elements

const links = document.querySelectorAll(".slider-item");

const btns = document.querySelectorAll(".slide-btn");

const testBtns = document.querySelectorAll(".testimony-a");

// initiate a count variable to control the slide
var count = 0;

btns.forEach((button, index) => {
    button.addEventListener("click", () => {
        count = index
        btns.forEach(btn => {
            btn.classList.remove("btn-selected")
        })

        button.classList.add("btn-selected")
    })
})

testBtns.forEach(button => {
    button.addEventListener("click", () => {
        testBtns.forEach(btn => {
            btn.classList.remove("test-selected")
        })

        button.classList.add("test-selected")
    })
})


// setInterval(function () {
//     count += 1
//     btns.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             btns.forEach(btn => {
//                 btn.classList.remove("btn-selected")
//             })
//             button.classList.add("btn-selected")
//         })
//     })

//     btns[Math.abs(count % 3)].click()
// }, 5000)