import axios from "axios";

export function loadData(){
    return (dispatch) => {
        axios.get("http://localhost:8080/bucketlist/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            return error;
        })
    } 
}

export function deleteData(id){
    return (dispatch) => {
        axios.delete(`http://localhost:8080/bucketlist/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            return error
        })
    }
}

export function addData(data){
    return (dispatch) => {
        axios.post("http://localhost:8080/bucketlist/", data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            return error
        })
    }
}

export function updateData(id, data){
    return (dispatch) => {
        axios.put(`http://localhost:8080/bucketlist/${id}`, data).then((reponse) => {
            dispatch(loadData());
        }).catch((error) => {
            return error
        })
    }
}

function setData (data) {
    return {
        type: "ADD_ITEM",
        data
    }
}