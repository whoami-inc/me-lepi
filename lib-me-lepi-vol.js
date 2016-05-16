var x = document.getElementsByClassName("volume");
function setNullVolume() { 
  	x[0].volume = 0.0;
}
function setMedVolume() { 
    x[0].volume = 0.5;
} 
function setFullVolume() { 
    x[0].volume = 1.0;
}
