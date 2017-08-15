import axios from "axios";

let key = "AIzaSyAoXJSv6ZGw9Ifand1P8CXA0fx0Zp1k6bY";

//Get Lat and Lng
export function getLatAndLng(label, address) {
    let formattedAddress = address.split(" ").join("+");
    return(dispatch) => {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${key}`).then((response) => {
            if(response.data.results.length > 0){
                let geo = response.data.results[0].geometry;
                dispatch(addMarker({
                label,
                lat: geo.location.lat,
                lng: geo.location.lng
            }));
            } else {
                alert("Invalid address")
            }
        }).catch((error) => {
            throw error
        });
    }
}

//GET
export function loadMarkers() {
    return (dispatch) => {
        return axios.get("http://localhost:9000/marker/").then((response) => {
            dispatch(setMarkers(response.data.data));
        }).catch((error) => {
            throw error;
        });
    }
}

//POST
export function addMarker(input) {
    console.log(input);
    return (dispatch) => {
        let data = {
            position: {
                lat: input.lat,
                lng: input.lng
            },
            label: input.label
        }
        return axios.post("http://localhost:9000/marker/", data).then((response) => {
            dispatch(loadMarkers());
            dispatch(setFocus(input.lat, input.lng));
        }).catch((error) => {
            throw error;
        })
    }
}

//Delete
export function deleteMarker(data) {
    return (dispatch) => {
        return axios.delete(`http://localhost:9000/marker/${data._id}`).then((response) => {
            dispatch(loadMarkers());
            dispatch(setCurrent(data))
        }).catch((error) => {
            throw error;
        })
    }
}

//Put
export function updateMarker(id, data) {
    return (dispatch) => {
        return axios.put(`http://localhost:9000/marker/${id}`, data).then((response) => {
            dispatch(loadMarkers());
        }).catch((error) => {
            throw error;
        })
    }
}

export function setMarkers (data) {
    return {
        type: "SET_MARKERS",
        data
    }
}

export function setCurrent(data) {
    return {
        type: "SET_CURRENT",
        data
    }
}

export function setFocus(lat, lng) {
    return {
        type: "SET_FOCUS",
        lat,
        lng
    }
}