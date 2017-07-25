import axios from "axios";

let config = {
    headers: {
         "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
    }
   
}

export function convertText(text) {
    return (dispatch) => {
        axios.get(`https://yoda.p.mashape.com/yoda?sentence=${text}`, config).then((response) => {
            dispatch(getText(response.data));
        }).catch((error) => {
            throw error;
        })
    }
}


export function getText(text) {
    return {
        type: "GET_TEXT",
        text
    }
}