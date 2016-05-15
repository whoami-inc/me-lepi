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
/* cari yuk */
$(document).ready(function(){
    $(".cari-yuk").click(function(){
        $(".cari-yuk").css("background", "white");
        $(".cari-yuk").css("color", "#2d2d2d");
        $(".cari-yuk").css("opacity", "100");
        $(".cari-yuk").css("filter", "100");
    });
});
/* iklan script */
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#iklan-gratis").show();
        $(".dekstop-home").hide();
    });
	$("#btn2").click(function(){
        $(".dekstop-home").show();
        $("#iklan-gratis").hide();
    });
});
