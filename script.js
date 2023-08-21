var logo_background = document.getElementById("gateway_bg");

x = -10; i= 1;

setInterval(function() { 
    
    if ( x<=17) 
    {
        x++;
        logo_background.style.marginLeft = x+1+"%";
    }
    else x = -10;
},300);

var myElement = document.getElementById("blog-img");

y= 0
setInterval(function(){
    y = y>= 0? y+1: 0;
    if(y%3 == 0) myElement.style.backgroundImage = "url('study.avif')";

    else if ( y%3==1) myElement.style.backgroundImage = "url('study2.jpg')";

    else myElement.style.backgroundImage = "url('study3.jpg')";

    
},1700)












