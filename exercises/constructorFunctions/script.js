var Mattress = function (size, firmness, filling, boxSpring) {
    this.size = size;
    this.firness = firmness;
    this.filling = filling;
    this.boxSpring = boxSpring;
};

var Couch = function (color, size, texture, depth) {
    this.color = color;
    this.size = size;
    this.texture = texture;
    this.depth = depth;
};

var Table = function (where, finish, color, seats, style) {
    this.where = where;
    this.finish = finish;
    this.color = color;
    this.seats = seats;
    this.style = style;
};

var Beds = function (type, size, finish, headboard) {
    this.type = type;
    this.size = size;
    this.finish = finish;
    this.headbord = headboard;
};

var masterMattress = new Mattress("king", "firm", "memory foam", false);
var boysMattress = new Mattress("twin", "soft", "spring", true);
var guestMattress = new Mattress("queen", "medium", "spring", true);

var masterBed = new Beds("platform", "king", "barnwood", true);
var boysBed = new Beds("bunk", "twin", "chalk paint", true);
var guestBed = new Beds("traditional", "queen", "stain", false);

var livingCouch = new Couch("gray", "full size", "fabric", 23);
var denCouch = new Couch("brown", "love seat", "leather", 25);

console.log(boysBed);
console.log(masterMattress);
console.log(guestBed);