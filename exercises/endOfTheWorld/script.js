
counter = 2;
var countDown = setInterval(function(){
    document.querySelector("#timer").innerHTML = ("  " + counter + " ");
    counter--;
    if(counter <= -1){
        clearInterval(countDown);
        document.querySelector(".end-message").innerHTML = "BUMMER";
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/gJe7fY-yowk/maxresdefault.jpg')";
    }
}, 1000);

