let goombasPrice = 12;
let bobohmsPrice = 8;
let cheepCheepPrice = 5;
let goombas = 0;
let bobohms = 0;
let cheepCheep = 0;

let totalBill = () => {
    $(".total-price-amount").html(goombasPrice + bobohmsPrice + cheepCheepPrice);
}

let totalBaddies = () => {
   $("total-baddies-amount").html(goombas + bobohms + cheepCheep)
}

//Goombas functions
$(".goombas-input").on("keyup", () => {
    goombasPrice = Number($(".goombas-input").val() * goombasPrice);
    totalBill();
})




document.querySelector(".bob-ohms-input").addEventListener("keyup", function(){
    bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value * bobohmsPrice);
    document.querySelector(".total-price-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".cheep-cheep-input").addEventListener("keyup", function(){
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value * 5);
    document.querySelector(".total-price-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".goombas-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".bob-ohms-input").addEventListener("keyup", function(){
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".cheep-cheep-input").addEventListener("keyup", function(){
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});