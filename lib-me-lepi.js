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
