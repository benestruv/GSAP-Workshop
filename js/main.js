// Commencez par animer les différents écran avec TweenMax

// ------------------------------------------------- SLIDE 1 (Play with Gsap)
TweenMax.from("#play", 2, {
    x:-600,
    opacity:0,
});

TweenMax.from("#with", 2, {
    opacity:0,
});

TweenMax.from("#gsap", 2, {
    y:400,
    opacity:0,
});

// ------------------------------------------------- SLIDE 2 (BANNIERE CHALET)

TweenMax.from ("#banner1", 1, {
    x:-500,
    opacity:0,
    scale: 0,
    rotation: 360,
})

TweenMax.from ("#banner2", 1, {
    y:500,
    opacity:0,
    scale: 0,
    ease: Back.easeOut,
})

TweenMax.from ("#banner3", 1, {
    x:500,
    opacity:0,
    scale: 0,
    rotation: -360,
});

// ------------------------------------------------- SLIDE 3 (3 BLOCS DE TEXTE)
    
TweenMax.staggerFrom(".box", 0.8, {
    x: -600,
    opacity: 0,
    ease: Back.easeOut,
},0.5);

// ------------------------------------------------- SLIDE 4 (Zoom image montagne + texte)

TweenMax.to("#mountain2",1,{
    scale: 2.5,
    })

TweenMax.staggerFrom(".staggerline",2,{
    x:765,
    ease:Elastic.easeOut,
    delay: 0.5,
},0.5)

// ------------------------------------------------- SLIDE 5 (Animation de rideaux + texte)

TweenMax.from("#lastText",2,{
    opacity: 0,
    scale: 3,
})

TweenMax.from("#curtainLeft",1,{
    y: 800,
    height: 0,
})

TweenMax.from("#curtainRight",1,{
    x: 800,
    height: 0,
})



