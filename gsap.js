gsap.from(".main *",{
    x: 30,  
    y: 40,
    opacity: 0,
    duration: 2,
    delay: 3,
    stagger: 0.5,
    scrollTrigger: ".main *"
    
    
   

})

gsap.from(".page1>h1",{
    opacity: 0,
    duration: 2,
    delay: 3,
    stagger: 0.5,
    scale: 0.5,
    scrollTrigger: ".page1>h1"
    
    
    


})

gsap.from(".page2>h1",{
    rotate:360,
    color:"red",
    duration:2,
    delay:1,
    repeat: -1, //repeat infinite times
    scrollTrigger:".page2>h1" ,
    yoyo: true,   //clock and anticlok rotate
    
    
})

gsap.from(".page3>img",{
    opacity: 0,
    x: -400,
    duration: 3,
    delay: 2,
    scrollTrigger: ".page3>img" 
    
    
    
})

gsap.from(".page3>p",{
    opacity: 0,
    x: 400,
    duration: 3,
    delay: 2,
    scrollTrigger: ".page3>p"
    
    
    
})