var tl = gsap.timeline();

function time() {
    var a = 0
  setInterval(() => {
      a = a + Math.floor(Math.random() * 20);
      if (a < 100) {
      document.querySelector(".loader h1").innerHTML = a + "%";
    }else{
        a = 100
        document.querySelector(".loader h1").innerHTML = a+"%";
    }

  },150);
}


tl.to(".loader h1", {
  delay: 0.5,
  duration: 1,
  onStart:time(),
});

tl.to(".loader", {
    top: "-100vh",
  delay: 0.5,
  duration: 1.5,
});



tl.to(".page1 h1", {
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
});
