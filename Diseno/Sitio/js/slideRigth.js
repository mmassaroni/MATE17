$(document).ready(function($){
    $(".cruz").click(function(){
        var div_left = $("#mySidenav").position();
        if (div_left.left == -250) {
            document.getElementById("mySidenav").style.left = "0";
            document.getElementById("out").style.opacity = "1";
        } else {
            document.getElementById("mySidenav").style.left = "-250px";
            document.getElementById("out").style.opacity = "0";
        }
    });

    $("#out").click(function(){
        var div_left = $("#mySidenav").position();
        if (div_left.left == 0) {
            $('.barras').removeClass('change');
        }
    });
});  

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
    document.getElementById("out").style.opacity = "0";
}

function tranX(x) {
    x.classList.toggle("change");
}