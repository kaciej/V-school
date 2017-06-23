document.getElementById("add").addEventListener("click", function () {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var answer = Number(document.getElementById("answer").innerHTML = num1Value + num2Value);

});

document.getElementById("subtract").addEventListener("click", function () {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var answer = Number(document.getElementById("answer").innerHTML = num1Value - num2Value);
});

document.getElementById("multiply").addEventListener("click", function () {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var answer = Number(document.getElementById("answer").innerHTML = num1Value * num2Value);
});

document.getElementById("divide").addEventListener("click", function () {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var answer = Number(document.getElementById("answer").innerHTML = num1Value / num2Value);
});

document.getElementById("remainder").addEventListener("click", function () {
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var answer = Number(document.getElementById("answer").innerHTML = num1Value % num2Value);

});