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
    $("#btn-me-apps").dblclick(function(){
        $("#me-lepi-apzs").show("slow");
		$("#apzs-minim").hide();
    });
	$("#me-lepi-apzs-closed").click(function(){
        $("#me-lepi-apzs").hide();
		$("#apzs-minim").hide();
    });
});

/* Restore down */
$(document).ready(function(){
    $("#me-apzs-restore-down").click(function(){
		$("#me-apzs-maximize").show();
        $("#me-lepi-apzs").animate({width: '60%', height: '70%'}, "slow");
		$("#me-apzs-restore-down").hide();
    });
	$("#me-apzs-maximize").click(function(){
		$("#me-apzs-restore-down").show();
        $("#me-lepi-apzs").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-apzs-maximize").hide();
    });
	$("#me-apzs-manimize").click(function(){
		$("#apzs-minim").show();
        $("#me-lepi-apzs").hide();
    });
	$("#apzs-minim").click(function(){
        $("#me-lepi-apzs").show("slow");
		$("#apzs-minim").hide();
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
	$("#button-post").dblclick(function(){
		$("#mainkan2").slideToggle();
	});
});
$(document).ready(function(){
	$("#button-post").dblclick(function(){
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
    $("#btn-musik").dblclick(function(){
        $("#gOmUsic").show(500);
		$("#musik-minim").hide();
    });
	$(".nih-closed").click(function(){
        $("#gOmUsic").hide();
		$("#musik-minim").hide();
    });
});

/* Music Mimimize */
$(document).ready(function(){
	$("#me-musik-manimize").click(function(){
		$("#musik-minim").show();
        $("#gOmUsic").hide();
    });
	$("#musik-minim").click(function(){
        $("#gOmUsic").show("slow");
		$("#musik-minim").hide();
    });
});

/* Me Chrome */
$(document).ready(function(){
    $("#btn-brow").dblclick(function(){
        $("#me-chromeKW").show(500);
		$("#chromeKW-minim").hide();
    });
	$("#chromeKW-closed").click(function(){
        $("#me-chromeKW").hide();
		$("#chromeKW-minim").hide();
    });
});

/* Restore down */
$(document).ready(function(){
    $("#me-chromeKW-restore-down").click(function(){
		$("#me-chromeKW-maximize").show();
        $("#me-chromeKW").animate({width: '60%', height: '70%'}, "slow");
		$("#me-chromeKW-restore-down").hide();
    });
	$("#me-chromeKW-maximize").click(function(){
		$("#me-chromeKW-restore-down").show();
        $("#me-chromeKW").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-chromeKW-maximize").hide();
    });
	$("#me-chromeKW-manimize").click(function(){
		$("#chromeKW-minim").show();
        $("#me-chromeKW").hide();
    });
	$("#chromeKW-minim").click(function(){
        $("#me-chromeKW").show("slow");
		$("#chromeKW-minim").hide();
    });
});

/* Dragable Chrome */
$(document).ready(function(){
    $( "#me-chromeKW" ).draggable();
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
        	$("#mainkan").slideToggle();
	});
});

/* Beranda */
$(document).ready(function(){
	$("#btn-gOmUsic0").click(function(){
		$("#me-gOmUsic-label").show("slow");
		$("#me-gOmUsic-main").hide();
		$("#me-gOmUsic-tampilan").hide();
	});
});

/* Tampilan */
$(document).ready(function(){
	$("#btn-gOmUsic1").click(function(){
		$("#me-gOmUsic-tampilan").show("slow");
		$("#me-gOmUsic-label").hide();
	});
});

/* Dragable Bin */
$(document).ready(function(){
    $( "#me-bin-main" ).draggable();
});

/* Restore down */
$(document).ready(function(){
    $("#me-restore-down").click(function(){
		$("#me-maximize").show();
        $("#me-bin-main").animate({width: '60%', height: '70%'}, "slow");
		$("#me-restore-down").hide();
    });
	$("#me-maximize").click(function(){
		$("#me-restore-down").show();
        $("#me-bin-main").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-maximize").hide();
    });
	$("#me-manimize").click(function(){
		$("#bin-minim").show();
        $("#me-bin-main").hide();
    });
	$("#bin-minim").click(function(){
        $("#me-bin-main").show("slow");
		$("#bin-minim").hide();
    });
});

/* Bin show|hide */
$(document).ready(function(){
	$("#btn-bin").dblclick(function(){
		$("#me-bin-main").show("slow");
		$("#bin-minim").hide();
	});
});
$(document).ready(function(){
	$("#btn-bin-x").click(function(){
		$("#me-bin-main").hide();
		$("#bin-minim").hide();
	});
});

/* Bin Beranda */
$(document).ready(function(){
	$("#btn-bin0").click(function(){
		$("#me-bin-label").show("slow");
		$("#me-bin").hide();
		$("#me-bin-tampilan").hide();
	});
});

/* Bin Main */
$(document).ready(function(){
	$("#btn-bin1").click(function(){
		$("#me-bin").show("slow");
		$("#me-bin-tampilan").hide();
		$("#me-bin-label").hide();
	});
});

/* Bin Delete */
$(document).ready(function(){
	$("#btn-hps1").click(function(){
		$("#hps1").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps2").click(function(){
		$("#hps2").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps3").click(function(){
		$("#hps3").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps4").click(function(){
		$("#hps4").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps5").click(function(){
		$("#hps5").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps6").click(function(){
		$("#hps6").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps7").click(function(){
		$("#hps7").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps8").click(function(){
		$("#hps8").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps9").click(function(){
		$("#hps9").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps10").click(function(){
		$("#hps10").hide();
		$(".hopuse").show();
	});
});

/* Kembalikan Delete */
$(document).ready(function(){
	$("#hps-kembalikan").click(function(){
		$("#hps1").show("slow");
		$("#hps2").show("slow");
		$("#hps3").show("slow");
		$("#hps4").show("slow");
		$("#hps5").show("slow");
		$("#hps6").show("slow");
		$("#hps7").show("slow");
		$("#hps8").show("slow");
		$("#hps9").show("slow");
		$("#hps10").show("slow");
		$("#hps-kembalikan").hide();
	});
});

function hpsKembali(){
	alert("Sukses di kembalikan! klik OK");
}

/* Bin Tampilan */
$(document).ready(function(){
	$("#btn-bin2").click(function(){
		$("#me-bin-tampilan").show("slow");
		$("#me-bin").hide();
		$("#me-bin-label").hide();
	});
});

/* video show|hide */
$(document).ready(function(){
	$("#btn-video").dblclick(function(){
		$("#me-video-main").show("slow");
		$("#video-minim").hide();
	});
});
$(document).ready(function(){
	$("#btn-video-x").click(function(){
		$("#me-video-main").hide();
		$("#video-minim").hide();
	});
});

/* video thumb one */
$(document).ready(function(){
	$("#vid-thumb-one").click(function(){
		$("#vid-thumb-one-1").show();
		$("#vid-thumb-two-1").hide();
		$("#vid-thumb-three-1").hide();
		$("#vid-thumb-four-1").hide();
	});
});
/* video thumb two */
$(document).ready(function(){
	$("#vid-thumb-two").click(function(){
		$("#vid-thumb-two-1").show();
		$("#vid-thumb-three-1").hide();
		$("#vid-thumb-one-1").hide();
		$("#vid-thumb-four-1").hide();
	});
});
/* video thumb three */
$(document).ready(function(){
	$("#vid-thumb-three").click(function(){
		$("#vid-thumb-three-1").show();
		$("#vid-thumb-one-1").hide();
		$("#vid-thumb-two-1").hide();
		$("#vid-thumb-four-1").hide();
	});
});
/* video thumb four */
$(document).ready(function(){
	$("#vid-thumb-four").click(function(){
		$("#vid-thumb-four-1").show();
		$("#vid-thumb-one-1").hide();
		$("#vid-thumb-two-1").hide();
		$("#vid-thumb-three-1").hide();
	});
});

/* Restore down */
$(document).ready(function(){
    $("#me-video-restore-down").click(function(){
		$("#me-video-maximize").show();
        $("#me-video-main").animate({width: '60%', height: '70%'}, "slow");
		$("#me-video-restore-down").hide();
    });
	$("#me-video-maximize").click(function(){
		$("#me-video-restore-down").show();
        $("#me-video-main").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-video-maximize").hide();
    });
	$("#me-video-manimize").click(function(){
		$("#video-minim").show();
        $("#me-video-main").hide();
    });
	$("#video-minim").click(function(){
        $("#me-video-main").show("slow");
		$("#video-minim").hide();
    });
});

/* video Beranda */
$(document).ready(function(){
	$("#btn-video0").click(function(){
		$("#me-video-label").show("slow");
		$("#me-video").hide();
		$("#me-video-tampilan").hide();
	});
});

/* video Main */
$(document).ready(function(){
	$("#btn-video1").click(function(){
		$("#me-video").show("slow");
		$("#me-video-tampilan").hide();
		$("#me-video-label").hide();
	});
});

/* video Tampilan */
$(document).ready(function(){
	$("#btn-video2").click(function(){
		$("#me-video-tampilan").show("slow");
		$("#me-video").hide();
		$("#me-video-label").hide();
	});
});

/* Dragable Video */
$(document).ready(function(){
    $( "#me-video-main" ).draggable();
});

/* insta show|hide */
$(document).ready(function(){
	$("#btn-insta").dblclick(function(){
		$("#me-insta-main").show("slow");
		$("#insta-minim").hide();
	});
});
$(document).ready(function(){
	$("#btn-insta-x").click(function(){
		$("#me-insta-main").hide();
		$("#insta-minim").hide();
	});
});
/* Restore down */
$(document).ready(function(){
    $("#me-insta-restore-down").click(function(){
		$("#me-insta-maximize").show();
        $("#me-insta-main").animate({width: '60%', height: '70%'}, "slow");
		$("#me-insta-restore-down").hide();
    });
	$("#me-insta-maximize").click(function(){
		$("#me-insta-restore-down").show();
        $("#me-insta-main").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-insta-maximize").hide();
    });
	$("#me-insta-manimize").click(function(){
		$("#insta-minim").show();
        $("#me-insta-main").hide();
    });
	$("#insta-minim").click(function(){
        $("#me-insta-main").show("slow");
		$("#insta-minim").hide();
    });
});

/* insta Beranda */
$(document).ready(function(){
	$("#btn-insta0").click(function(){
		$("#me-insta-label").show("slow");
		$("#me-insta").hide();
		$("#me-insta-tampilan").hide();
	});
});

/* insta Main */
$(document).ready(function(){
	$("#btn-insta1").click(function(){
		$("#me-insta").show("slow");
		$("#me-insta-tampilan").hide();
		$("#me-insta-label").hide();
	});
});

/* insta Tampilan */
$(document).ready(function(){
	$("#btn-insta2").click(function(){
		$("#me-insta-tampilan").show("slow");
		$("#me-insta").hide();
		$("#me-insta-label").hide();
	});
});


/* Dragable insta */
$(document).ready(function(){
    $( "#me-insta-main" ).draggable();
});

/* Post minimize */
$(document).ready(function(){
    $("#me-blog-manimize").click(function(){
		$("#blog-minim").show();
        $("#mainkan").show();
        $("#mainkan2").hide();
    });
	$("#blog-minim").click(function(){
        $("#mainkan2").show();
        $("#mainkan").hide();
		$("#blog-minim").hide();
    });
});
