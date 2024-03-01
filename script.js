$(document).ready(function(){
  var n=200; // Start from 200
  setInterval(increment,500);
  function increment(){
    n++;
    if (n > 3200) { // Reset to 200 when n exceeds 3200
      n = 200;
    }
    setCounter(n);
  }
  function setCounter(v){
    var counter=$(".counter");
    var old=counter.children(".counter-value");
    var oldContent=old.children(".counter-value-mask");

    var t=0.5;
    var d=t*0.0;
    var d2=t*0.3;
    var padding=55;
    var offset=5;
    var w=old.data("w");
    w+=padding;
    gsap.to(old, {duration: t, delay: d, x: w, ease: "power1.in"}); // Updated for GSAP 3
    gsap.to(oldContent, {duration: t, delay: d, x: -(w-offset), ease: "power1.in"}); // Updated for GSAP 3
    setTimeout(function(){old.remove()}, t*1000);

    var neu=$("<div/>").addClass("counter-value").appendTo(counter);
    var neuContent=$("<div/>").addClass("counter-value-mask").appendTo(neu).text(v);

    w=neuContent.width();
    neu.data("w",w);
    neu.css({
      width: w
    });
    w+=padding;
    gsap.from(neu, {duration: t, delay: d2, x: -w}); // Updated for GSAP 3
    gsap.from(neuContent, {duration: t, delay: d2, x: w-offset}); // Updated for GSAP 3
  }
});
