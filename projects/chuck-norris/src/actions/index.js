import axios from "axios";

export function jokeGen() {
    return (dispatch) => {
        axios.get("http://api.icndb.com/jokes/random").then((response) => {
            dispatch(getJoke(response.data.value.joke))
        }).catch((error) => {
            return error;
        })
    }
}

function getJoke(joke) {
    return {
        type: "GET_JOKE",
        joke
    }
}