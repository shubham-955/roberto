const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// animation

// document.addEventListener("DOMContentLoaded", scrollAnim);

// window.addEventListener('scroll', scrollAnim)

window.addEventListener('scroll', () => {
    let content = document.querySelector('.aboutUsTextDetails');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition / 1.2) {
        content.classList.add('active')
    }
})

window.addEventListener('scroll', () => {
    let contents = document.querySelector('.aboutUsThumbnailImages');
    let contentPositions = content.getBoundingClientRect().top;
    let screenPositions = window.innerHeight;
    if (contentPositions < - screenPositions / 0.6) {
        contents.classList.add('actives')
    }
})

// aboutUsThumbnailsView

const reveal = document.querySelectorAll('.reveal');

const scrollAnim = () => {
    let windowht = window.innerHeight;
    reveal.forEach(el => {
        let elpos = el.getBoundingClientRect().top;
        if (elpos < - windowht / 1) {
            el.classList.add('animate')
        }
    })
}

document.addEventListener("DOMContentLoaded", scrollAnim)

window.addEventListener("scroll", scrollAnim)