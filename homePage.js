/*top text*/
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});
/*Titel*/
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});
/*Pinning homepage*/
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "200%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

tl.fromTo('.sliding-text', {y:0, x:-40  }, {y:-500});
tl2.fromTo('.logo', {scale: 6}, {scale: 1, top: '1.5rem', left: "0rem", x: '50%', y: '50%'});

