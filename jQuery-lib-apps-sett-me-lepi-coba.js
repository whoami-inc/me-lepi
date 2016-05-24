/* License by me-lepi.github.io */

/* btn folder settings show */
$(document).ready(function(){
	$(".bfs").click(function(){
		$("#me-sett").show("slow");
	});
});
$(document).ready(function(){
	$(".bfs-x").click(function(){
		$("#me-sett").hide();
	});
});

/* btn toggle */
$(document).ready(function(){
	$(".me-lepi-navi-one").click(function(){
		$(".me-lepi-slide").show("slow");
		$(".me-lepi-navi-two").show();
		$(".me-lepi-navi-one").hide();
	});
});
$(document).ready(function(){
	$(".me-lepi-navi-two").click(function(){
		$(".me-lepi-slide").hide("slow");
		$(".me-lepi-navi-one").show();
		$(".me-lepi-navi-two").hide();
	});
});

/* main */
$(document).ready(function(){
	$("#btn-sett").click(function(){
		$("#me-sett-sys").hide();
		$("#me-sett-protect").hide();
		$("#me-sett-tampilan").hide();
		$("#btn-gj").show("slow");
	});
});

/* Tampilan */
$(document).ready(function(){
	$("#btn-sett1").click(function(){
		$("#me-sett-tampilan").show("slow");
		$("#me-sett-protect").hide();
		$("#btn-gj").hide();
		$("#me-sett-sys").hide();
	});
});

/* Tampilan Head Settings Tampilan*/
function meSettOrange() {
    var x = document.getElementsByClassName("me-lepi-sett-kehed");
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meSettCyan() {
    var x = document.getElementsByClassName("me-lepi-sett-kehed");
    x[0].style.background = "cyan";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meSettIndigo() {
    var x = document.getElementsByClassName("me-lepi-sett-kehed");
    x[0].style.background = "indigo ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meSettDimgray() {
    var x = document.getElementsByClassName("me-lepi-sett-kehed");
    x[0].style.background = "dimgray ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meSettCrimson() {
    var x = document.getElementsByClassName("me-lepi-sett-kehed");
    x[0].style.background = "crimson ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}

/* Tampilan Background Settings Tampilan */
function meSettOrangeBG() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "orange";
}
function meSettCyanBG() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "cyan";
}
function meSettIndigoBG() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "indigo ";
}
function meSettDimgrayBG() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "dimgray ";
}
function meSettCrimsonBG() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "crimson ";
}

/*Reset Settings Tampilan */
function meSettResetAll() {
    var x = document.getElementsByClassName("me-lepi-sett-tengah");
    x[0].style.background = "white ";
    x[0].style.color = "#1d1d1d";
	var x = document.getElementsByClassName("me-lepi-sett-kehed);
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}

/* Protect */
$(document).ready(function(){
	$("#btn-sett2").click(function(){
		$("#me-sett-protect").show("slow");
		$("#me-sett-tampilan").hide();
		$("#me-sett-sys").hide();
		$("#btn-gj").hide();
	});
});

/* System */
$(document).ready(function(){
	$("#btn-sett3").click(function(){
		$("#me-sett-sys").show("slow");
		$("#me-sett-protect").hide();
		$("#me-sett-tampilan").hide();
		$("#btn-gj").hide();
	});
});

/* Tampilan Head Apps Tampilan */
function meOrange() {
    var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meCyan() {
    var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "cyan";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meIndigo() {
    var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "indigo ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meDimgray() {
    var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "dimgray ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meCrimson() {
    var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "crimson ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}

/* Tampilan Background Apps Tampilan */
function meOrangeBG() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "orange";
}
function meCyanBG() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "cyan";
}
function meIndigoBG() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "indigo ";
}
function meDimgrayBG() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "dimgray ";
}
function meCrimsonBG() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "crimson ";
}

/*Reset Apps Tampilan*/
function meResetAll() {
    var x = document.getElementsByClassName("me-lepi-tengah");
    x[0].style.background = "white ";
    x[0].style.color = "#1d1d1d";
	var x = document.getElementsByClassName("me-lepi-kehed");
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}

/* viruses info */
var newsText = new Array();
newsText[0] = "100059923";
newsText[1] = "130021923";
newsText[2] = "120316221";
newsText[3] = "110323231";
newsText[4] = "114343431";
newsText[5] = "510223141";
newsText[6] = "710324141";
newsText[7] = "510223141";
newsText[8] = "710323121";
newsText[9] = "011222141";
newsText[10] = "041522141";
newsText[11] = "211324141";
newsText[12] = "011020101";
newsText[13] = "021222643";
newsText[14] = "Viruses Mantan";
newsText[15] = "SEGERA DELETE!!";
var ttloop = 0; // diulang-ulang teksnya ganti dengan 1 (1 = True; 0 = False)
var tspeed = 150; // Typing speed in milliseconds (larger number = slower)
var tdelay = 1500; // Time delay between newsTexts in milliseconds
// ------------- NO EDITING AFTER THIS LINE -------------
var dwAText, cnews=0, eline=0, cchar=0, mxText;
function doNews() {
mxText = newsText.length - 1;
dwAText = newsText[cnews];
setTimeout("addChar()",1000)
}
function addNews() {
cnews += 1;
if (cnews <= mxText) {
dwAText = newsText[cnews];
if (dwAText.length != 0) {
document.news.virusesText1.value = "";
eline = 0;
setTimeout("addChar()",tspeed)
}
}
}
function addChar() {
if (eline!=1) {
if (cchar != dwAText.length) {
nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
document.news.virusesText1.value = nmttxt;
cchar += 1;
if (cchar != dwAText.length) document.news.virusesText1.value += "_";
} else {
cchar = 0;
eline = 1;
}
if (mxText==cnews && eline!=0 && ttloop!=0) {
cnews = 0; setTimeout("addNews()",tdelay);
} else setTimeout("addChar()",tspeed);
} else {
setTimeout("addNews()",tdelay)
}
}
doNews()

/* viruses remove*/
$(document).ready(function(){
    $("#me-delete").click(function(){
        $("#virus-ini").remove();
        $("#Gumoh").show();
    });
});

/* Apps */

$(document).ready(function(){
	$("#btn-nul").click(function(){
        $("#btn-apps-intro").show("slow");
        $("#me-apps-tampilan").hide();
        $("#apps-btn4").hide();
        $("#apps-btn2").hide();
        $("#apps-btn3").hide();
    });
    $("#btn-draw").click(function(){
        $("#apps-btn2").show("slow");
        $("#btn-apps-intro").hide();
        $("#me-apps-tampilan").hide();
        $("#apps-btn3").hide();
        $("#apps-btn4").hide();
    });
	$("#btn-doc").click(function(){
        $("#apps-btn3").show("slow");
        $("#btn-apps-intro").hide();
        $("#me-apps-tampilan").hide();
        $("#apps-btn2").hide();
        $("#apps-btn4").hide();
    });
	$("#btn-xhtm").click(function(){
        $("#apps-btn4").show("slow");
        $("#btn-apps-intro").hide();
        $("#me-apps-tampilan").hide();
        $("#apps-btn2").hide();
        $("#apps-btn3").hide();
    });
	$("#btn-apps-tampilan").click(function(){
        $("#me-apps-tampilan").show("slow");
        $("#btn-apps-intro").hide();
        $("#apps-btn2").hide();
        $("#apps-btn3").hide();
        $("#apps-btn4").hide();
    });
});

/* Main Folder Apps */
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

/* Doc Align */
function myKiri() {
    document.getElementById("text").style.textAlign = "left";
}
function myKanan() {
    document.getElementById("text").style.textAlign = "right";
}
function myTengah() {
    document.getElementById("text").style.textAlign = "center";
}
