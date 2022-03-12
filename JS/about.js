//!----------------------------------------------


//* Parallax 2 section

let parallax2 = document.querySelector("#parallax2")

window.addEventListener("scroll", () => {
    let offSet = window.pageYOffset;
    let width = screen.width;
    let def = 404.453;
    if(width<=1880){
        def -= 20;
    }
    if(width<=1199){
        def -= 6.453;
    }
    if(width<=991){
        def += 270;
    }
    if(width<=767){
        def -= 100;
    }
    // console.log(offSet)
    // console.log(offSet*(0.5))
    offSet = offSet * 0.5;
    offSet = (def) - offSet;
    parallax2.style.transform = `translate3d(0px, ${offSet}px, 0px)`;
})