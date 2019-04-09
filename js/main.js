/* 
--<>--<>--<>--<>--<>--<>-- TWEENMAX --<>--<>--<>--<>--<>--<>--

Syntaxe de TweenMax :
TweenMax.to("#target",duration,{vars});

--<>--<>--<>--<>--<>-- .to / .from / .staggerFrom / .staggerTo --<>--<>--<>--<>--<>--<>--
.to (du résultat CSS vers TweenMax)
.from (du résultat TweenMax vers CSS)
.staggerFrom & .staggerTo (Pareil mais avec une animation différée)

--<>--<>--<>--<>--<>-- Propriétés --<>--<>--<>--<>--<>--<>--
{y:800} OU {x : 600}
{left : 600}
{backgroundColor : “white”}
{borderColor : “#fff”}
{padding : 20}
{borderRadius : 25} ou {borderRadius : “50%”}
{rotation : 360}
{scale : 0.5} ou {scale : “50%”} 
{opacity : 0.8} ou {opacity : “80%”}
{ease:Back.easeOut} ou {ease:Elastic.easeOut} etc,...
https://greensock.com/ease-visualizer
{delay:0.5}

Exemple :
TweenMax.from(".class",2,{
    x:600,
    rotation: 360,
    opacity: 1,
})

Dans le cas d'un stagger, il faut rajouter un interval :
TweenMax.staggerFrom(".class",2,{
    x:600,
    rotation: 360,
    opacity: 1,
},0.5)

*/

// ------------------------------------------------- SLIDE 1 (Play with Gsap)


// ------------------------------------------------- SLIDE 2 (BANNIERE CHALET)



// ------------------------------------------------- SLIDE 3 (3 BLOCS DE TEXTE)
    


// ------------------------------------------------- SLIDE 4 (Zoom image montagne + texte)


// ------------------------------------------------- SLIDE 5 (Animation de rideaux + texte)





/*
--<>--<>--<>--<>--<>--<>-- TIMELINEMAX --<>--<>--<>--<>--<>--<>--

1. Créer une variable qui contient la timeline
    var MonAnimation = new TimelineMax();
2.

Ensuite, rajouter vos animation dans cette variable comme ceci :

var anim1 = TweenMax.to...
var anim2 = TweenMax.to...
MonAnimation
    .add(anim1)
    .add(anim2)

OU

MonAnimation
    .to(".class",2,{params})
    .from(".class",2,{params})




--<>--<>--<>--<>--<>-- SCROLLMAGIC --<>--<>--<>--<>--<>--<>--

1. On commence par initialiser le controller :
var controller = new ScrollMagic();

2. Créer une scène
new ScrollMagic.Scene({
    triggerElement: "#id", // Le point de commencement de l'animation
    triggerHook: "onEnter",// onEnter, onCenter, onLeave
})

    .setTween("#id")// Ajoute une animation gsap
    .addTo(controller) // Ajoute l'animation au controller
    .addIndicators(); // Permet de voir les triggers
    .setPin("#id"); // fixe une div au scroll (effet de volets)

*/