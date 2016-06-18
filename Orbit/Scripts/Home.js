function menuClick(e, a) {
    document.getElementById("menu-popup").style.display = "block";
}

document.onclick = function (e, a) {
    var el = e.target;
    while (el) {
        if (el.id == "menu-popup" || el.id == "menu" && (e.target.nodeName == "A" || e.target.parentNode.nodeName == "A"))
            return;

        el = el.parentNode;
    }

    document.getElementById("menu-popup").style.display = "none";
};