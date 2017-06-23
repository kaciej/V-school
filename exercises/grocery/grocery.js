var shopper = {
    fruit: "mango",
    melons: 3,
    ladyStuff: true,
    checkList: function () {
        return this.fruit + this.melons + this.ladyStuff;
    },
    groceryCart: ["bread", "bananna", "greens", "eggs"]
};

document.getElementById('grocery').addEventListener('click', function() {
  document.getElementById('list').textContent = shopper.groceryCart;}
    
