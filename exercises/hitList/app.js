var createHitbox = function (name, image) {
    var colmd4 = document.createElement("div");
    colmd4.setAttribute("class", 'col-md-4');

    var hitbox = document.createElement("div");
    hitbox.setAttribute("class", "hitbox");
    hitbox.style.background = ("url('" + image + "')");
    hitbox.style.backgroundSize = ("cover");
    hitbox.style.backgroundPosition = ("center");

    var hitname = document.createElement("div");
    hitname.setAttribute("class", "hitname");
    hitname.innerHTML = name;

    hitbox.appendChild(hitname);
    colmd4.appendChild(hitbox);
    document.querySelector("#hitlist").appendChild(colmd4);
}

axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
    var data = response.data;
    for (var i = 0; data.length; i++) {
        createHitbox(data[i].name, data[i].image);
    }
}).catch(function (err) {
    console.log(err);
});