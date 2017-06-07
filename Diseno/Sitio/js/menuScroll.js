$(window).scroll(function(){
    window_y = $(window).scrollTop();
    if (window_y > 50) {
    	document.getElementById("menu").style.background = "#333";
    } else {
    	document.getElementById("menu").style.background = "rgba(0,0,0,0.8)";
    }
});