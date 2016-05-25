/*
	Lib Me Lepi
	5/26/2016
*/

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

function prosses(){
	var password = document.getElementById("password").value;
	
	if ((password == "pertamax")){
		alert("Selamat Datang!");
	}

	else{
		alert("Login Failed!");
		window.location.assign("http://me-lepi.blogspot.com");
	}
}

$(document).ready(function(){
	$("#button-uuaa").click(function(){
		$("#hide-uuaa").slideToggle();
	});
});

$(document).ready(function(){
	$("#button-search").click(function(){
		$(".search-w10").slideToggle();
	});
});

/* Blog Post */
$(document).ready(function(){
	$("#button-post").click(function(){
		$("#mainkan2").slideToggle();
	});
});
$(document).ready(function(){
	$("#button-post").click(function(){
		$("#mainkan").slideToggle();
	});
});

$(document).ready(function(){
	$(".closed-w10").click(function(){
		$("#mainkan2").slideToggle();
	});
});
$(document).ready(function(){
	$(".closed-w10").click(function(){
		$("#mainkan").slideToggle();
	});
});

/* deksmen main */
$(document).ready(function(){
	$("#main-kedeksmen").click(function(){
		$(".dekstop-home").slideToggle();
	});
});
$(document).ready(function(){
	$("#main-kedeksmen").click(function(){
		$(".tutup-dulu").slideToggle();
	});
});
$(document).ready(function(){
	$("#deks-butt").click(function(){
		$(".header-noneblande").slideToggle();
        $("#mainkan").slideToggle();
	});
});
$(document).ready(function(){
	$("#deks-butt").click(function(){
		$(".dekstop-home").slideToggle();
	});
});

/* deksmen main2 */
$(document).ready(function(){
	$("#deks-butt2").click(function(){
		$(".header-noneblande").slideToggle();
        $("#mainkan").slideToggle();
	});
});
$(document).ready(function(){
	$("#deks-butt2").click(function(){
		$(".dekstop-home").slideToggle();
		$("#page-right10").slideToggle();
		$("#fake2").slideToggle();
	});
});

/*back to deksmen*/
$(document).ready(function(){
	$("#deks-back").click(function(){
		$(".header-noneblande").slideToggle();
        $("#mainkan").slideToggle();
		$("#hide-uuaa").slideToggle();
	});
});
$(document).ready(function(){
	$("#deks-back").click(function(){
		$(".dekstop-home").slideToggle();
	});
});

/* Slide desk */
$(document).ready(function(){
	$(".suazana").click(function(){
		$(".mokacin").hide(300);
		$("#vol-main").hide();
		$("#baterry-fake").hide();
	});
});
$(document).ready(function(){
	$("#sicknyal").click(function(){
		$(".mokacin").show(200);
	});
});

/* Music */
$(document).ready(function(){
    $("#btn-musik").click(function(){
        $("#gOmUsic").show(500);
        $("#mainkan").hide();
    });
	$(".nih-closed").click(function(){
        $("#mainkan").show(500);
        $("#gOmUsic").hide();
    });
});

$(document).ready(function(){
    $("#btn-brow").click(function(){
        $("#me-chromeKW").show(500);
        $("#mainkan").hide();
    });
	$("#chromeKW-closed").click(function(){
        $("#mainkan").show(500);
        $("#me-chromeKW").hide();
    });
});

/* Beranda */
$(document).ready(function(){
	$("#btn-chromeKW0").click(function(){
		$("#me-chromeKW-label").show("slow");
		$("#me-chromeKW-main").hide();
		$("#me-chromeKW-tampilan").hide();
	});
});

/* Chrome Main */
$(document).ready(function(){
	$("#btn-chromeKW1").click(function(){
		$("#me-chromeKW-main").show("slow");
		$("#me-chromeKW-label").hide();
		$("#me-chromeKW-tampilan").hide();
	});
});

/* chromeKW Tampilan */
$(document).ready(function(){
	$("#btn-chromeKW2").click(function(){
		$("#me-chromeKW-tampilan").show("slow");
		$("#me-chromeKW-label").hide();
		$("#me-chromeKW-main").hide();
	});
});

/* Volume */
var x = document.getElementsByClassName("myVolume");
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
    $("#btn1").click(function(){
        $("#apps-main-dong").animate({right: '-400', opacity: '0.2'}, "slow");
        $("#apps-main-dong").animate({right: "0", opacity: '1'}, "slow");
        $("#apps-main-dong").show();
        $(".dekstop-home").hide();
    });
	$("#btn2").click(function(){
        $(".dekstop-home").animate({left: '-400', opacity: '0.2'}, "slow");
        $(".dekstop-home").animate({left: "100", opacity: '0.5'}, "slow");
        $(".dekstop-home").animate({left: "0", opacity: '1'}, "slow");
        $(".dekstop-home").show();
        $("#apps-main-dong").hide();
    });
});

$(document).ready(function(){
    $("#btn-apps").click(function(){
        $("#apps-main-dong").animate({right: '-400', opacity: '0.2'}, "slow");
        $("#apps-main-dong").animate({right: "0", opacity: '1'}, "slow");
        $("#apps-main-dong").show();
        $(".dekstop-home").hide();
    });
	$("#btn-start").click(function(){
        $(".dekstop-home").animate({left: '-400', opacity: '0.2'}, "slow");
        $(".dekstop-home").animate({left: "100", opacity: '0.5'}, "slow");
        $(".dekstop-home").animate({left: "0", opacity: '1'}, "slow");
        $(".dekstop-home").show();
        $("#apps-main-dong").hide();
    });
});

$(document).ready(function(){
    $(".cari-yuk").click(function(){
        $(".cari-yuk").css("background", "white");
        $(".cari-yuk").css("color", "#2d2d2d");
        $(".cari-yuk").css("opacity", "100");
        $(".cari-yuk").css("filter", "100");
    });
});

/* Battery Fake script */
$(document).ready(function(){
	$("#butt-batt").click(function(){
		$("#baterry-fake").slideToggle();
		$("#vol-main").hide();
	});
});

/* Back to Deskmen2 */
$(document).ready(function(){
	$("#deks-back2").click(function(){
		$(".header-noneblande").slideToggle();
		$(".dekstop-home").slideToggle();
	});
});
