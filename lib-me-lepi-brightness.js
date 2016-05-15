$(document).ready(function(){
    $("#balanced").click(function(){
        $("body").css("-webkit-filter", "brightness(80%)");
        $("body").css("filter", "brightness(80%)");
    });
});
$(document).ready(function(){
    $("#highperform").click(function(){
        $("body").css("-webkit-filter", "none");
        $("body").css("filter", "none");
    });
});
