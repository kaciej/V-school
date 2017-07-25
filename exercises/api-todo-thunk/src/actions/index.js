import axios from "axios";

export function addData(item){
    return (dispatch) => {
        axios.post("https://api.vschool.io/kacie/todo/", item).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    } 
}

export function editData(id, item){
    return (dispatch) => {
        axios.put("https://api.vschool.io/kacie/todo/" + id, item).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function removeData(id){
    return (dispatch) => {
        axios.delete("https://api.vschool.io/kacie/todo/" + id).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function loadData() {
    return (dispatch) => {
        return axios.get("https://api.vschool.io/kacie/todo/").then((response) => {
            dispatch(setData(response.data));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setData(items) {
    return {
        type: "SET_DATA",
        items
    }
}