import axios from "axios";

export function loadData() {
    return(dispatch) => {
        axios.get("d").then((respose) => {
            dispatch(getData(respose.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

export function addData(data) {
    return(dispatch) => {
        axios.post("http://localHost:8080/", data).then((respose) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function deleteData(id) {
    return (dispatch) => {
        axios.delete(`http://localHost:8080/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function updateData(id, data) {
    return (dispatch) => {
        axios.put(`http://localHost:8080/${id}`, data).then((repsonse) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function getData (data) {
    return {
        type: "ADD_HIT",
        data
    }
};