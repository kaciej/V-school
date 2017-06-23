document.getElementById("output").addEventListener("click", function () {
    document.getElementById("output").innerHTML = "burn";
    document.getElementById("turkeys").style.color = "red";
});

document.getElementById("turkeys").addEventListener("mouseover", function () {
    document.getElementById("turkeys").style.color = "orange";
    document.getElementById("output").innerHTML = "mosquito";
});

document.getElementById("yellow").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = "yellow";
    document.getElementById("yellow").innerHTML = "Green Please";
});

document.getElementById("mutton").addEventListener("click", function () {
    document.getElementById("output").innerHTML = document.getElementById("allen").value;
});