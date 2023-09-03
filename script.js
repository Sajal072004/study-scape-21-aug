var logo_background = document.getElementById("gateway_bg");

// x = -10; i= 1;

// setInterval(function() { 
    
//     if ( x<=17) 
//     {
//         x++;
//         logo_background.style.marginLeft = x+1+"%";
//     }
//     else x = -10;
// },300);

window.onload = function() {
    // Use gsap.from to animate the image with id 'background_bg'
    gsap.from("#gateway_bg", {
      opacity: 0,     // Starting opacity
      
      scale:0,        // Starting x position (move from left)
      duration: 2    // Duration of animation
    //   ease: "bounce", // Easing function
      
    });
  };

var myElement = document.getElementById("blog-img");

y= 0
setInterval(function(){
    y = y>= 0? y+1: 0;
    if(y%3 == 0) myElement.style.backgroundImage = "url('study.avif')";

    else if ( y%3==1) myElement.style.backgroundImage = "url('study2.jpg')";

    else myElement.style.backgroundImage = "url('study3.jpg')";

    
},1700)

gsap.from('#blog-img' , {duration:1.7 , x:-100 , repeat:-1 , yoyo:true });



gsap.from('.gateway', {duration:1 , opacity:0, delay:2 
});

gsap.from('.topp', {duration:1 , opacity:0, delay:2 
});

gsap.from('#classs', {duration:1 , opacity:0, delay:2 
});

gsap.from('.menu', {duration:1 , opacity:0, delay:2 
});

gsap.from('.one-stop', {duration:2 , opacity:0, x:-1200, delay:2.4 
});



// document.getElementsById('gateway_bg')[0].addEventListener('mouseenter', () => {
//     gsap.to('#gateway_bg', { duration: 0.3, filter: brightness(1.5), scale: 1.3 });
//   });

//   document.getElementsById('gateway_bg')[0].addEventListener('mouseleave', () => {
//     gsap.to('#gateway_bg', { duration: 0.3, filter: brightness(1), scale: 1 });
//   });











