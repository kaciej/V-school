document.getElementById("search").addEventListener("keyup", (event) => {
    console.log(event);
    //if key is enter execute search function
    if(event.key === "Enter"){
        search(event.target.value)
    }
})
//write search function that makes API call
let search = (input) => {
    //Requesting the API with axios
axios.get(`http://swapi.co/api/people/${input}/`).then((response) => {
    document.getElementById("name").innerHTML = response.data.name;
    document.getElementById("birth-year").innerHTML = response.data.birth_year;
    document.getElementById("gender").innerHTML = response.data.gender;
    document.getElementById("height").innerHTML = response.data.height;
    document.getElementById("mass").innerHTML = response.data.mass;
    document.getElementById("hair-color").innerHTML = response.data.hair_color;
    document.getElementById("eye-color").innerHTML = response.data.eye_color;

    console.log(response.data);
});  
}




