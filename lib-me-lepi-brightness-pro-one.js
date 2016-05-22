/*
    Copyright © 2016
    license by me-lepi
*/

$(document).ready(function(){
  $("#balanced").click(function(){
    $("html").css("-webkit-filter", "brightness(80%)");
    $("html").css("filter", "brightness(80%)");
  });
});
$(document).ready(function(){
  $("#highperform").click(function(){
    $("html").css("-webkit-filter", "none");
    $("html").css("filter", "none");
  });
});
	
