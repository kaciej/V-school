let pg = require("pg");
let client = new pg.Client();

client.connect();

//READ
client.query("SELECT * FROM Food", (error, result) => {
    if(error) {
        console.log("ERROR", error);
    } else {
        console.log("Success data form database", result.rows);
    }
});

// //CREATE
// client.query(`INSERT INTO Food (name, price, quality) VALUES ($1, $2, $3)`, ["Fish", 20, "Good"], (err, result) => {
//     if(err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success data was inserted into database");
//       client.end();
//     }
// });   

// //UPDATE
// client.query("UPDATE Food SET name=$1, price=$2, quality=$3 WHERE name=$4", ["Kale", 40, "crappy", "Fish"], (err, result) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Item was updated");
//   }
// });

//
client.query("DELETE FROM Food WHERE name=$1", ["Kale"], (err, result) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Item was Deleted");
  }
});

