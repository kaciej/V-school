document.querySelector(".box").addEventListener("click", function(){
   this.className = "box box-grow";
    this.style.backgroundColor = "#18FFFF";
});

document.querySelector(".box").addEventListener("mouseout", function(){
   this.className = "box box-fat";
    this.style.backgroundColor = "#EEFF41";
});

document.querySelector(".box").addEventListener("mouseout", function(){
    this.className = "box";
})