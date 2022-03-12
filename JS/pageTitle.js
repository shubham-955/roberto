//!----------------------------------------------


//* Parallax section

let parallax = document.querySelector("#parallax1")

window.addEventListener("scroll", () => {
    let offSet = window.pageYOffset;
    // console.log(offSet)
    // console.log(offSet*(0.5))
    offSet = offSet * 0.5;
    offSet -= -94.25
    parallax.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
    console.log(offSet)
})