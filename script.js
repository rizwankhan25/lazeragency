function navAnimation(){
    let nav = document.querySelector("nav");
nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to(".nav_btm", {
        height: "21vh"
    })
    tl.to(".nav_part-1 h5", {
        display: "block"
    })
    tl.to(".nav_part-1 h5 span", {
        y: 0,
        stagger: {
            amount: 0.6
        }
    })
})
nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    
    tl.to(".nav_part-1 h5 span", {
        y: "25px",
        duration: .1,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav_part-1 h5", {
        display: "none",
        duration:.1,
    })
    tl.to(".nav_btm", {
        height: "0",
        duration: .2
    })
})
}
navAnimation();