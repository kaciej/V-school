var boxes = document.getElementsByClassName("box");

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "blue";
    });
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mousedown", function(){
        this.style.backgroundColor = "red";
    });
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseup", function(){
        this.style.backgroundColor = "yellow";
    });
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("dblclick", function(){
        this.style.backgroundColor = "green";
    });
}

for(var i = 0; i < boxes.length; i++){
    boxes[i]window.addEventListener("scroll", function(){
        this.style.backgroundColor = "orange";
    });
}

//window.addEventListener("scroll", function(){
//    document.querySelector(".box").style.backgroundColor = "orange";
//});

window.addEventListener("keypress", function(e){
    if(e.keyCode == 114){
        document.querySelector(".box").style.backgroundColor = "red";
    }
    if(e.keyCode == 98){
        document.querySelector(".box").style.backgroundColor = "blue";
    }
    if(e.keyCode == 121){
        document.querySelector(".box").style.backgroundColor = "yellow";
    }
    if(e.keyCode == 111){
        document.querySelector(".box").style.backgroundColor = "orange";
    }
    if(e.keyCode == 103){
        document.querySelector(".box").style.backgroundColor = "green";
    }
});