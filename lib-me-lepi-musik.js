var x = document.getElementsByClassName("me-lepi-musik");
function setNullVolume() { 
  	x[0].volume = 0.0;
}
function setMedVolume() { 
    x[0].volume = 0.5;
} 
function setFullVolume() { 
    x[0].volume = 1.0;
} 

$(document).ready(function(){
    $("#ctrl-musik").click(function(){
        $("#me-lepi-musik").show();
    });
	$("#mainkan").click(function(){
        $("#me-lepi-musik").hide();
    });
});
