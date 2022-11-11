var root = document.querySelector(':root');
gsap.registerPlugin(ScrollTrigger);

// ======HEADER DOORS ANIMATION=====
gsap.to(".bigdoors__left",{
    x: -300,
    scrollTrigger:{
        trigger: ".header",
        start: "50% 90%",
        end: "50% 40%",
        scrub:1,
    },
})

gsap.to(".bigdoors__right", {
    x: 300,
    scrollTrigger:{
        trigger: ".header",
        start: "50% 90%",
        end: "50% 50%",
        scrub:1
    }
})

gsap.to(".bigdoors__container", {
    opacity: 0,
    zoom: 1.5,
    display:"none",
    scrollTrigger:{
        trigger: ".header",
        start: "50% 30%",
        end: "50% 10%",
        scrub:0.5
    },
})

// ======NAV CONTACT BUTTON ANIMATION=====
gsap.from(".nav__li--contact",{
    duration:1,
    yoyo:true,
    outlineOffset:3,
    outline:"2px solid rgb(81, 255, 0)",
    repeat:-1,
    
})

// =========SECTION DARK ANIMATION========
gsap.to(":root",{
    "--color-1": "#001036",
    "--color-3": "#E2DFFB",
    "--color-4": "#948F72",
    "--color-2": "#948F72",
    "--color-6": "#948F72",
    duration:1,
    scrollTrigger:{
        trigger: ".dark",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse"
    }
})

// ========SECTION ABOUT ANIMATION======

gsap.from(".about__title",{
    delay:0.5,
    y:-20,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about__title",
        start:"top 70%",
    }
})

gsap.from(".paragraph",{
    delay:0.5,
    y:-20,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".paragraph",
        start:"top 70%",
    }
})

gsap.from(".img1",{
    x:-50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img1",
        start:"top 70%",
    }
})

gsap.from(".text1",{
    delay:1,
    x:15,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img1",
        start:"top 70%",
    }
})

gsap.from(".img2",{
    x:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img2",
        start:"top 70%",
    }
})

gsap.from(".text2",{
    delay:1,
    x:-15,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img2",
        start:"top 70%",
    }
})

gsap.from(".img3",{
    x:-50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img3",
        start:"top 70%",
    }
})

gsap.from(".text3",{
    delay:1,
    x:15,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".img3",
        start:"top 70%",
    }
})

// =======FORM ANIMATION=====
gsap.from(".contact__form",{
    duration:1,
    background: "rgb(81, 255, 0, .5)",
    repeat: 3,
    scrollTrigger:{
        trigger:".contact__form",
        start: "top bottom",
        end: "bottom top",
        toggleActions:"play reset play reset"
    }
})

// ======MENU DROPDOWN=====
const menu = document.getElementById('menu')
menu.addEventListener('click', ()=>{
    menu.classList.toggle('nav__menu--active')
})