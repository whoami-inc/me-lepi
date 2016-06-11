/* 
////////////////// Me Radio™
////////////////// Copyright 2016 by IyoRTML
*/

$(document).ready(function(){
	$("#btn-meRadio").click(function(){
		$("#titlelatle").show();
		$("#musikDownload").hide();
		$("#meEmbed").hide();
		$("#meMail").hide();
	});
});
$(document).ready(function(){
	$("#btn-meMusik").click(function(){
		$("#musikDownload").show();
		$("#titlelatle").hide();
		$("#meEmbed").hide();
		$("#meMail").hide();
	});
});
$(document).ready(function(){
	$("#btn-meEmbed").click(function(){
		$("#meEmbed").show();
		$("#titlelatle").hide();
		$("#musikDownload").hide();
		$("#meMail").hide();
	});
});
$(document).ready(function(){
	$("#btn-meMail").click(function(){
		$("#meMail").show();
		$("#meEmbed").hide();
		$("#titlelatle").hide();
		$("#musikDownload").hide();
	});
});
$(document).ready(function(){
	$("#btn-more").click(function(){
		$("#Moreforme").slideToggle();
		$("#convas").show();
	});
});
$(document).ready(function(){
	$("#convas").click(function(){
		$("#convas").hide();
		$("#Moreforme").hide();
	});
});

/*~Status~*/
function myStatus() {
    $("#myText").clone().appendTo(".tampilStat");
	var d = new Date();
    var x = document.getElementById("meDate");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = h + ":" + m + ":" + s;
    document.getElementById("meCUser").innerHTML = "Me Status";
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
$(document).ready(function(){
    var x;
    $("#meHps").click(function(){
        x = $(".tampilStat input").detach();
		alert("Berhasil Di Hapus!");
    });
});
