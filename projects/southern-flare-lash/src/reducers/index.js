let defaultState = {
    color: "ff0000",
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "RANDOM_COLOR"){
        if(action.color === ""){
            return {
                ...state,
                color: "ff0000"
            }
        }
        return {
            ...state,
            color: action.color, 
        }
    }else {
        return {
            ...state
        }
    }
}

export default mainReducer;