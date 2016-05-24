/* License by me-lepi */

$(document).ready(function(){
	$("#btn-nul").click(function(){
        $("#btn-apps-intro").show("slow");
        $("#apps-btn4").hide();
        $("#apps-btn2").hide();
        $("#apps-btn3").hide();
    });
    $("#btn-draw").click(function(){
        $("#apps-btn2").show("slow");
        $("#btn-apps-intro").hide();
        $("#apps-btn3").hide();
        $("#apps-btn4").hide();
    });
	$("#btn-doc").click(function(){
        $("#apps-btn3").show("slow");
        $("#btn-apps-intro").hide();
        $("#apps-btn2").hide();
        $("#apps-btn4").hide();
    });
	$("#btn-xhtm").click(function(){
        $("#apps-btn4").show("slow");
        $("#btn-apps-intro").hide();
        $("#apps-btn2").hide();
        $("#apps-btn3").hide();
    });
});

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

function myKiri() {
    document.getElementById("text").style.textAlign = "left";
}
function myKanan() {
    document.getElementById("text").style.textAlign = "right";
}
function myTengah() {
    document.getElementById("text").style.textAlign = "center";
}
