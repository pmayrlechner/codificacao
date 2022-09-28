let menu = document.getElementById("menu");
        
function mostrarMenu(){

    //if (menu.style.display != "flex") {
    if (window.getComputedStyle(menu).display != "flex") {
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
event.preventDefault();
}  