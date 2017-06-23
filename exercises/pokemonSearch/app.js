document.getElementById("search").addEventListener("click", function () {
    var name = document.getElementById("pokemon-num").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://pokeapi.co/api/v2/pokemon/" + name);
    xhr.send();
    
    xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;
        //if 4 then do stuff
        //else don't do anything
        if(xhr.readyState === DONE){
            if(xhr.status == OK){
                var data = JSON.parse(xhr.responseText);
                document.querySelector(".pokename").innerHTML = " " + data.name;
                document.querySelector(".pokeheight").innerHTML = " " + data.height;
                document.querySelector(".pokeweight").innerHTML = " " + data.weight;
                document.querySelector(".pokeability").innerHTML = " " + data.abilities[0].ability.name;
            }else{
                console.log("Error: " + xhr.status); //error occurred during request
            }
        }
    }
});

