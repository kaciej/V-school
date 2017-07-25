let defaultState = {
    text: "this is a test"
}

const mainReducer = (state= defaultState, action) => {
    if(action.type === "GET_TEXT") {
        return {
            ...state,
            text: action.text
        }
    }else {
        return {
            ...state
        }
    }
}

export default mainReducer;