var getName = function (name) {
    var swName = document.createElement("div");
    swName.setAttribute("class", "swNames");
    swName.innerHTML = name;
    document.querySelector(".characters").appendChild(swName);
}

var getPerson = function (num) {
    axios.get("http://swapi.co/api/people/" + num).then(function (response) {
         getName(response.data.name);
    }).catch(function (err) {
        console.log(err);
    });
};

for(var i = 1; i< 100; i++){
    getPerson(i);
}
