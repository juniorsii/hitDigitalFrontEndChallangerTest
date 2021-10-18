function show(elementId) {
    document.getElementById("introducao").style.display = "none";
    document.getElementById("contato").style.display = "none";
    document.getElementById(elementId).style.display = "block";
}