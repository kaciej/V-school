var mug = {
    color: "yellow",
    size: 8,
    contents: "tea"
};

var trashCan = {
    material: "stainlessSteal",
    lenght: 2.5,
    levelsOfStink: {
        high: "barf",
        medium: "move away",
        low: "take a wiff",
        Stink: function () {
            return this.medium;
        }
    }
}

var ourClothes = {
    Jacob: {
        shirt: "blue",
        pants: "jeans",
        shoes: "tennies",
        classy: true
    },
    Sarah: {
        shirt: "red",
        pants: "black",
        shoes: "hiking shoes",
        outdoorsy: true,
        outfit: function () {
            return this.shirt + " " + this.pants + " " + this.shoes + " " + this.outdoorsy;
        }
    },
    Jordan: {
        shirt: "gray",
        pants: "kayki",
        shoes: "gym shoes",
        sporty: true,
        outfit: function () {
            return this.shirt + " " + this.pants + " " + this.shoes + " " + this.sporty;
        }
    },
    Allen: {
        shirt: "black",
        shorts: "gray",
        shoes: "buisness",
        businessCasual: true,
        outfit: function () {
            return this.shirt + " " + this.shorts + " " + this.shoes + " " + this.busnessCasual;
        }
    },
    Kacie: {
        shirt: "pink",
        pants: "green",
        shoes: "sandals",
        businessCasual: false,
        outfit: function () {
            return this.shirt + " " + this.pants + " " + this.shoes + " " + this.busnessCasual;
        },
        chillin: function () {
            if (this.businessCasual = false) {
                return "chillin";
            } else {
                return "doing work";
            }
        }
    }
}

console.log(trashCan.levelsOfStink.Stink());
console.log(ourClothes.Kacie.outfit());
console.log(ourClothes.Sarah.outfit());
console.log(ourClothes.Allen.outfit());
console.log(ourClothes.Jordan.outfit());
console.log(ourClothes.Kacie.chillin());