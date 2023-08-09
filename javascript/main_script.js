// PreloadManager
var loader =document.getElementById("preloader");
window.addEventListener("load",function()
{
  loader.style.display = "none";
})

var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

