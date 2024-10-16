function loading(){
    var tl = gsap.timeline()
tl.to("#yellow1",{
    top: "-100%",
    delay: 0.5,
    duration:0.6,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top :"100%",
    delay:0.2,
    duration:0.5,
    ease:"expo.out"
},"anim")
tl.to("#loader h1",{
    delay:0.2,
    duration:0.4,
    color:"black"
},"anim")
tl.to("#loader",{
    opacity:0,
    display:"none"
})
}
loading();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



document.querySelector("#footer h2").addEventListener("click",() => {
scroll.scrollTo(0)
})

var elem = document.querySelectorAll(".cont")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var bgimg = e.getAttribute("data-img");
        document.querySelector("#pg2").style.backgroundImage = `url(${bgimg})`
      
    })
  
})

