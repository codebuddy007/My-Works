const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timrOut;
function circleSkew(){
    var xScale = 1;
    var yScale = 1;

    var xPrev=0;
    var yPrev=0;

    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timrOut);
        xScale= gsap.utils.clamp(0.8,1.2,dets.clientX - xPrev);
        yScale= gsap.utils.clamp(0.8,1.2,dets.clientY - yPrev);

        xPrev = dets.clientX;
        yPrev = dets.clientY;

        hover(xScale,yScale);

      timrOut =  this.setTimeout(function(){
             document.querySelector('#ms-bg').style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },300)
        
    })
}
circleSkew();

function hover(xScale,yScale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector('#ms-bg').style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(${xScale}, ${yScale})`
    })
}
hover();

function pg1anim(){
    var tl = gsap.timeline();
     tl.from("nav", {
        y : '-12',
        opacity:0,
        duration:1.5,
        ease : Expo.easeInOut
        
     })
     tl.to(".bndng-el", {
        y:0,
        duration : 1.3,
        delay:-0.5,
        opacity:1,
        stagger : 0.3
     })
     tl.from("#home-ftr", {
        y: '-14',
        opacity:0,
        duration : 1,
        delay:-0.5
        
     })
}
pg1anim();

document.querySelectorAll(".sec-inr").forEach(function(el) {
var rotate = 0;
var rotDiff = 0;

el.addEventListener("mouseleave", function(dets) {
   
    gsap.to(el.querySelector("img"), {
        opacity: 0,
        ease : Power3,
      
    });

    
});
    el.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - el.getBoundingClientRect().top;
        rotDiff =dets.clientX - rotate;
        rotate =dets.clientX;
        gsap.to(el.querySelector("img"), {
            opacity: 1,
            ease : Power3,
            top : diff,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20,20,rotDiff)
        });

        
    });
});