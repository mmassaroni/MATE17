$(document).ready(function($){
    $(".cruz").click(function(){
        var div_ancho = $("#mySidenav").innerWidth();
        if (div_ancho == 0) {
            document.getElementById("mySidenav").style.width = "250px";
        } else {
            document.getElementById("mySidenav").style.width = "0";
        }
    });

    $(".out").click(function(){
        var div_ancho = $("#mySidenav").innerWidth();
        if (div_ancho =! 0) {
            $('.barras').removeClass('change');
        }
    });
});  

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function tranX(x) {
    x.classList.toggle("change");
}