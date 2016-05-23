/*
  License by me-lepi
*/
$(document).ready(function(){
	$("#btn-nul").click(function(){
        $("#yu-btn1").show("slow");
        $("#yu-btn4").hide();
        $("#yu-btn2").hide();
        $("#yu-btn3").hide();
    });
    $("#btn-draw").click(function(){
        $("#yu-btn2").show("slow");
        $("#yu-btn1").hide();
        $("#yu-btn3").hide();
        $("#yu-btn4").hide();
    });
	$("#btn-doc").click(function(){
        $("#yu-btn3").show("slow");
        $("#yu-btn1").hide();
        $("#yu-btn2").hide();
        $("#yu-btn4").hide();
    });
	$("#btn-xhtm").click(function(){
        $("#yu-btn4").show("slow");
        $("#yu-btn1").hide();
        $("#yu-btn2").hide();
        $("#yu-btn3").hide();
    });
});

function myKiri() {
    document.getElementById("text").style.textAlign = "left";
}
function myKanan() {
    document.getElementById("text").style.textAlign = "right";
}
function myTengah() {
    document.getElementById("text").style.textAlign = "center";
}

$(document).ready(function(){
    $("#btn-me-apps").click(function(){
        $("#me-lepi-apzs").show("slow");
        $("#mainkan").hide();
    });
	$("#me-lepi-apzs-closed").click(function(){
        $("#mainkan").show();
        $("#me-lepi-apzs").hide();
    });
});

$(document).ready(function(){
    $(".me-naPi").click(function(){
        $("#me-lepi-apzsSlide").show("slow");
        $(".me-naPi").hide();
        $(".me-naPi2").show();
    });
	$(".me-naPi2").click(function(){
        $("#me-lepi-apzsSlide").hide("slow");
        $(".me-naPi2").hide();
        $(".me-naPi").show();
    });
});

