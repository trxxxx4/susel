let displayHeight = String(window.innerHeight);
let displayWidth = window.innerWidth;

console.log(displayHeight);


gsap.registerPlugin(ScrollTrigger);

if (displayWidth >= 1161){

    gsap.to('#s1', {
        scrollTrigger: {
            trigger: '#s1',
            start: 'top 40%',
            end: 'bottom 1%',
            scrub: 1,
            
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s2', {
        scrollTrigger: {
            trigger: '#s2',
            start: 'top 40%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: 30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s3', {
        scrollTrigger: {
            trigger: '#s3',
            start: 'top 40%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s4', {
        scrollTrigger: {
            trigger: '#s4',
            start: 'top 40%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: 30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s5', {
        scrollTrigger: {
            trigger: '#s5',
            start: 'top 40%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s6', {
        scrollTrigger: {
            
            trigger: '#s6',
            start: 'top 40%',
            end: 'bottom 1%',
            
            scrub: 1,
             
            
        },
        xPercent: 30,
        duration: 2,
        ease: "none",
        
    })
    
    
    
}

if (displayWidth < 500){

    gsap.to('#s1', {
        scrollTrigger: {
            trigger: '#s1',
            start: 'top 80%',
            end: 'bottom 1%',
            scrub: 1,
            
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s2', {
        scrollTrigger: {
            trigger: '#s2',
            start: 'top 80%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: 30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s3', {
        scrollTrigger: {
            trigger: '#s3',
            start: 'top 80%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s4', {
        scrollTrigger: {
            trigger: '#s4',
            start: 'top 80%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: 30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s5', {
        scrollTrigger: {
            trigger: '#s5',
            start: 'top 80%',
            end: 'bottom 1%',
            scrub: 1,
             
        },
        xPercent: -30,
        duration: 2,
        ease: "none"
    })
    gsap.to('#s6', {
        scrollTrigger: {
            
            trigger: '#s6',
            start: 'top 80%',
            end: 'bottom 1%',
            
            scrub: 1,
             
            
        },
        xPercent: 30,
        duration: 2,
        ease: "none",
        
    })
    
    
    
}









