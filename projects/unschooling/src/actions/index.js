import axios from "axios";

export function loadData() {
    return(dispatch) => {
        axios.get("http://localhost:8080/vote/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

export function deleteData(id) {
    return(dispatch) => {
        axios.delete(`http://localhost:8080/vote/${id}`).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

export function addData(data) {
    return(dispatch) => {
        axios.post("http://localhost:8080/vote/", data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

export function updateData(id, data) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/${id}`, data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

export function updateUp(id) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/upVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function updateDown(id) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/downVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function loadDataById(id) {
    return(dispatch) => {
        axios.get(`http://localhost:8080/vote/${id}`).then((response) => {
            dispatch(setCurrentPost(response.data.data))
        }).catch((error) => {
            return error;
        });
    }
}

export function comment(id, comment) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/comment/${id}`, {comment}).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            throw error;
        });
    }
}

function setData (data) {
    return {
        type: "SET_DATA",
        data
    }
}

function setCurrentPost (data) {
    return {
        type: "CURRENT_POST",
        data
    }
}