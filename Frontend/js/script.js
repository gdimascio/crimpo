function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
