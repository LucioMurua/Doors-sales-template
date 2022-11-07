var root = document.querySelector(':root');
gsap.registerPlugin(ScrollTrigger);


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
        // markers: {
        //     startColor: "yellow",
        //     endColor: "yellow",
        //     fontSize: "1.5em"
        // }
    },
})
// gsap.to(".nav", {
//     scrollTrigger:{
//         trigger: ".dark",
//         start: "top 50%",
//         scrub: 1,
//         markers: {
//             startColor: "orange",
//             endColor: "orange",
//             fontSize: "1.5em"
//         },
//     },
//     onStart: function(){
//             root.style.setProperty('--color-1', 'black')
//             console.log("hola que tal")
//         },
//     onEnter: () => console.log("enter"),
//     onLeave: () => console.log("leave"),
//     onEnterBack: () => console.log("EnterBack"),
//     onLeaveBack: () => console.log("LeaveBack"),

// })

// var rootStyle = root.style;

// ScrollTrigger.create({
//     y: 200,
//     markers:true,
//     start: "top 50%",
//     end: "50% 30%",
//     trigger: ".dark",
//     duration: 1,
//     onEnter: () => root.style.setProperty('--color-1', 'black'),
//     onLeave: () => console.log("Leave"),
//     onEnterBack: () => console.log("EnterBack"),
//     onLeaveBack: () => root.style.setProperty('--color-1', 'var(--color-4)'),
//     scrub: 1,
// })


gsap.to(":root",{
    "--color-1": "#001036",
    "--color-3": "#E2DFFB",
    "--color-4": "#948F72",
    "--color-2": "#948F72",
    duration:1,
    scrollTrigger:{
        trigger: ".dark",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse"
    }
})

// ========SECTION ABOUT======

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
        markers:true,
    }
})

gsap.from(".text1",{
    delay:1,
    x:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".text1",
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
    x:-50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".text2",
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
    x:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".text3",
        start:"top 70%",
    }
})