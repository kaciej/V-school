var yogaMama = {
    name: "Amanda",
    level: 1,
    yogaMoves: [
        {
            name: "Tree",
            shirt: false,
            bra: "nessisary",
            standPose: function () {
                console.log("This is a standing pose");
            }
        },
        {
            name: "childs pose",
            shirt: false,
            pants: "nessisary",
            floorPose: function () {
                console.log("This is a floor pose");
            }
        },
        {
            name: "warrior",
            shirt: false,
            pants: "optional"
        }
    ],
    yogaPlaces: [
        {
            city: "South Jordan",
            rating: 8,
            style: "sumit"
        },
        {
            city: "Salt Lake",
            rating: 2,
            style: "shit"
        }
    ]
}

yogaMama.yogaMoves[0].standPose();
yogaMama.yogaMoves[1].floorPose();