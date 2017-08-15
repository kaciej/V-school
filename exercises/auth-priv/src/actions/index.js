import axios from "axios";

//EVENTS
export function loadEvents() {
    return (dispatch) => {
        return axios.get("http://localhost:9000/hotel/events").then((response) => {
            dispatch(setEvents(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

//GUESTS
export function loadGuests(token) {
    return (dispatch) => {
        return axios.get("http://localhost:9000/hotel/guests", {headers: {Authorization: `Bearer ${token}`} }).then((response) => {
            dispatch(setGuests(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

//LOGIN
export function login(username, password) {
    return (dispatch) => {
        return axios.post("http://localhost:9000/auth/login", {username, password}).then((response) => {
            dispatch(setToken(response.data.token));
            dispatch(setPriv(response.data.priv));
        }).catch((error) => {
            alert("Username or Password are incorrect");
            throw error;
        })
    }
}

//SINGUP
export function signup(username, password) {
    return (dispatch) => {
        return axios.post("http://localhost:9000/auth/signup", {username, password}).then((response) => {
            alert("You now have an account");
        }).catch((error) => {
            alert("Username has already been taken");
            throw error;
        })
    }
}

//User Que
export function loadUserQue(token) {
    return (dispatch) => {
        return axios.get(`http://localhost:9000/auth/userque`, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
            dispatch(setUserQue(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

//ADD USER
export function addUser(username, priv, token) {
    return (dispatch) => {
        return axios.post(`http://localhost:9000/auth/userque`, {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
            dispatch(loadUserQue(token));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setUserQue(data) {
    return {
        type: "SET_USERQUE",
        data
    }
}

export function setEvents(data) {
    return {
        type: "SET_EVENTS",
        data
    }
}

export function setGuests(data) {
    return {
        type: "SET_GUESTS",
        data
    }
}

export function setToken(token) {
    return {
        type: "SET_TOKEN",
        token
    }
}

export function setPriv(priv) {
    return {
        type: "SET_PRIV",
        priv
    }
}

